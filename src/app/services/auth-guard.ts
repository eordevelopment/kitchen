import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'app/services/session.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate() {
    if (this.sessionService.hasAccessToken()) {
      return true;
    }

    this.router.navigate(['/welcome']);
    return false;
  }
}
