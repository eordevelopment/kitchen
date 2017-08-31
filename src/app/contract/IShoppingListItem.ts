import { IItem } from 'app/contract/IItem';

export interface IShoppingListItem {
  amount: number;
  totalAmount: number;
  isDone: boolean;
  item: IItem;
}
