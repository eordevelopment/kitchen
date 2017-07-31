import * as _ from 'underscore';

import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';
import { IRecipeItem, RecipeItem } from 'app/models/recipeitem';
import { IRecipeStep, RecipeStep } from 'app/models/recipestep';

export interface IRecipe {
  id: number;
  name: string;
  type: RecipeType;
  recipeSteps: IRecipeStep[];
  recipeItems: IRecipeItem[];
}

export enum RecipeType {
  Meal = 0,
  Baking = 1,
  Lunch = 2,
  Smoothies = 3
}

export class Recipe implements IFormEntity, IRecipe {
  public id: number;
  public name: string;
  public type: RecipeType;
  public recipeSteps: IRecipeStep[];
  public recipeItems: IRecipeItem[];

  public formErrors = {
    'type': '',
    'name': ''
  };

  public validationMessages = {
    'type': {
      'required': 'Type is required.',
    },
    'name': {
      'required': 'Name is required.',
    }
  };

  constructor(source?: IRecipe) {
    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.type = source.type;
      this.recipeSteps = source.recipeSteps;
      this.recipeItems = source.recipeItems;
    }

    if (!this.recipeSteps) {
      this.recipeSteps = new Array();
    } else {
      this.recipeSteps = _.sortBy(this.recipeSteps, 'stepNumber');
    }

    if (!this.recipeItems) {
      this.recipeItems = new Array();
    }
  }

  public getFormConfig(): any {
    return {
      'type': [this.type, [Validators.required]],
      'name': [this.name, [Validators.required]]
    }
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
      item.id = -Math.abs(this.recipeSteps.length);
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
      item.id = -Math.abs(this.recipeItems.length);
      item.ammount = source.ammount;
      item.instructions = source.instructions;
      item.item = source.item;
      item.unitType = source.unitType;
      this.recipeItems.push(item);
    } else {
      for (const item of this.recipeItems) {
        if (item.id === source.id) {
          item.ammount = source.ammount;
          item.instructions = source.instructions;
          item.item = source.item;
          item.unitType = source.unitType;
          break;
        }
      }
    }
  }
}
