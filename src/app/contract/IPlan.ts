import { IPlanItem } from 'app/contract/IPlanItem';

export interface IPlan {
  id: string;
  dateTime: string;
  items: IPlanItem[];
}
