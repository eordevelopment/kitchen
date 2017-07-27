import { IRecipe } from '../models/recipe';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'recipeTypeFilter'})
export class RecipeTypeFilterPipe implements PipeTransform {
  transform(value: IRecipe[], type: number): IRecipe[] {
    return value.filter(x => x.type === type);
  }
}
