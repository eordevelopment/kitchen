
import { IRecipeStep } from 'app/contract/IRecipeStep';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { IPlan } from 'app/contract/IPlan';

export interface IRecipe {
  id: number;
  name: string;
  type: number;
  key: string;
  recipeSteps: IRecipeStep[];
  recipeItems: IRecipeItem[];
  assignedPlans: IPlan[];
}
