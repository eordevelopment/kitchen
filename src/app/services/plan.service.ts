import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { IPlan, Plan } from '../models/plan';
import { ServiceError } from '../models/error';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getOpenPlans(): Observable<Plan[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'plan/open', options)
      .map((response) => this.mapOpenPlans(response))
      .catch(this.handleError);
  }

  public getClosedPlans(page?: number): Observable<IPlan[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    if (!page) {
      page = 0;
    }

    return this.http.get(environment.serviceUrl + 'plan/closed/' + page, options)
      .map(response => response.json() as IPlan[])
      .catch(this.handleError);
  }

  public savePlan(value: IPlan): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    if (value.id && value.id > 0) {
      return this.http.put(environment.serviceUrl + 'plan/' + value.id, value, options)
        .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'plan', value, options)
        .catch(this.handleError);
    }
  }

  private mapOpenPlans(response: any): Plan[] {
    const values = response.json() as IPlan[];

    const openPlans: Plan[] = new Array();

    for (let i = 0; i < values.length; i++) {
      openPlans.push(new Plan(values[i]));
    }

    const now = moment();

    let index = 0;
    while (openPlans.length < 7) {
      const dt = moment(now).add(index, 'd');
      if (!this.haveDayPlan(dt, openPlans)) {
        const plan = new Plan();
        plan.id = -index;
        plan.dateTime = dt;
        plan.items = new Array();
        openPlans.push(plan);
      }
      index += 1;
    }

    return openPlans;
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }

  private haveDayPlan(date: moment.Moment, openPlans: Plan[]): boolean {
    for (let j = 0; j < openPlans.length; j++) {
      if (date.isSame(openPlans[j].dateTime, 'day')) {
        return true;
      }
    }
    return false;
  }
}
