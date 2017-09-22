import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserSession } from 'app/classes/userSession';
import { AccountService } from 'app/services/account.service';
import { ServiceError } from 'app/classes/error';
import { SessionService } from 'app/services/session.service';
import { IUserSession } from 'app/contract/IUserSession';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.less']
})
export class HomePublicComponent implements OnInit {
  public session: IUserSession;

  constructor(
    private router: Router,
    private sessionManager: SessionService) { }

  ngOnInit() {
    this.sessionManager.logout();
    this.sessionManager.loggedInUser.subscribe(value => {
      this.session = value;
      if (this.session && this.session != null && this.session.userToken != null) {
        this.router.navigate(['/home']);
      }
    });
  }

  public login(): void {
    this.sessionManager.login();
  }

  public hasFailure(): boolean {
    if (this.session && this.session != null && this.session.loginError != null) {
      return true;
    }
    return false;
  }

}
