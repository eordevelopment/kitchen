import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { Account } from '../../models/account';
import { ServiceError } from '../../models/error';

import { AccountService } from 'app/services/account.service';
import { StorageService } from 'app/services/storage.service';
import { FormHelperService } from 'app/services/form-helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public account: Account;
  public failure: string;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private storage: StorageService,
    private formHelper: FormHelperService) { }

  ngOnInit() {
    this.storage.clear();
    this.account = new Account();
    this.loginForm = this.formHelper.buildForm(this.account);
  }

  public onSubmit(): void {
    this.failure = null;
    this.accountService
      .login(this.account)
      .subscribe(response => this.handleSuccess(response),
      (error: any) => this.handleError(error));
  }

  private handleSuccess(token: string): void {
    this.storage.setToken(token);
    this.router.navigate(['/']);
  }

  private handleError(error: ServiceError): void {
    this.failure = error.message;
  }
}
