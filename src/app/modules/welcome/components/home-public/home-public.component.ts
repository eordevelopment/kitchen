import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserSession } from 'app/classes/userSession';
import { AccountService } from 'app/services/account.service';
import { ServiceError } from 'app/classes/error';
import { SessionService } from 'app/services/session.service';

@Component({
  selector: 'app-home-public',
  templateUrl: './home-public.component.html',
  styleUrls: ['./home-public.component.less']
})
export class HomePublicComponent implements OnInit {
  public failure: string;
  public logginIn: boolean;

  constructor(
    private router: Router,
    private sessionManager: SessionService) { }

  ngOnInit() {
    this.sessionManager.logout();
    this.logginIn = false;
  }

  public login(): void {
    this.sessionManager.login();
  }
}
