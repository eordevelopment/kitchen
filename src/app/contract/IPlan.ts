import { IPlanItem } from 'app/contract/IPlanItem';

export interface IPlan {
  id: number;
  dateTime: string;
  items: IPlanItem[];
}
