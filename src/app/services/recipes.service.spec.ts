/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipesService } from './recipes.service';

describe('Service: Recipies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesService]
    });
  });

  it('should ...', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
