import { IItem } from 'app/contract/IItem';

export interface IRecipeItem {
  amount: number;
  item: IItem;
  instructions: string;
  flaggedForNextShop: boolean;
}
