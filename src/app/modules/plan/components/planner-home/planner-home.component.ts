import * as moment from 'moment';
import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from 'app/classes/baseComponent';

import { PlanService } from 'app/services/plan.service';
import { RecipesService } from 'app/services/recipes.service';
import { ShoppingListService } from 'app/services/shopping-list.service';

import { SelectItem } from 'app/classes/selectItem';
import { Plan, kitchen } from 'app/modules/plan/model/plan';
import { IPlan } from 'app/contract/IPlan';
import { IPlanItem } from 'app/contract/IPlanItem';
import { IRecipe } from 'app/contract/IRecipe';
import { IShoppingList } from 'app/contract/IShoppingList';

@Component({
  selector: 'app-planner-home',
  templateUrl: './planner-home.component.html',
  styleUrls: ['./planner-home.component.less']
})
export class PlannerHomeComponent extends BaseComponent implements OnInit {
  public activePlan: Plan;
  public hasPlan: boolean;
  public planChanged: boolean;
  public showNotification: boolean;
  private itemClosed: boolean;

  public currentShoppingList: IShoppingList;

  public openPlans: Plan[];
  public closedPlans: Plan[];
  public recipeSelect: SelectItem[];

  private closedPlansPage: number;
  public hasLoadedPlans: boolean;

  constructor(
    private service: PlanService,
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.hasPlan = false;
    this.closedPlansPage = 0;
    this.hasLoadedPlans = true;

    this.service.getUpcomingPlans()
      .subscribe(values => this.setOpenPlans(values), error => this.handleError(error));

    this.recipesService.getRecipies()
      .subscribe(values => this.loadRecipes(values), error => this.handleError(error));

    this.shoppingListService.getOpenList()
      .subscribe(value => this.currentShoppingList = value, error => this.handleError(error));
  }

  public selectPlan(source?: IPlan): void {
    this.planChanged = false;
    this.activePlan = new Plan(source);
    this.itemClosed = false;
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
    this.itemClosed = true;
  }

  public itemChanged(source: IPlanItem): void {
    this.planChanged = true;
    source.recipeId = source.recipeId;
    const recipe = this.recipeSelect.filter(x => x.key === source.recipeId)[0];
    source.recipeName = recipe.value;
  }

  public savePlan(): void {
    const plan = kitchen.plan.getPlanByDate(this.activePlan.dateTime, this.openPlans);
    if (plan) {
      plan.upsertItems(this.activePlan.items);
      if (plan.isDone()) {
        if (!this.closedPlans) {
          this.closedPlans = new Array();
        }
        this.closedPlans.push(plan);
        this.closedPlans.sort(kitchen.plan.sortDesc);
      }

      if (this.itemClosed) {
        this.showSnackbar();
      }

      this.service.savePlan(plan).subscribe(response => {
        this.service.getUpcomingPlans()
          .subscribe(values => this.setOpenPlans(values), error => this.handleError(error));
      },
        (error: any) => this.handleError(error));
      this.activePlan = undefined;
    }
  }

  public loadMore(): void {
    this.service.getPreviousPlans(this.closedPlansPage)
      .subscribe(values => this.setClosedPlans(values), error => this.handleError(error));
    this.closedPlansPage += 1;
  }

  public generateList(): void {
    this.shoppingListService.generateList().subscribe(res => {
      this.router.navigate(['/shopping', res]);
    }, error => this.handleError(error))
  }

  public viewList(): void {
    this.router.navigate(['/shopping', this.currentShoppingList.id]);
  }

  private setOpenPlans(source: IPlan[]): void {
    this.openPlans = new Array();
    for (const plan of source) {
      this.openPlans.push(new Plan(plan));
      if (plan.items && plan.items.length > 0) {
        this.hasPlan = true;
      }
    }
    this.openPlans.sort(kitchen.plan.sortAsc);
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

    this.closedPlans.sort(kitchen.plan.sortDesc);
  }

  private loadRecipes(values: IRecipe[]): void {
    const types = _.uniq(values, function (value) { return value.recipeType.id; });

    this.recipeSelect = new Array();

    for (const type of types) {
      const recipes = values.filter(x => x.recipeType.id === type.recipeType.id);
      recipes.sort(this.sortAsc);
      const recipeTypeSelect = new Array();

      for (const recipe of recipes) {
        recipeTypeSelect.push(new SelectItem(recipe.id, recipe.name));
      }
      this.recipeSelect = this.recipeSelect.concat(recipeTypeSelect);
    }
  }

  private showSnackbar(): void {
    this.showNotification = true;
    setTimeout(() => { this.showNotification = false; }, 3000);
  }

  private sortAsc(a: IRecipe, b: IRecipe): number {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}
