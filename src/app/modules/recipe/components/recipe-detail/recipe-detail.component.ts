import * as moment from 'moment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from 'app/classes/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { PlanService } from 'app/services/plan.service';
import { ItemsService } from 'app/services/items.service';

import { environment } from 'environments/environment';
import { Recipe } from 'app/modules/recipe/model/recipe';
import { IRecipe } from 'app/contract/IRecipe';
import { SelectItem } from 'app/classes/selectItem';
import { Plan } from 'app/modules/plan/model/plan';
import { RecipeItem } from 'app/modules/recipe/model/recipeitem';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent extends BaseComponent implements OnInit {
  public recipe: Recipe;

  public plansSelect: SelectItem[];
  public selectedPlanId: string;
  private plans: Plan[];

  public shareUrl: string;

  public showNotification: boolean;
  public shoppingItemName: string;

  constructor(
    private recipesService: RecipesService,
    private planService: PlanService,
    private itemService: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipesService.getRecipe(params.get('id')))
      .subscribe((source: IRecipe) => {
        this.recipe = new Recipe(source);
        this.shareUrl = environment.recipeViewUrl + this.recipe.key;
      });

    this.getPlans();

    this.showNotification = false;
  }

  public editRecipe(): void {
    this.router.navigate(['/editrecipe', this.recipe.id]);
  }

  public getPlans(): void {
    this.planService.getUpcomingPlans().subscribe(values => {
      this.plansSelect = new Array();
      this.plans = new Array();
      if (values.length > 0) {
        for (let i = 0; i < values.length; i++) {
          this.plansSelect.push(new SelectItem(String(i), moment(values[i].dateTime).format('dddd, MMM Do')));
          this.plans.push(new Plan(values[i]));
        }
        this.selectedPlanId = values[0].id
      }
    });
  }

  public savePlan(): void {
    const plan = this.plans[Number(this.selectedPlanId)];
    plan.addRecipe(this.recipe);
    this.planService.savePlan(plan).subscribe(response => {
      this.recipe.assignedPlans = new Array();
      this.recipe.assignedPlans.push(plan);
    }, (error: any) => this.handleError(error));
  }

  public addToShopping(item: RecipeItem): void {
    this.itemService.flagItem(item.item.id).subscribe(res => {
      this.shoppingItemName = item.item.name;
      this.showNotification = true;
      setTimeout(() => { this.showNotification = false; }, 3000);
    }, (error: any) => this.handleError(error));
  }
}
