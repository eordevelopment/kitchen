import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { environment } from '../../environments/environment';

import { IAccount } from '../models/account';
import { ServiceError } from '../models/error';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  constructor(private http: Http, private storageService: StorageService) { }

  public register(account: IAccount): Observable<string> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.post(environment.serviceUrl + 'account/register', account, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public login(account: IAccount): Observable<string> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.post(environment.serviceUrl + 'account/login', account, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response): string {
    return res.text();
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
