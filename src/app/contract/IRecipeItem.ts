import { IItem } from 'app/contract/IItem';

export interface IRecipeItem {
  id: number;
  ammount: number;
  item: IItem;
  unitType: string;
  instructions: string;
}
