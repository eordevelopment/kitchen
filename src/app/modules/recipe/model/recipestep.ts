import { Validators } from '@angular/forms';
import { IFormEntity } from 'app/contract/IFormEntity';
import { IRecipeStep } from 'app/contract/IRecipeStep';

export class RecipeStep implements IFormEntity, IRecipeStep {
  public id: number;
  public description: string;
  public stepNumber: number;

  public formErrors = {
    'description': ''
  };

  public validationMessages = {
    'description': {
      'required': 'Description is required.',
    }
  };

  constructor(source?: IRecipeStep) {
    if (source) {
      this.id = source.id;
      this.description = source.description;
      this.stepNumber = source.stepNumber
    }
  }

  public getFormConfig(): any {
    return {
      'description': [this.description, [Validators.required]]
    }
  }
}