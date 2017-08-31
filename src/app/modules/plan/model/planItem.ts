import { Validators } from '@angular/forms';
import { IPlanItem } from 'app/contract/IPlanItem';

export class PlanItem implements IPlanItem {
  isDone: boolean;
  recipeId: string;
  recipeName: string;

  constructor(source?: IPlanItem) {
    if (source) {
      this.isDone = source.isDone;
      this.recipeId = source.recipeId;
      this.recipeName = source.recipeName;
    }
  }
}
