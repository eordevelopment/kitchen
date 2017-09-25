import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './storage.service';

import { IUserSession } from 'app/contract/IUserSession';
import { LoginDto } from 'app/classes/LoginDto';
import { BaseRestService } from 'app/services/BaseRestService';
import { IAuthResponse } from 'app/contract/IAuthResponse';

@Injectable()
export class AccountService extends BaseRestService {

  constructor(httpClient: HttpClient, storageService: StorageService) {
    super(httpClient, storageService, 'account');
  }

  public login(account: IUserSession): Observable<IAuthResponse> {
    const dto = new LoginDto(account.googleToken);
    return this.httpClient.post<IAuthResponse>(this.endpoint + `login`, dto).catch(this.handleError);
  }
}
