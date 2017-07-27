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

import { BaseComponent } from 'app/components/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { ItemsService } from 'app/services/items.service'
import { FormHelperService } from 'app/services/form-helper.service';

import { ServiceError } from '../../models/error';
import { IRecipe, Recipe, RecipeType } from '../../models/recipe';
import { IRecipeStep, RecipeStep } from '../../models/recipestep';
import { IRecipeItem, RecipeItem } from '../../models/recipeitem';
import { IItem, Item } from '../../models/item';
import { SelectItem } from '../../models/selectItem';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent extends BaseComponent implements OnInit {
  public types: SelectItem[];

  public recipe: Recipe;
  public selectedStep: RecipeStep;
  public selectedItem: RecipeItem;

  public recipeForm: FormGroup;
  public stepForm: FormGroup;
  public itemForm: FormGroup;

  private searchTerms = new Subject<string>();
  public itemsSearchResult: Observable<Item[]>;

  constructor(
    private recipesService: RecipesService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
    private formHelper: FormHelperService,
    router: Router) {
      super(router);
     }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipesService.getRecipe(+params.get('id')))
      .subscribe((source: IRecipe) => {
        this.recipe = new Recipe(source);
        this.recipeForm = this.formHelper.buildForm(this.recipe);
      });

    this.types = new Array();
    for (const item in RecipeType) {
      if (!isNaN(Number(item))) {
        this.types.push(new SelectItem(Number(item), RecipeType[item].toString()))
      }
    }

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

  private search(): void {
    this.searchTerms.next(this.selectedItem.item.name);
  }
}
