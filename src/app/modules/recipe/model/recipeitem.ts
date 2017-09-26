import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/contract/IFormEntity';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { IItem } from 'app/contract/IItem';
import { Item } from 'app/modules/inventory/model/item';

export class RecipeItem implements IFormEntity, IRecipeItem {
  public amount: number;
  public item: IItem;
  public instructions: string;
  public flaggedForNextShop: boolean;

  public isDone: boolean;

  public formErrors = {
    'amount': '',
    'name': ''
  };

  public validationMessages = {
    'amount': {
      'required': 'Amount is required.',
    },
    'name': {
      'required': 'Name is required.',
    }
  };

  constructor(source?: IRecipeItem) {
    this.isDone = false;
    if (source) {
      this.amount = source.amount;
      this.item = source.item
      this.instructions = source.instructions;
      this.flaggedForNextShop = source.flaggedForNextShop;
    }

    if (!this.item) {
      this.item = new Item();
    }
  }

  public getFormConfig(): any {
    return {
      'amount': [this.amount, [Validators.required]],
      'name': [this.item.name, [Validators.required]],
      'unitType': [this.item.unitType], // new FormControl({value: this.item.unitType, disabled: true}, Validators.required),
      'instructions': [this.instructions]
    }
  }
}
