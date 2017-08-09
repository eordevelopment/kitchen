import { IItem } from 'app/contract/IItem';

export interface IShoppingListItem {
  id: number;
  amount: number;
  totalAmount: number;
  isDone: boolean;
  item: IItem;
}
