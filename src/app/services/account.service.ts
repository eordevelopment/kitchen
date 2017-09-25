import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { IUserSession } from 'app/contract/IUserSession';
import { LoginDto } from 'app/classes/LoginDto';
import { BaseRestService } from 'app/services/BaseRestService';
import { IAuthResponse } from 'app/contract/IAuthResponse';
import { SessionService } from 'app/services/session.service';

@Injectable()
export class AccountService extends BaseRestService {

  constructor(httpClient: HttpClient, sessionService: SessionService) {
    super(httpClient, sessionService, 'account');
  }

  public login(account: IUserSession): Observable<IAuthResponse> {
    const dto = new LoginDto(account.googleToken);
    return this.httpClient.post<IAuthResponse>(this.endpoint + `login`, dto).catch(this.handleError);
  }
}
