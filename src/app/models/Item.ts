import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';

export interface IItem {
  id: number;
  name: string;
  quantity: number;
}

export class Item implements IFormEntity, IItem {
  public id: number;
  public name: string;
  public quantity: number;

  public formErrors = {
    'itemName': '',
    'quantity': ''
  };

  public validationMessages = {
    'itemName': {
      'required': 'Item name is required.',
    },
    'quantity': {
      'required': 'Qantity is required.',
    }
  };

  constructor(source?: IItem) {
    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.quantity = source.quantity
    }
  }

  public getFormConfig(): any {
    return {
      'itemName': [this.name, [Validators.required]],
      'quantity': [this.quantity, [Validators.required]]
    }
  }
}
