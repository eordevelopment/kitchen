import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';

export interface IPlanItem {
  isDone: boolean;
  recipeId: number;
  recipeName: string
}

export class PlanItem implements IFormEntity, IPlanItem {
  isDone: boolean;
  recipeId: number;
  recipeName: string;

  formErrors: any;
  validationMessages: any;

  constructor(source?: IPlanItem) {
    if (source) {
      this.isDone = source.isDone;
      this.recipeId = source.recipeId;
      this.recipeName = source.recipeName;
    }
  }

  public getFormConfig() {
    throw new Error('Method not implemented.');
  }
}
