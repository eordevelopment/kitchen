import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from 'app/components/baseComponent';

import { PlanService } from 'app/services/plan.service';
import { RecipesService } from 'app/services/recipes.service';

import { IPlan, Plan } from 'app/models/plan';
import { SelectItem } from 'app/models/selectItem';
import { IRecipe } from 'app/models/recipe';

@Component({
  selector: 'app-planner-home',
  templateUrl: './planner-home.component.html',
  styleUrls: ['./planner-home.component.less']
})
export class PlannerHomeComponent extends BaseComponent implements OnInit {
  public activePlan: Plan;

  public openPlans: Plan[];
  public closedPlans: Plan[];
  public recipes: SelectItem[];

  private closedPlansPage: number;
  public hasLoadedPlans: boolean;

  constructor(private service: PlanService, private recipesService: RecipesService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.service
      .getOpenPlans()
      .subscribe(values => this.setOpenPlans(values), error => this.handleError(error));

    this.closedPlansPage = 0;
    this.hasLoadedPlans = true;

    this.service
      .getClosedPlans(this.closedPlansPage)
      .subscribe(values => this.setClosedPlans(values), error => this.handleError(error));

      this.recipesService.getRecipies()
      .subscribe(values => this.loadRecipes(values), error => this.handleError(error));
  }

  public selectPlan(source?: Plan){
    this.activePlan = source;
  }

  public loadMore(): void {
    this.closedPlansPage += 1;
    this.service
      .getClosedPlans(this.closedPlansPage)
      .subscribe(values => this.setClosedPlans(values), error => this.handleError(error));
  }

  private setClosedPlans(values: IPlan[]): void {

    if (!values || values.length <= 0) {
      this.hasLoadedPlans = false;
      return;
    }

    if (!this.closedPlans) {
      this.closedPlans = new Array();
    }

    for (let i = 0; i < values.length; i++) {
      this.closedPlans.push(new Plan(values[i]));
    }

    this.closedPlans.sort(this.sortDesc);
  }

  private setOpenPlans(values: IPlan[]): void {
    this.openPlans = new Array();

    for (let i = 0; i < values.length; i++) {
      this.openPlans.push(new Plan(values[i]));
    }

    const now = moment();

    for (let i = 0; i < 7; i++) {
      const dt = moment(now).add(i, 'd');
      if (!this.haveDayPlan(dt)) {
        const plan = new Plan();
        plan.id = -i;
        plan.dateTime = dt;
        plan.items = new Array();
        this.openPlans.push(plan);
      }
    }

    this.openPlans.sort(this.sortAsc);
  }

  private loadRecipes(values: IRecipe[]): void {
    this.recipes = new Array();
    for (let i = 0; i < values.length; i++) {
      this.recipes.push(new SelectItem(values[i].id, values[i].name));
    }
  }

  // TODO: The following methods should not belong here.
  private haveDayPlan(date: moment.Moment): boolean {
    for (let j = 0; j < this.openPlans.length; j++) {
      if (date.isSame(this.openPlans[j].dateTime, 'day')) {
        return true;
      }
    }
    return false;
  }

  private sortAsc(a: Plan, b: Plan): number {
    if (a.dateTime.valueOf() < b.dateTime.valueOf()) {
      return -1;
    }
    if (a.dateTime.valueOf() > b.dateTime.valueOf()) {
      return 1;
    }
    return 0;
  }

  private sortDesc(a: Plan, b: Plan): number {
    if (a.dateTime.valueOf() < b.dateTime.valueOf()) {
      return 1;
    }
    if (a.dateTime.valueOf() > b.dateTime.valueOf()) {
      return -1;
    }
    return 0;
  }

}
