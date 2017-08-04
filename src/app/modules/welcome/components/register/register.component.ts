import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';

import { Account } from 'app/modules/welcome/model/account';
import { ServiceError } from 'app/classes/error';

import { AccountService } from 'app/services/account.service';
import { StorageService } from 'app/services/storage.service';
import { FormHelperService } from 'app/services/form-helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public account: Account;
  public failure: string;
  public showPassword: boolean;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private storage: StorageService,
    private location: Location,
    private formHelper: FormHelperService) { }

  ngOnInit() {
    this.storage.clear();
    this.account = new Account();
    this.registerForm = this.formHelper.buildForm(this.account);
    this.showPassword = true;
  }

  public onSubmit(): void {
    this.account.hash();
    this.failure = null;
    this.accountService
      .register(this.account)
      .subscribe(response => this.handleSuccess(response),
      (error: any) => this.handleError(error));
  }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  public goBack(): void {
    this.location.back();
  }

  private handleSuccess(token: string): void {
    this.storage.setToken(token);
    this.router.navigate(['/']);
  }

  private handleError(error: ServiceError): void {
    this.failure = error.message;
  }
}
