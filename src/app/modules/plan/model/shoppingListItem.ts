import { IShoppingListItem } from 'app/contract/IShoppingListItem';
import { IItem } from 'app/contract/IItem';

export class ShoppingListItem implements IShoppingListItem {
  amount: number;
  totalAmount: number;
  isDone: boolean;
  item: IItem;

  constructor(source?: IShoppingListItem) {
    if (source) {
      this.isDone = source.isDone;
      this.item = source.item;
      this.amount = source.amount;
      this.totalAmount = source.totalAmount;
    }
  }
}
