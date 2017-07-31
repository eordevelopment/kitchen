import 'rxjs/add/operator/filter';
import { Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.less']
})
export class AppShellComponent implements OnInit {
  public token: string;
  public isCollapsed: boolean;
  private lastPoppedUrl: string;

  constructor(private storage: StorageService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.storage.loggedInUserToken.subscribe(value => this.token = value);

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
  }

  public toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public logout(): void {
    this.storage.clear();
    this.router.navigate(['/login']);
  }
}
