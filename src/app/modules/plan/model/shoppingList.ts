import { ShoppingListItem } from 'app/modules/plan/model/shoppingListItem';
import { IShoppingList } from 'app/contract/IShoppingList';

export class ShoppingList implements IShoppingList {
  id: string;
  name: string;
  isDone: boolean;
  items: ShoppingListItem[];
  optionalItems: ShoppingListItem[];

  constructor(source?: IShoppingList) {
    this.items = new Array();
    this.optionalItems = new Array();

    if (source) {
      this.id = source.id;
      this.name = source.name;
      this.isDone = source.isDone;
      if (source.items) {
        for (const item of source.items) {
          this.items.push(new ShoppingListItem(item));
        }
      }

      if (source.optionalItems) {
        for (const item of source.optionalItems) {
          this.optionalItems.push(new ShoppingListItem(item));
        }
      }
    }
  }

  public removeFromList(item: ShoppingListItem): void {
    this.items = this.items.filter(x => x.item.id !== item.item.id);
    if (!this.containsItem(this.optionalItems, item)) {
      this.optionalItems.push(item);
      this.optionalItems.sort(this.sortAsc);
    }
  }

  public addToList(item: ShoppingListItem): void {
    this.optionalItems = this.optionalItems.filter(x => x.item.id !== item.item.id);
    if (!this.containsItem(this.items, item)) {
      this.items.push(item);
      this.items.sort(this.sortAsc);
    }
  }

  private containsItem(items: ShoppingListItem[], item: ShoppingListItem): boolean {
    for (const existing of items) {
      if (existing.item.id === item.item.id) {
        return true;
      }
    }
    return false;
  }

  private sortAsc(a: ShoppingListItem, b: ShoppingListItem): number {
    if (a.item.name < b.item.name) {
      return -1;
    }
    if (a.item.name > b.item.name) {
      return 1;
    }
    return 0;
  }
}
