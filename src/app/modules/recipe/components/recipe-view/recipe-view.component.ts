import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from 'app/classes/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { SessionService } from 'app/services/session.service';

import { SelectItem } from 'app/classes/selectItem';
import { IRecipe } from 'app/contract/IRecipe';
import { IUserSession } from 'app/contract/IUserSession';
import { Recipe } from 'app/modules/recipe/model/recipe';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.less']
})
export class RecipeViewComponent extends BaseComponent implements OnInit {
  public recipe: Recipe;
  public token: IUserSession;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private sessionManager: SessionService,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipesService.getRecipeView(params.get('id')))
      .subscribe((source: IRecipe) => {
        window.sessionStorage.setItem('kh_recipe', JSON.stringify(source));
        this.recipe = new Recipe(source);
        this.title.setTitle(this.recipe.name);
      });
    this.sessionManager.loggedInUser.subscribe(value => {
      if (value && value != null) {
        this.token = value;
      }
    });
  }

  public saveRecipe(): void {
    this.recipesService.saveRecipe(this.recipe)
      .subscribe(response => {
        this.router.navigate(['/recipedetail', response]);
      },
      (error: any) => this.handleError(error));
  }
}
