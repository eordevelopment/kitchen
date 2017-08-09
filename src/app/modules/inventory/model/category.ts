import { Validators } from '@angular/forms';

import { ICategory } from 'app/contract/ICategory';
import { IItem } from 'app/contract/IItem';
import { IFormEntity } from 'app/contract/IFormEntity';
import { Item } from 'app/modules/inventory/model/item';

export class Category implements IFormEntity, ICategory {
  public id: number;
  public name: string;
  public items: IItem[];

  private newItemId: number;

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

    this.newItemId = -1;
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

  public upsertItem(source: IItem): void {
    if (source && (!source.id || source.id === 0)) {
      const item = new Item();
      item.id = this.newItemId--;
      item.name = source.name;
      item.quantity = source.quantity;
      item.unitType = source.unitType;
      this.items.push(item);
    } else {
      for (const item of this.items) {
        if (item.id === source.id) {
          item.name = source.name;
          item.quantity = source.quantity;
          item.unitType = source.unitType;
          break;
        }
      }
    }
  }
}
