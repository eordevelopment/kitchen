import { IItem } from 'app/contract/IItem';

export interface ICategory {
  id: number;
  name: string;
  items: IItem[];
}
