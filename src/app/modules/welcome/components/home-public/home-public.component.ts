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
  public failure: string;
  public isLoggingIn: boolean;

  constructor(
    private router: Router,
    private accountService: AccountService,
    private sessionManager: SessionService) { }

  ngOnInit() {
    this.isLoggingIn = false;
    this.sessionManager.clear();

    this.sessionManager.loggedInUser.subscribe(value => {
      setTimeout(() => {
        this.session = value;
        if (this.session && this.session != null) {
          if (this.session.userAuth) {
            this.router.navigate(['/home']);
          } else {
            this.isLoggingIn = true;
            this.accountService.login(this.session).subscribe(response => {
              this.session.userAuth = response;
              this.sessionManager.setUser(this.session);
              this.isLoggingIn = false;
            }, (error: ServiceError) => {
              this.failure = error.message;
              this.isLoggingIn = false;
            });
          }
        }
      });
    });
  }

  public login(): void {
    this.sessionManager.login();
  }

}
