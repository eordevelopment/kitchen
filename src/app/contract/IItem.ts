import { IRecipe } from 'app/contract/IRecipe';

export interface IItem {
  id: string;
  name: string;
  quantity: number;
  unitType: string;
  flaggedForNextShop: boolean;
  recipes: IRecipe[];
}
