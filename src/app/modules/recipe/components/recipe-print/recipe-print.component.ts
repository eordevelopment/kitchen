import { Component, OnInit } from '@angular/core';
import { IRecipe } from 'app/contract/IRecipe';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-print',
  templateUrl: './recipe-print.component.html',
  styleUrls: ['./recipe-print.component.less']
})
export class RecipePrintComponent implements OnInit {
  public recipe: IRecipe;

  constructor(private title: Title) { }

  ngOnInit() {
    this.recipe = this.getRecipe();
    if (this.recipe != null) {
      this.title.setTitle(this.recipe.name);
    }
  }

  private getRecipe(): IRecipe {
    const recipeJson = window.sessionStorage.getItem('kh_recipe');

    if (!recipeJson || recipeJson == null) {
      this.clearRecipeStorage();
      return null;
    }

    return JSON.parse(recipeJson);
  }

  private clearRecipeStorage(): void {
    window.sessionStorage.removeItem('kh_recipe');
  }
}
