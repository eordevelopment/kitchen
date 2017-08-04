import { SelectItem } from 'app/classes/selectItem';
import { Pipe, PipeTransform } from '@angular/core';
import { IRecipe } from 'app/contract/IRecipe';

@Pipe({ name: 'hasRecipeWithType' })
export class RecipeWithTypePipe implements PipeTransform {
    transform(value: SelectItem[], allRecipes: IRecipe[]): SelectItem[] {
        const returnValue = new Array();
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            if (allRecipes.filter(x => x.type === item.key).length > 0) {
                returnValue.push(item);
            }
        }
        return returnValue;
    }
}
