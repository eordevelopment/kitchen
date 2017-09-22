///<reference path="../../../node_modules/@types/gapi/index.d.ts"/>

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUserSession } from 'app/contract/IUserSession';
import { AccountService } from 'app/services/account.service';
import { StorageService } from 'app/services/storage.service';
import { UserSession } from 'app/classes/userSession';
import { ServiceError } from 'app/classes/error';

@Injectable()
export class SessionService {
  public loggedInUser: BehaviorSubject<IUserSession>;

  constructor(private accountService: AccountService, private storage: StorageService) {

    this.loggedInUser = new BehaviorSubject<IUserSession>(this.storage.getUser());
    window.addEventListener('signInState', (evt) => {
      this.handleLogin(evt);
    }, false);
  }

  public login(): void {
    (gapi as any).auth2.getAuthInstance().signIn();
  }

  public logout(): void {
    this.storage.clear();
    this.loggedInUser.next(null);
  }

  private handleLogin(evt: any): void {
    const auth2 = (gapi as any).auth2.getAuthInstance();
    const isSignedIn = auth2.isSignedIn.get() as boolean;
    if (isSignedIn) {

      const currentUser = auth2.currentUser.get();
      const profile = currentUser.getBasicProfile();
      const user = new UserSession(profile);
      user.googleToken = currentUser.getAuthResponse().id_token;
      this.loggedInUser.next(user);

      this.accountService
        .login(user)
        .subscribe(response => {
          user.userToken = response;
          user.loginError = null;

          this.storage.setToken(response);
          this.loggedInUser.next(user);
        },
        (error: any) => this.handleError(error));

    } else {
      this.storage.clear();
      this.loggedInUser.next(null);
    }
  }

  private handleError(error: ServiceError): void {
    const user = this.storage.getUser();
    user.loginError = error;
    this.loggedInUser.next(user);
  }

}
