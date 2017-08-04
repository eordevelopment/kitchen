import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeType } from 'app/contract/IRecipeType';

@Pipe({ name: 'hasRecipeWithType' })
export class RecipeWithTypePipe implements PipeTransform {
    transform(value: IRecipeType[], allRecipes: IRecipe[]): IRecipeType[] {
        const returnValue = new Array();
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            if (allRecipes.filter(x => x.recipeType.id === item.id).length > 0) {
                returnValue.push(item);
            }
        }
        return returnValue;
    }
}
