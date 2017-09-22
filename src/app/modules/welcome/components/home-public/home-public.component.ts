///<reference path="../../../../../../node_modules/@types/gapi/index.d.ts"/>

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'app/services/storage.service';
import { UserSession } from 'app/classes/userSession';
import { AccountService } from 'app/services/account.service';
import { ServiceError } from 'app/classes/error';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.less']
})
export class HomePublicComponent implements OnInit {
  public failure: string;
  public logginIn: boolean;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private storage: StorageService) { }

  ngOnInit() {
    this.logginIn = false;
    window.addEventListener('signInState', (evt) => {
      this.handleLogin(evt);
    }, false);
  }

  public login(): void {
    (gapi as any).auth2.getAuthInstance().signIn();
  }

  private handleLogin(evt: any): void {
    const auth2 = (gapi as any).auth2.getAuthInstance();
    const isSignedIn = auth2.isSignedIn.get() as boolean;
    if (isSignedIn) {
      this.logginIn = true;

      const currentUser = auth2.currentUser.get();
      const profile = currentUser.getBasicProfile();
      const user = new UserSession(profile);
      user.googleToken = currentUser.getAuthResponse().id_token;

      this.accountService
        .login(user)
        .subscribe(response => {
          this.logginIn = false;
          user.userToken = response;
          this.storage.setToken(response);
          this.router.navigate(['/']);
        },
        (error: any) => this.handleError(error));

    } else {
      this.storage.clear();
    }
  }

  private handleError(error: ServiceError): void {
    this.failure = error.message;
  }

}
