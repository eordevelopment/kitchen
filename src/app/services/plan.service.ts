import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { IPlan } from '../models/plan';
import { ServiceError } from '../models/error';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class PlanService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getOpenPlans(): Observable<IPlan[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'plan/open', options)
      .map(response => response.json() as IPlan[])
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

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}