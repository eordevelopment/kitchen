import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/contract/IFormEntity';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { IItem } from 'app/contract/IItem';
import { Item } from 'app/modules/inventory/model/item';

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
