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
  public id: number;
  public name: string;
  public recipeType: IRecipeType;
  public key: string;
  public recipeSteps: IRecipeStep[];
  public recipeItems: IRecipeItem[];
  public assignedPlans: IPlan[];

  private newItemId: number;
  private newStepId: number;

  public formErrors = {
    'name': ''
  };

  public validationMessages = {
    'name': {
      'required': 'Name is required.',
    }
  };

  constructor(source?: IRecipe) {
    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.recipeType = source.recipeType;
      this.recipeSteps = source.recipeSteps;
      this.recipeItems = source.recipeItems;
      this.assignedPlans = source.assignedPlans;
      this.key = source.key;
    }

    if (!this.recipeSteps) {
      this.recipeSteps = new Array();
    } else {
      this.recipeSteps = _.sortBy(this.recipeSteps, 'stepNumber');
    }

    if (!this.recipeItems) {
      this.recipeItems = new Array();
    }

    this.newItemId = -1;
    this.newStepId = -1;
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
        if (step.id === source.id) {
          continue;
        }

        step.stepNumber = steps.length + 1;
        steps.push(step);
      }

      this.recipeSteps = steps;
    }
  }

  public upsertStep(source: IRecipeStep) {
    if (source && (!source.id || source.id === 0)) {
      const item = new RecipeStep();
      item.id = this.newStepId--;
      item.description = source.description;
      item.stepNumber = this.recipeSteps.length + 1;
      this.recipeSteps.push(item);
    } else {
      for (const item of this.recipeSteps) {
        if (item.id === source.id) {
          item.description = source.description;
          item.stepNumber = source.stepNumber;
          break;
        }
      }
    }
  }

  public removeItem(source?: IRecipeItem): void {
    if (source) {
      this.recipeItems = this.recipeItems.filter(x => x.id !== source.id);
    }
  }

  public upsertItem(source: IRecipeItem) {
    if (source && (!source.id || source.id === 0)) {
      const item = new RecipeItem();
      item.id = this.newItemId--;
      item.amount = source.amount;
      item.instructions = source.instructions;
      item.item = source.item;
      item.item.unitType = source.item.unitType;
      this.recipeItems.push(item);
    } else {
      for (const item of this.recipeItems) {
        if (item.id === source.id) {
          item.amount = source.amount;
          item.instructions = source.instructions;
          item.item = source.item;
          item.item.unitType = source.item.unitType;
          break;
        }
      }
    }
  }
}
