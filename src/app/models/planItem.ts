import { Validators } from '@angular/forms';

export interface IPlanItem {
  isDone: boolean;
  recipeId: number;
  recipeName: string
}

export class PlanItem implements IPlanItem {
  isDone: boolean;
  recipeId: number;
  recipeName: string;

  constructor(source?: IPlanItem) {
    if (source) {
      this.isDone = source.isDone;
      this.recipeId = source.recipeId;
      this.recipeName = source.recipeName;
    }
  }
}
