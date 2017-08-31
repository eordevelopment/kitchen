import { IItem } from 'app/contract/IItem';

export interface ICategory {
  id: string;
  name: string;
  items: IItem[];
}
