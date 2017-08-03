import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './services/auth-guard';

// Components
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { PlannerHomeComponent } from './components/planner-home/planner-home.component';
import { HomeComponent } from 'app/components/home/home.component';
import { HomePublicComponent } from 'app/components/home-public/home-public.component';

// Services
import { StorageService } from './services/storage.service';
import { AccountService } from './services/account.service';
import { CategoriesService } from './services/categories.service'
import { ItemsService } from './services/items.service'
import { RecipesService } from './services/recipes.service'
import { FormHelperService } from './services/form-helper.service'
import { PlanService } from './services/plan.service'

// Pipes
import { RecipeTypeFilterPipe } from './pipes/recipe-type-filter.pipe';
import { RecipeWithTypePipe } from './pipes/has-recipe-type-filter.pipe';

@NgModule({
  providers: [
    AuthGuard,
    StorageService,
    CategoriesService,
    AccountService,
    ItemsService,
    RecipesService,
    PlanService,
    FormHelperService],
  declarations: [
    AppShellComponent,
    CategoriesListComponent,
    CategoryDetailComponent,
    RecipeListComponent,
    HomePublicComponent,
    LoginComponent,
    RegisterComponent,
    RecipeDetailComponent,
    PlannerHomeComponent,
    HomeComponent,

    RecipeTypeFilterPipe,
    RecipeWithTypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
