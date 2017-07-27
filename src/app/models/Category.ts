import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';
import { IItem, Item } from 'app/models/item';

export interface ICategory {
  id: number;
  name: string;
  items: IItem[];
}

export class Category implements IFormEntity, ICategory {
  public id: number;
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

  public upsertItem(source: IItem): void {
    if (source && (!source.id || source.id === 0)) {
      const item = new Item();
      item.id = -Math.abs(this.items.length);
      item.name = source.name;
      item.quantity = source.quantity;
      this.items.push(item);
    } else {
      for (const item of this.items) {
        if (item.id === source.id) {
          item.name = source.name;
          item.quantity = source.quantity;
          break;
        }
      }
    }
  }
}
