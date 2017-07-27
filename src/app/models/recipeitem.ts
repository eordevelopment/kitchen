import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';
import { IItem, Item } from 'app/models/item';

export interface IRecipeItem {
  id: number;
  ammount: number;
  item: IItem;
  unitType: string;
  instructions: string;
}

export class RecipeItem implements IFormEntity, IRecipeItem {
  public id: number;
  public ammount: number;
  public item: IItem;
  public unitType: string;
  public instructions: string;

  public formErrors = {
    'ammount': '',
    'name': ''
  };

  public validationMessages = {
    'ammount': {
      'required': 'Ammount is required.',
    },
    'name': {
      'required': 'Name is required.',
    }
  };

  constructor(source?: IRecipeItem) {
    if (source) {
      this.id = source.id;
      this.ammount = source.ammount;
      this.item = source.item
      this.instructions = source.instructions;
      this.unitType = source.unitType;
    }

    if (!this.item) {
      this.item = new Item();
    }
  }

  public getFormConfig(): any {
    return {
      'ammount': [this.ammount, [Validators.required]],
      'name': [this.item.name, [Validators.required]],
      'unitType': [this.unitType],
      'instructions': [this.instructions]
    }
  }
}
