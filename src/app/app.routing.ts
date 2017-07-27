import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard';

import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { PlannerHomeComponent } from './components/planner-home/planner-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'categories',  component: CategoriesListComponent, canActivate: [AuthGuard] },
  { path: 'categorydetail/:id', component: CategoryDetailComponent, canActivate: [AuthGuard] },
  { path: 'recipes',  component: RecipeListComponent, canActivate: [AuthGuard] },
  { path: 'recipedetail/:id', component: RecipeDetailComponent, canActivate: [AuthGuard] },
  { path: 'planner',  component: PlannerHomeComponent, canActivate: [AuthGuard] },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
