import { Injectable } from '@angular/core';

import { IUserSession } from 'app/contract/IUserSession';

@Injectable()
export class StorageService {
  private tokenKey = 'kh_token';
  private sessionKey = 'kh_suser';

  constructor() {
  }

  public hasAccessToken(): boolean {
    const token = this.getToken() as string;
    if (token && token !== null) {
      return true;
    }
    return false;
  }

  public setToken(token: string): void {
    if (token && token !== 'null') {
      window.localStorage.setItem(this.tokenKey, token);
    } else {
      token = null;
      window.localStorage.removeItem(this.tokenKey);
    }
  }

  public getToken(): string {
    let token = window.localStorage.getItem(this.tokenKey);

    if (token === 'null') {
      token = null;
      window.localStorage.removeItem(this.tokenKey);
    }

    return token;
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
