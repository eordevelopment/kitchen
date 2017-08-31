import { Validators } from '@angular/forms';

import { ICategory } from 'app/contract/ICategory';
import { IItem } from 'app/contract/IItem';
import { IFormEntity } from 'app/contract/IFormEntity';
import { Item } from 'app/modules/inventory/model/item';

export class Category implements IFormEntity, ICategory {
  public id: string;
  public name: string;
  public items: IItem[];

  public formErrors = {
    'name': ''
  };

  public validationMessages = {
    'name': {
      'required': 'Name is required.',
    }
  };

  public constructor(source?: ICategory) {
    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.items = source.items;
    }

    if (!this.items) {
      this.items = new Array();
    }
  }

  public getFormConfig(): any {
    return {
      'name': [this.name, [Validators.required]]
    }
  }

  public removeItem(source?: IItem): void {
    if (source) {
      this.items = this.items.filter(x => x.id !== source.id);
    }
  }

  public updateItem(idx: number, source: IItem): void {
    if (idx >= 0 && idx < this.items.length) {
      this.items[idx].name = source.name;
      this.items[idx].quantity = source.quantity;
      this.items[idx].unitType = source.unitType;
      this.items[idx].id = source.id;
    }
  }

  public insertItem(source: IItem): void {
    const item = new Item();
    item.name = source.name;
    item.quantity = source.quantity;
    item.unitType = source.unitType;
    item.id = source.id;
    this.items.push(item);
  }
}
