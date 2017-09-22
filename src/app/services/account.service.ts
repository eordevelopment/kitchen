import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { environment } from '../../environments/environment';

import { ServiceError } from 'app/classes/error';
import { IUserSession } from 'app/contract/IUserSession';
import { LoginDto } from 'app/classes/LoginDto';

@Injectable()
export class AccountService {

  constructor(private http: Http, private storageService: StorageService) { }

  public login(account: IUserSession): Observable<string> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new RequestOptions({ headers: headers });
    const dto = new LoginDto(account.googleToken);

    return this.http.post(environment.serviceUrl + 'account/login', dto, options)
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
