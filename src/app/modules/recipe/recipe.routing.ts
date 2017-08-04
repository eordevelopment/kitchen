import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeDetailComponent } from 'app/modules/recipe/components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from 'app/modules/recipe/components/recipe-list/recipe-list.component';
import { RecipeViewComponent } from 'app/modules/recipe/components/recipe-view/recipe-view.component';
import { AuthGuard } from 'app/services/auth-guard';

const routes: Routes = [
  { path: 'recipes',  component: RecipeListComponent, canActivate: [AuthGuard] },
  { path: 'recipedetail/:id', component: RecipeDetailComponent, canActivate: [AuthGuard] },
  { path: 'recipeview/:id', component: RecipeViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class RecipeRoutingModule {}
