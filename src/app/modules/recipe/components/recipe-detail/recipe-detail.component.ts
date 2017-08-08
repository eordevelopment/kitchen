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
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseComponent } from 'app/classes/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { PlanService } from 'app/services/plan.service';
import { ItemsService } from 'app/services/items.service'
import { FormHelperService } from 'app/services/form-helper.service';

import { SelectItem } from 'app/classes/selectItem';
import { environment } from 'environments/environment';
import { Recipe } from 'app/modules/recipe/model/recipe';
import { RecipeStep } from 'app/modules/recipe/model/recipestep';
import { RecipeItem } from 'app/modules/recipe/model/recipeitem';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeStep } from 'app/contract/IRecipeStep';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { Item } from 'app/modules/inventory/model/item';
import { Plan, kitchen } from 'app/modules/plan/model/plan';
import { IRecipeType } from 'app/contract/IRecipeType';
import { RecipeType } from 'app/modules/recipe/model/recipeType';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent extends BaseComponent implements OnInit {
  public selectedType: RecipeType;
  public recipe: Recipe;
  public selectedStep: RecipeStep;
  public selectedItem: RecipeItem;

  public recipeForm: FormGroup;
  public stepForm: FormGroup;
  public itemForm: FormGroup;

  private searchTerms = new Subject<string>();
  public itemsSearchResult: Observable<Item[]>;

  public plansSelect: Observable<SelectItem[]>;
  public selectedPlanId: number;
  private plans: Plan[];

  public shareUrl: string;

  constructor(
    private recipesService: RecipesService,
    private planService: PlanService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
    private formHelper: FormHelperService,
    router: Router) {
    super(router);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const typeId = params.get('rti');
        const typeName = params.get('rtn');
        if (typeId && typeName) {
          this.selectedType = new RecipeType();
          this.selectedType.id = Number(typeId);
          this.selectedType.name = typeName;
        }

        return this.recipesService.getRecipe(+params.get('id'))
      })
      .subscribe((source: IRecipe) => {
        this.recipe = new Recipe(source);
        console.log(source);
        console.log(this.recipe);
        if (!this.recipe.recipeType) {
          this.recipe.recipeType = this.selectedType;
        }
        this.recipeForm = this.formHelper.buildForm(this.recipe);
        this.shareUrl = environment.recipeViewUrl + this.recipe.key;
      });

    this.itemsSearchResult = this.searchTerms
      .debounceTime(150)
      .distinctUntilChanged()
      .switchMap(term => term ? this.itemsService.getItems(term) : Observable.of<Item[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Item[]>([]);
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public updateRecipeName(event: string): void {
    this.recipe.name = event;
  }

  public updateItemName(event: string): void {
    this.selectedItem.item.name = event;
  }

  public updateUnit(event: string): void {
    this.selectedItem.unitType = event;
  }

  public updateInstructions(event: string): void {
    this.selectedItem.instructions = event;
  }

  public save(): void {
    this.recipesService.saveRecipe(this.recipe)
      .subscribe(response => {
        this.recipeForm.reset();
        this.router.navigate(['/recipes']);
      },
      (error: any) => this.handleError(error));
  }

  public selectStep(source?: IRecipeStep): void {
    this.selectedStep = new RecipeStep(source);
    this.stepForm = this.formHelper.buildForm(this.selectedStep);
  }

  public saveStep(): void {
    this.recipe.upsertStep(this.selectedStep);
  }

  public deleteStep(): void {
    this.recipe.removeStep(this.selectedStep);
  }

  public selectItem(source?: IRecipeItem): void {
    this.selectedItem = new RecipeItem(source);
    this.itemForm = this.formHelper.buildForm(this.selectedItem);
    console.log(this.selectedItem);
  }

  public saveItem(): void {
    this.recipe.upsertItem(this.selectedItem);
  }

  public deleteItem(): void {
    this.recipe.removeItem(this.selectedItem);
  }

  public delete(): void {
    this.recipesService.deleteRecipe(this.recipe.id)
      .subscribe(response => {
        this.recipeForm.reset();
        this.router.navigate(['/recipes']);
      },
      (error: any) => this.handleError(error));
  }

  public selectSearchItem(searchResult: Item): void {
    this.selectedItem.item.name = searchResult.name;
    this.selectedItem.item.id = searchResult.id;
    this.searchTerms.next(null);
  }

  public getPlans(): void {
    this.plansSelect = this.planService.getUpcomingPlans().map(values => {
      const selectItems = new Array();
      this.plans = new Array();
      if (values.length > 0) {
        for (let i = 0; i < values.length; i++) {
          selectItems.push(new SelectItem(values[i].id, moment(values[i].dateTime).format('dddd, MMM Do')));
          this.plans.push(new Plan(values[i]));
        }
        this.selectedPlanId = values[0].id
      }
      return selectItems;
    });
  }

  public savePlan(): void {
    const plan = kitchen.plan.getPlan(this.selectedPlanId, this.plans);
    plan.addRecipe(this.recipe);
    this.planService.savePlan(plan).subscribe(response => {
      this.recipe.assignedPlans = new Array();
      this.recipe.assignedPlans.push(plan);
    },
      (error: any) => this.handleError(error));
  }

  private search(): void {
    this.searchTerms.next(this.selectedItem.item.name);
  }
}
