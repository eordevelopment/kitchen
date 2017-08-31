
import { IRecipeStep } from 'app/contract/IRecipeStep';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { IPlan } from 'app/contract/IPlan';
import { IRecipeType } from 'app/contract/IRecipeType';

export interface IRecipe {
  id: string;
  name: string;
  recipeType: IRecipeType;
  key: string;
  recipeSteps: IRecipeStep[];
  recipeItems: IRecipeItem[];
  assignedPlans: IPlan[];
}
