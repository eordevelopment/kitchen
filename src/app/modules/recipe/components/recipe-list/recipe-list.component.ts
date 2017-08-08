import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { BaseComponent } from 'app/classes/baseComponent';
import { RecipesService } from 'app/services/recipes.service';
import { FormHelperService } from 'app/services/form-helper.service';

import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeType } from 'app/contract/IRecipeType';
import { RecipeType } from 'app/modules/recipe/model/recipeType';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent extends BaseComponent implements OnInit {
  public allRecipes: IRecipe[];
  public types: IRecipeType[];
  public selectedRecipe: IRecipe;

  public selectedType: RecipeType;
  public recipeTypeForm: FormGroup;

  constructor(private service: RecipesService, private formHelper: FormHelperService, router: Router) {
    super(router);
  }

  ngOnInit() {
    this.service.getRecipies().subscribe(values => this.allRecipes = values, error => this.handleError(error));
    this.service.getRecipieTypes().subscribe(values => this.types = values, error => this.handleError(error));
  }

  public updateTypeName(event: string): void {
    this.selectedType.name = event;
  }

  public asTypeId(source: IRecipeType): string {
    return `#collapse${source.id}`;
  }

  public onSelect(recipe: IRecipe): void {
    this.selectedRecipe = recipe;
    this.router.navigate(['/recipedetail', this.selectedRecipe.id]);
  }

  public selectType(type?: IRecipeType): void {
    this.selectedType = new RecipeType(type);
    this.recipeTypeForm = this.formHelper.buildForm(this.selectedType);
  }

  public saveType(): void {
    this.service.saveRecipeType(this.selectedType)
      .subscribe(response => {
        this.selectedType.id = response;
        this.updateTypes();
      },
      (error: any) => this.handleError(error));
  }

  public addRecipe(type: IRecipeType): void {
    this.router.navigate(['/recipedetail', 0, {rti: type.id, rtn: type.name}]);
  }

  private updateTypes(): void {
    const type = this.findType(this.selectedType.id);
    if (type) {
      type.name = this.selectedType.name;
    } else {
      this.types.push(this.selectedType as IRecipeType);
    }
  }

  private findType(id: number): IRecipeType {
    id = Number(id);
    for (const type of this.types) {
      if (type.id === id) {
        return type;
      }
    }
    return undefined;
  }
}
