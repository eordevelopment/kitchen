import * as _ from 'underscore';
import * as moment from 'moment';

import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/contract/IFormEntity';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeStep } from 'app/contract/IRecipeStep';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { IPlan } from 'app/contract/IPlan';
import { RecipeStep } from 'app/modules/recipe/model/recipestep';
import { RecipeItem } from 'app/modules/recipe/model/recipeitem';
import { IRecipeType } from 'app/contract/IRecipeType';

export class Recipe implements IFormEntity, IRecipe {
  public id: string;
  public name: string;
  public recipeType: IRecipeType;
  public key: string;
  public recipeSteps: RecipeStep[];
  public recipeItems: RecipeItem[];
  public assignedPlans: IPlan[];

  public formErrors = {
    'name': ''
  };

  public validationMessages = {
    'name': {
      'required': 'Name is required.',
    }
  };

  constructor(source?: IRecipe) {
    this.recipeSteps = new Array();
    this.recipeItems = new Array();

    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.recipeType = source.recipeType;
      this.assignedPlans = source.assignedPlans;
      this.key = source.key;

      if (source.recipeSteps) {
        for (const iStep of source.recipeSteps) {
          const step = new RecipeStep(iStep);
          this.recipeSteps.push(step);
        }
      }

      if (source.recipeItems) {
        for (const iItem of source.recipeItems) {
          const item = new RecipeItem(iItem);
          this.recipeItems.push(item);
        }
      }
    }

    if (this.recipeSteps.length > 0) {
      this.recipeSteps = _.sortBy(this.recipeSteps, 'stepNumber');
    }
  }

  public getFormConfig(): any {
    return {
      'name': [this.name, [Validators.required]]
    }
  }

  public nextPlan(): moment.Moment {
    if (this.assignedPlans && this.assignedPlans.length > 0) {
      return moment(this.assignedPlans[0].dateTime);
    }
    return undefined;
  }

  public hasItems() {
    return this.recipeItems && this.recipeItems != null && this.recipeItems.length > 0;
  }

  public removeStep(source?: IRecipeStep): void {
    if (source) {
      const steps = new Array();
      for (let i = 0; i < this.recipeSteps.length; i++) {
        const step = this.recipeSteps[i];
        if (step.stepNumber === source.stepNumber) {
          continue;
        }

        step.stepNumber = steps.length + 1;
        steps.push(step);
      }

      this.recipeSteps = steps;
    }
  }

  public updateStep(idx: number, source: IRecipeStep): void {
    if (idx < this.recipeSteps.length) {
      this.recipeSteps[idx].stepNumber = source.stepNumber;
      this.recipeSteps[idx].description = source.description;
    }
  }

  public insertStep(source: IRecipeStep): void {
    const item = new RecipeStep();
    item.description = source.description;
    item.stepNumber = this.recipeSteps.length + 1;
    this.recipeSteps.push(item);
  }

  public removeItem(idx: number): void {
    if (idx >= 0 && idx < this.recipeItems.length) {
      const items = new Array();
      for (let i = 0; i < this.recipeItems.length; i++) {
        if (i !== idx) {
          items.push(this.recipeItems[i]);
        }
      }
      this.recipeItems = items;
    }
  }

  public updateItem(idx: number, source: IRecipeItem): void {
    if (idx < this.recipeItems.length) {
      this.recipeItems[idx].amount = source.amount;
      this.recipeItems[idx].instructions = source.instructions;
      this.recipeItems[idx].item = source.item;
      this.recipeItems[idx].item.unitType = source.item.unitType;
    }
  }

  public insertItem(source: IRecipeItem): void {
    const item = new RecipeItem();
    item.amount = source.amount;
    item.instructions = source.instructions;
    item.item = source.item;
    item.item.unitType = source.item.unitType;
    this.recipeItems.push(item);
  }

  public sortSteps(): void {
    this.recipeSteps.sort(this.sortAsc);
  }

  private sortAsc(a: RecipeStep, b: RecipeStep): number {
    if (a.stepNumber < b.stepNumber) {
      return -1;
    }
    if (a.stepNumber > b.stepNumber) {
      return 1;
    }
    return 0;
  }
}
