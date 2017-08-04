import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from 'app/contract/IRecipe';

@Pipe({name: 'recipeTypeFilter'})
export class RecipeTypeFilterPipe implements PipeTransform {
  transform(value: IRecipe[], type: number): IRecipe[] {
    return value.filter(x => x.type === type);
  }
}
