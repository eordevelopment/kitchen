import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeType } from 'app/contract/IRecipeType';

@Pipe({ name: 'recipeTypeFilter' })
export class RecipeTypeFilterPipe implements PipeTransform {
  transform(value: IRecipe[], type: IRecipeType): IRecipe[] {
    if (!value) {
      return undefined;
    }
    return value.filter(x => x.recipeType.id === type.id);
  }
}
