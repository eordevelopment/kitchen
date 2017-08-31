import * as moment from 'moment';
import { Validators } from '@angular/forms';

import { IPlan } from 'app/contract/IPlan';
import { IPlanItem } from 'app/contract/IPlanItem';
import { PlanItem } from 'app/modules/plan/model/planItem';
import { IRecipe } from 'app/contract/IRecipe';

export class Plan implements IPlan {
  id: string;
  dateTime: string;
  dateTimeMt: moment.Moment;
  items: IPlanItem[];

  private newItemId: number;

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

    this.newItemId = -1;
  }

  public addRecipe(recipe: IRecipe): void {
    if (!this.items || this.items == null) {
      this.items = new Array();
    }
    const item = new PlanItem();
    item.recipeId = recipe.id;
    item.isDone = false;
    item.recipeName = recipe.name;
    this.items.push(item);
  }

  public addItem(): void {
    const item = new PlanItem();
    item.isDone = false;
    item.recipeName = '';
    this.items.push(item);
  }

  public upsertItems(source: IPlanItem[]): void {
    this.items = source;
  }

  public isDone(): boolean {
    if (!this.id || !this.items || this.items.length === 0) {
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

export module kitchen.plan {
  export function sortAsc(a: Plan, b: Plan): number {
    if (a.dateTimeMt.valueOf() < b.dateTimeMt.valueOf()) {
      return -1;
    }
    if (a.dateTimeMt.valueOf() > b.dateTimeMt.valueOf()) {
      return 1;
    }
    return 0;
  }

  export function sortDesc(a: Plan, b: Plan): number {
    if (a.dateTimeMt.valueOf() < b.dateTimeMt.valueOf()) {
      return 1;
    }
    if (a.dateTimeMt.valueOf() > b.dateTimeMt.valueOf()) {
      return -1;
    }
    return 0;
  }

  export function getPlanByDate(dateTime: string, plans: Plan[]): Plan {
    for (const plan of plans) {
      if (dateTime === plan.dateTime) {
        return plan;
      }
    }
    return undefined;
  }

  export function getPlan(planId: string, plans: Plan[]): Plan {
    const id = planId;
    for (const plan of plans) {
      if (id === plan.id) {
        return plan;
      }
    }
    return undefined;
  }
}
