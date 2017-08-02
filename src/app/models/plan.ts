import * as moment from 'moment';
import { Validators } from '@angular/forms';

import { IPlanItem, PlanItem } from 'app/models/planItem';

export interface IPlan {
  id: number;
  dateTime: string;
  items: IPlanItem[];
}

export class Plan implements IPlan {
  id: number;
  dateTime: string;
  dateTimeMt: moment.Moment;
  items: IPlanItem[];

  constructor(source?: IPlan) {
    if (source) {
      this.id = source.id;

      this.items = new Array();
      if (source.items) {
        for (let i = 0; i < source.items.length; i++) {
          this.items.push(new PlanItem(source.items[i]));
        }
      }

      if (source.dateTime) {
        this.dateTime = source.dateTime;
        this.dateTimeMt = moment(source.dateTime);
      }
    }
  }

  public addItem(): void {
    const item = new PlanItem();
    item.recipeId = -this.items.length;
    item.isDone = false;
    item.recipeName = '';
    this.items.push(item);
  }

  public upsertItems(source: IPlanItem[]): void {
    this.items = source;
  }

  public isDone(): boolean {
    if (this.id <= 0 || !this.items || this.items.length === 0) {
      return false;
    }
    for (const item of this.items) {
      if (!item.isDone) {
        return false;
      }
    }
    return true;
  }
}
