import { Injectable } from '@angular/core';

import { IUserSession } from 'app/contract/IUserSession';
import { IAuthResponse } from 'app/contract/IAuthResponse';

@Injectable()
export class StorageService {
  private tokenKey = 'kh_token';
  private sessionKey = 'kh_suser';

  constructor() {
  }

  public hasAccessToken(): boolean {
    const token = this.getToken() as IAuthResponse;
    if (token && token !== null) {
      return true;
    }
    return false;
  }

  public setToken(token: IAuthResponse): void {
    if (token && token !== null) {
      window.localStorage.setItem(this.tokenKey, JSON.stringify(token));
    } else {
      token = null;
      window.localStorage.removeItem(this.tokenKey);
    }
  }

  public getToken(): IAuthResponse {
    let tokenJson = window.localStorage.getItem(this.tokenKey);

    if (!tokenJson || tokenJson == null) {
      tokenJson = null;
      window.localStorage.removeItem(this.tokenKey);
      return null;
    }

    return JSON.parse(tokenJson);
  }

  public setUser(user?: IUserSession): void {
    if (user && user != null) {
      window.localStorage.setItem(this.sessionKey, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(this.sessionKey);
    }

  }

  public getUser(): IUserSession {
    let userJson = window.localStorage.getItem(this.sessionKey);

    if (!userJson || userJson == null) {
      userJson = null;
      window.localStorage.removeItem(this.sessionKey);
      return null;
    }

    return JSON.parse(userJson);
  }

  public clear(): void {
    window.localStorage.clear();
  }
}
