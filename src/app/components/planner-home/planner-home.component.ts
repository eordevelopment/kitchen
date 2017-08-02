import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from 'app/components/baseComponent';

import { PlanService } from 'app/services/plan.service';
import { RecipesService } from 'app/services/recipes.service';

import { IPlan, Plan } from 'app/models/plan';
import { SelectItem } from 'app/models/selectItem';
import { IRecipe } from 'app/models/recipe';
import { IPlanItem } from 'app/models/planItem';

@Component({
  selector: 'app-planner-home',
  templateUrl: './planner-home.component.html',
  styleUrls: ['./planner-home.component.less']
})
export class PlannerHomeComponent extends BaseComponent implements OnInit {
  public activePlan: Plan;
  public hasPlan: boolean;
  public planChanged: boolean;

  public openPlans: Plan[];
  public closedPlans: Plan[];
  public recipes: SelectItem[];

  private closedPlansPage: number;
  public hasLoadedPlans: boolean;

  constructor(private service: PlanService, private recipesService: RecipesService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.hasPlan = false;
    this.closedPlansPage = 0;
    this.hasLoadedPlans = true;

    this.service
      .getUpcomingPlans()
      .subscribe(values => this.setOpenPlans(values), error => this.handleError(error));

    this.recipesService.getRecipies()
      .subscribe(values => this.loadRecipes(values), error => this.handleError(error));
  }

  public selectPlan(source?: IPlan): void {
    this.planChanged = false;
    this.activePlan = new Plan(source);
  }

  public addItem(): void {
    this.activePlan.addItem();
  }

  public removeItem(source: IPlanItem): void {
    this.planChanged = true;
    this.activePlan.items = this.activePlan.items.filter(x => x.recipeId !== source.recipeId);
  }

  public completeItem(source: IPlanItem): void {
    this.planChanged = true;
    source.isDone = true;
  }

  public itemChanged(source: IPlanItem): void {
    this.planChanged = true;
    source.recipeId = Number(source.recipeId);
    const recipe = this.recipes.filter(x => x.key === source.recipeId)[0];
    source.recipeName = recipe.value;
  }

  public savePlan(): void {
    const plan = this.getPlan();
    if (plan) {
      plan.upsertItems(this.activePlan.items);
      if (plan.isDone()) {
        if (!this.closedPlans) {
          this.closedPlans = new Array();
        }
        this.closedPlans.push(plan);
        this.closedPlans.sort(this.sortDesc);
      }
      this.service.savePlan(plan)
        .subscribe(response => {
          this.service
            .getUpcomingPlans()
            .subscribe(values => this.setOpenPlans(values), error => this.handleError(error));
        },
        (error: any) => this.handleError(error));
      this.activePlan = undefined;
    }
  }

  public loadMore(): void {
    this.service
      .getPreviousPlans(this.closedPlansPage)
      .subscribe(values => this.setClosedPlans(values), error => this.handleError(error));
    this.closedPlansPage += 1;
  }

  private setOpenPlans(source: IPlan[]): void {
    console.log(source);
    this.openPlans = new Array();
    for (const plan of source) {
      this.openPlans.push(new Plan(plan));
    }
    this.openPlans.sort(this.sortAsc);
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

  private loadRecipes(values: IRecipe[]): void {
    this.recipes = new Array();
    for (let i = 0; i < values.length; i++) {
      this.recipes.push(new SelectItem(values[i].id, values[i].name));
    }
  }

  private getPlan(): Plan {
    for (const plan of this.openPlans) {
      if (plan.id === this.activePlan.id) {
        return plan;
      }
    }
    return undefined;
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
