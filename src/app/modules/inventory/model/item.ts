import { Validators } from '@angular/forms';

import { IItem } from 'app/contract/IItem';
import { IFormEntity } from 'app/contract/IFormEntity';

export class Item implements IFormEntity, IItem {
  public id: string;
  public name: string;
  public quantity: number;
  public unitType: string;

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
      this.quantity = source.quantity;
      this.unitType = source.unitType;
    }
  }

  public getFormConfig(): any {
    return {
      'itemName': [this.name, [Validators.required]],
      'quantity': [this.quantity, [Validators.required]],
      'unitType': [this.unitType]
    }
  }
}
