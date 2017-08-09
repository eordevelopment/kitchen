import { IItem } from 'app/contract/IItem';

export interface IRecipeItem {
  id: number;
  amount: number;
  item: IItem;
  instructions: string;
}
