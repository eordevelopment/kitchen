import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from 'app/components/baseComponent';
import { RecipesService } from 'app/services/recipes.service';

import { IRecipe, RecipeType } from '../../models/recipe';
import { ServiceError } from '../../models/error';
import { SelectItem } from '../../models/selectItem';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent extends BaseComponent implements OnInit {
  public allRecipes: IRecipe[];
  public types: SelectItem[];
  public selectedRecipe: IRecipe;

  constructor(private service: RecipesService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.service.getRecipies().subscribe(values => this.setRecipies(values), error => this.handleError(error));

    this.types = new Array();
    for (const item in RecipeType) {
      if (!isNaN(Number(item))) {
        this.types.push(new SelectItem(Number(item), RecipeType[item].toString()))
      }
    }
  }

  public onSelect(recipe: IRecipe): void {
    this.selectedRecipe = recipe;
    this.router.navigate(['/recipedetail', this.selectedRecipe.id]);
  }

  private setRecipies(values: IRecipe[]): void {
    this.allRecipes = values;
  }
}
