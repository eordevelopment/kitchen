import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StorageService {
  private tokenKey = 'kh_token';
  public loggedInUserToken: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() {
    this.loggedInUserToken = new BehaviorSubject<string>(this.getToken());
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
    this.loggedInUserToken.next(token);
  }

  public getToken(): string {
    let token = window.localStorage.getItem(this.tokenKey);

    if (token === 'null') {
      token = null;
      window.localStorage.removeItem(this.tokenKey);
    }

    return token;
  }

  public clear(): void {
    console.log("Clearing local storage");
    window.localStorage.clear();
    this.loggedInUserToken.next(null);
  }
}

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));
