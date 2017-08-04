import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { BaseComponent } from 'app/components/baseComponent';
import { RecipesService } from 'app/services/recipes.service';

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

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    router: Router) {
    super(router);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipesService.getRecipeView(params.get('id')))
      .subscribe((source: IRecipe) => {this.recipe = source; });
  }

}
