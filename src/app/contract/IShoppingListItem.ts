import { IItem } from 'app/contract/IItem';
import { IRecipe } from 'app/contract/IRecipe';

export interface IShoppingListItem {
  amount: number;
  totalAmount: number;
  isDone: boolean;
  item: IItem;
  recipes: IRecipe[];
}
