
import { IShoppingListItem } from 'app/contract/IShoppingListItem';

export interface IShoppingList {
  id: string;
  name: string;
  isDone: boolean;
  items: IShoppingListItem[];
  optionalItems: IShoppingListItem[];
}
