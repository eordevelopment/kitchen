import { IItem } from 'app/contract/IItem';

export interface IItemSearchResult {
  pageSize: number;
  totalResults: number;
  items: IItem[];
}
