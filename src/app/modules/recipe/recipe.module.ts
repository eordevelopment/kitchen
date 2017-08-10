import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';

import { RecipeDetailComponent } from 'app/modules/recipe/components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from 'app/modules/recipe/components/recipe-list/recipe-list.component';
import { RecipeViewComponent } from 'app/modules/recipe/components/recipe-view/recipe-view.component';
import { RecipeRoutingModule } from 'app/modules/recipe/recipe.routing';

// Pipes
import { RecipeTypeFilterPipe } from 'app/modules/recipe/pipes/recipe-type-filter.pipe';
import { RecipeWithTypePipe } from 'app/modules/recipe/pipes/has-recipe-type-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ],
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeViewComponent,
    RecipeTypeFilterPipe,
    RecipeWithTypePipe
  ],
  providers: [
    Title
  ]
})
export class RecipeModule { }
