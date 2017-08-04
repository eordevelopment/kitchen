import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BaseComponent } from 'app/components/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { StorageService } from 'app/services/storage.service';

import { ServiceError } from '../../models/error';
import { IRecipe } from '../../models/recipe';
import { IRecipeStep } from '../../models/recipestep';
import { IRecipeItem } from '../../models/recipeitem';
import { IItem } from '../../models/item';
import { SelectItem } from '../../models/selectItem';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.less']
})
export class RecipeViewComponent extends BaseComponent implements OnInit {
  public recipe: IRecipe;
  public token: string;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private storage: StorageService,
    router: Router) {
    super(router);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipesService.getRecipeView(params.get('id')))
      .subscribe((source: IRecipe) => { this.recipe = source; });
    this.storage.loggedInUserToken.subscribe(value => this.token = value);
  }

  public saveRecipe(): void {
    this.recipesService.saveRecipe(this.recipe)
      .subscribe(response => {
        this.router.navigate(['/recipedetail', response]);
      },
      (error: any) => this.handleError(error));
  }
}
