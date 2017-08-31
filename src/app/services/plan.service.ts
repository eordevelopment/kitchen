import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { ServiceError } from 'app/classes/error';
import { environment } from '../../environments/environment';
import { IPlan } from 'app/contract/IPlan';

@Injectable()
export class PlanService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getUpcomingPlans(): Observable<IPlan[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'plan/upcoming/7', options)
      .map((response) => response.json() as IPlan[])
      .catch(this.handleError);
  }

  public getPreviousPlans(page?: number): Observable<IPlan[]> {
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

    if (value.id && value.id.length > 0) {
      return this.http.put(environment.serviceUrl + 'plan/' + value.id, value, options)
        .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'plan', value, options)
        .catch(this.handleError);
    }
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
