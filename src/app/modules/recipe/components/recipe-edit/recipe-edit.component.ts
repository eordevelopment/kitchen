import * as moment from 'moment';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
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
import { Title } from '@angular/platform-browser';

import { BaseComponent } from 'app/classes/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { ItemsService } from 'app/services/items.service'
import { FormHelperService } from 'app/services/form-helper.service';

import { Recipe } from 'app/modules/recipe/model/recipe';
import { RecipeStep } from 'app/modules/recipe/model/recipestep';
import { RecipeItem } from 'app/modules/recipe/model/recipeitem';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeStep } from 'app/contract/IRecipeStep';
import { IRecipeItem } from 'app/contract/IRecipeItem';
import { Item } from 'app/modules/inventory/model/item';
import { IRecipeType } from 'app/contract/IRecipeType';
import { RecipeType } from 'app/modules/recipe/model/recipeType';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.less']
})
export class RecipeEditComponent extends BaseComponent implements OnInit {
  public selectedType: RecipeType;
  public recipe: Recipe;
  public selectedStep: RecipeStep;
  public selectedItem: RecipeItem;

  public selectedItemIdx: number;
  public selectedStepIdx: number;

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
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const typeId = params.get('rti');
        const typeName = params.get('rtn');
        if (typeId && typeName) {
          this.selectedType = new RecipeType();
          this.selectedType.id = typeId;
          this.selectedType.name = typeName;
        }

        return this.recipesService.getRecipe(params.get('id'))
      })
      .subscribe((source: IRecipe) => {
        this.recipe = new Recipe(source);
        if (!this.recipe.recipeType) {
          this.recipe.recipeType = this.selectedType;
        }
        this.recipeForm = this.formHelper.buildForm(this.recipe);
      });

    this.itemsSearchResult = this.searchTerms
      .debounceTime(150)
      .distinctUntilChanged()
      .switchMap(term => term ? this.itemsService.searchItems(term).map(res => {
        const items = new Array();
        for (const item of res.items) {
          items.push(new Item(item));
        }
        return items;
      }) : Observable.of<Item[]>([]))
      .catch(error => {
        return Observable.of<Item[]>([]);
      });
  }

  public updateRecipeName(event: string): void {
    setTimeout(() => { this.recipe.name = event; });
  }

  public updateItemName(event: string): void {
    setTimeout(() => { this.selectedItem.item.name = event; });
  }

  public updateUnit(event: string): void {
    setTimeout(() => { this.selectedItem.item.unitType = event; });
  }

  public updateInstructions(event: string): void {
    setTimeout(() => { this.selectedItem.instructions = event; });
  }

  public save(): void {
    this.recipesService.saveRecipe(this.recipe)
      .subscribe(response => {
        this.recipeForm.reset();
        this.goBack();
      },
      (error: any) => this.handleError(error));
  }

  public selectStep(idx: number, source?: IRecipeStep): void {
    this.selectedStepIdx = idx;

    this.selectedStep = new RecipeStep(source);
    this.stepForm = this.formHelper.buildForm(this.selectedStep);
  }

  public saveStep(): void {
    if (this.selectedStepIdx >= 0) {
      this.recipe.updateStep(this.selectedStepIdx, this.selectedStep);
    } else {
      this.recipe.insertStep(this.selectedStep);
    }
  }

  public deleteStep(): void {
    this.recipe.removeStep(this.selectedStep);
  }

  public selectItem(idx: number, source?: IRecipeItem): void {
    this.selectedItemIdx = idx;

    this.selectedItem = new RecipeItem(source);
    this.itemForm = this.formHelper.buildForm(this.selectedItem);
  }

  public saveItem(): void {
    if (this.selectedItemIdx >= 0) {
      this.recipe.updateItem(this.selectedItemIdx, this.selectedItem);
    } else {
      this.recipe.insertItem(this.selectedItem);
    }
  }

  public deleteItem(): void {
    this.recipe.removeItem(this.selectedItemIdx);
  }

  public goBack(): void {
    this.location.back();
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
    this.selectedItem.item.unitType = searchResult.unitType;
    this.searchTerms.next(null);
  }

  public isFirstStep(idx: number): boolean {
    if (idx === 0) {
      return true;
    }
    return false;
  }

  public isLastStep(idx: number): boolean {
    if (idx === this.recipe.recipeSteps.length - 1) {
      return true;
    }
    return false;
  }

  public moveUp(idx: number): void {
    this.recipe.recipeSteps[idx].stepNumber -= 1;
    this.recipe.recipeSteps[idx - 1].stepNumber += 1;
    this.recipe.sortSteps();
  }

  public moveDown(idx: number): void {
    this.recipe.recipeSteps[idx].stepNumber += 1;
    this.recipe.recipeSteps[idx + 1].stepNumber -= 1;
    this.recipe.sortSteps();
  }

  private search(): void {
    this.searchTerms.next(this.selectedItem.item.name);
  }
}
