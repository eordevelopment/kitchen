import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from 'app/services/storage.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.less']
})
export class AppShellComponent implements OnInit {
  public token: string;
  public isCollapsed: boolean;

  constructor(private storage: StorageService, private router: Router) { }

  ngOnInit() {
    this.storage.loggedInUserToken.subscribe(value => this.token = value);

    this.router.events.subscribe(evt => this.isCollapsed = true);

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
