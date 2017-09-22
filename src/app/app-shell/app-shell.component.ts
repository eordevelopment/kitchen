import 'rxjs/add/operator/filter';
import { Component, AfterViewInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.less']
})
export class AppShellComponent implements AfterViewInit {
  public isLoggedIn: boolean;
  public isCollapsed: boolean;
  public shoppingQuantity: number;

  private lastPoppedUrl: string;

  constructor(private storage: StorageService, private router: Router, private location: Location) { }

  ngAfterViewInit() {
    this.storage.loggedInUserToken.subscribe(value => {
      setTimeout(() => {
        if (value && value.length > 0) {
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

    this.shoppingQuantity = 30;
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public collapse(): void {
    this.isCollapsed = true;
  }

  public logout(): void {
    this.storage.clear();
    this.router.navigate(['/welcome']);
  }
}
