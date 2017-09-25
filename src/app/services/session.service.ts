///<reference path="../../../node_modules/@types/gapi/index.d.ts"/>
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { IUserSession } from 'app/contract/IUserSession';
import { UserSession } from 'app/classes/userSession';
import { IAuthResponse } from 'app/contract/IAuthResponse';
import { LoginDto } from 'app/classes/LoginDto';
import { environment } from '../../environments/environment';
import { BaseRestService } from 'app/services/BaseRestService';

@Injectable()
export class SessionService extends BaseRestService {
  private sessionKey = 'kh_suser';
  public loggedInUser: BehaviorSubject<IUserSession>;

  constructor(httpClient: HttpClient) {
    super(httpClient, null, 'account');
    this.loggedInUser = new BehaviorSubject<IUserSession>(this.getUser());
    window.addEventListener('signInState', (evt) => {
      this.handleLogin(evt);
    }, false);
  }

  public login(): void {
    (gapi as any).auth2.getAuthInstance().signIn();
  }

  public logout(): void {
    this.clear();
    (gapi as any).auth2.getAuthInstance().signOut();
  }

  public hasAccessToken(): boolean {
    const token = this.getToken() as IAuthResponse;
    if (token && token !== null) {
      return true;
    }
    return false;
  }

  public getToken(): IAuthResponse {
    const user = this.getUser();
    if (user && user != null) {
      return user.userAuth;
    }
    return null;
  }

  private handleLogin(evt: any): void {
    const auth2 = (gapi as any).auth2.getAuthInstance();
    const isSignedIn = auth2.isSignedIn.get() as boolean;
    if (isSignedIn) {

      const currentUser = auth2.currentUser.get();
      const profile = currentUser.getBasicProfile();
      const existingUser = this.getUser();
      let user: UserSession;

      if (existingUser && existingUser != null) {
        user = existingUser;
      } else {
        user = new UserSession(profile);
      }

      user.googleToken = currentUser.getAuthResponse().id_token;
      this.setUser(user);

      if (!user.userAuth || user.userAuth == null) {
        this.getAuthToken(user).subscribe(token => {
          user.userAuth = token;
          this.setUser(user);
        }, (error) => {
          user.serviceError = error;
          this.setUser(user);
        });
      }

    } else {
      this.clear();
      this.loggedInUser.next(null);
    }
  }

  public clear(): void {
    window.localStorage.clear();
    this.loggedInUser.next(null);
  }

  private getUser(): IUserSession {
    let userJson = window.localStorage.getItem(this.sessionKey);

    if (!userJson || userJson == null) {
      userJson = null;
      window.localStorage.removeItem(this.sessionKey);
      return null;
    }

    return JSON.parse(userJson);
  }

  private setUser(user?: IUserSession): void {
    if (user && user != null) {
      window.localStorage.setItem(this.sessionKey, JSON.stringify(user));
      this.loggedInUser.next(user);
    } else {
      window.localStorage.removeItem(this.sessionKey);
      this.loggedInUser.next(null);
    }

  }

  private getAuthToken(account: IUserSession): Observable<IAuthResponse> {
    const dto = new LoginDto(account.googleToken);
    return this.httpClient.post<IAuthResponse>(this.endpoint + `login`, dto).catch(this.handleError);
  }
}
