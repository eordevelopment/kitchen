import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserSession } from 'app/classes/userSession';
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
    private sessionManager: SessionService) { }

  ngOnInit() {
    this.isLoggingIn = false;
    this.sessionManager.clear();

    this.sessionManager.loggedInUser.subscribe(value => {
      this.session = value;
      if (this.session && this.session != null) {
        if (this.session.serviceError && this.session.serviceError != null) {
          this.failure = this.session.serviceError.message;
        }
        if (this.session.userAuth && this.session.userAuth != null) {
          this.router.navigate(['/home']);
          this.isLoggingIn = false;
        } else {
          this.isLoggingIn = true;
        }
      } else {
        this.failure = undefined;
        this.isLoggingIn = false;
      }
    });
  }

  public login(): void {
    this.sessionManager.login();
  }

}
