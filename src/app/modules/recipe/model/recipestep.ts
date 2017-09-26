import { Validators } from '@angular/forms';
import { IFormEntity } from 'app/contract/IFormEntity';
import { IRecipeStep } from 'app/contract/IRecipeStep';

export class RecipeStep implements IFormEntity, IRecipeStep {
  public description: string;
  public stepNumber: number;
  public isDone: boolean;

  public formErrors = {
    'description': ''
  };

  public validationMessages = {
    'description': {
      'required': 'Description is required.',
    }
  };

  constructor(source?: IRecipeStep) {
    this.isDone = false;
    if (source) {
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
