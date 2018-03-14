import { IShoppingListItem } from 'app/contract/IShoppingListItem';
import { IItem } from 'app/contract/IItem';
import { IRecipe } from 'app/contract/IRecipe';

export class ShoppingListItem implements IShoppingListItem {
  amount: number;
  totalAmount: number;
  isDone: boolean;
  item: IItem;
  recipes: IRecipe[];

  constructor(source?: IShoppingListItem) {
    if (source) {
      this.isDone = source.isDone;
      this.item = source.item;
      this.amount = source.amount;
      this.totalAmount = source.totalAmount;
      this.recipes = source.recipes;
    }
  }
}
