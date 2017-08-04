import { Validators } from '@angular/forms';

import { md5 } from 'app/classes/md5';
import { IAccount } from 'app/contract/IAccount';
import { IFormEntity } from 'app/contract/IFormEntity';

export class Account implements IFormEntity, IAccount {
  public userName: string;
  public hashedPassword: string;
  public token: string;
  public password: string;

  public formErrors = {
    'name': '',
    'password': ''
  };

  public validationMessages = {
    'name': {
      'required': 'Username is required.',
    },
    'password': {
      'required': 'Password is required.'
    }
  };

  constructor(source?: IAccount) {
    if (source) {
      this.userName = source.userName;
      this.hashedPassword = source.hashedPassword;
      this.token = source.token;
    }
  }

  public hash(): void {
    if (this.password) {
      this.hashedPassword = md5(this.password);
    }
  }

  public getFormConfig(): any {
    return {
      'name': [this.userName, [Validators.required]],
      'password': [this.hashedPassword, Validators.required]
    }
  }
}
