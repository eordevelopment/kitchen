import * as moment from 'moment';
import 'rxjs/add/operator/filter';
import { Component, AfterViewInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { SessionService } from 'app/services/session.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.less']
})
export class AppShellComponent implements AfterViewInit {
  public isLoggedIn: boolean;
  public isCollapsed: boolean;
  public shoppingQuantity: number;
  public copywrightDate: moment.Moment;
  public isPrintView: boolean;

  private lastPoppedUrl: string;

  constructor(
    private sessionManager: SessionService,
    private router: Router,
    private location: Location) {
    this.copywrightDate = moment();
  }

  ngAfterViewInit() {
    this.sessionManager.loggedInUser.subscribe(session => {
      setTimeout(() => {
        if (session && session.userAuth != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
    });

    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
    });

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe((evt: NavigationEnd) => {
      this.isCollapsed = true;

      if (evt.url === '/recipeprint') {
        this.isPrintView = true;
      } else {
        this.isPrintView = false;
      }
      if (evt.url === this.lastPoppedUrl) {
        this.lastPoppedUrl = undefined;
      } else {
        window.scrollTo(0, 0);
      }

      const elements = document.getElementsByClassName('modal-backdrop');
      while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
      }
    });

    this.isCollapsed = true;
    this.isPrintView = false;
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public collapse(): void {
    this.isCollapsed = true;
  }

  public logout(): void {
    this.sessionManager.logout();
    this.router.navigate(['/welcome']);
  }
}
