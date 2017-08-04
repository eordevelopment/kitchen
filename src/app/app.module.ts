import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './services/auth-guard';

// Components

// Services
import { StorageService } from './services/storage.service';
import { AccountService } from './services/account.service';
import { CategoriesService } from './services/categories.service'
import { ItemsService } from './services/items.service'
import { RecipesService } from './services/recipes.service'
import { FormHelperService } from './services/form-helper.service'
import { PlanService } from './services/plan.service'

import { AppShellComponent } from 'app/app-shell/app-shell.component';

// Feature modules
import { RecipeModule } from 'app/modules/recipe/recipe.module';
import { InventoryModule } from 'app/modules/inventory/inventory.module';
import { PlanModule } from 'app/modules/plan/plan.module';
import { WelcomeModule } from 'app/modules/welcome/welcome.module';

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
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,

    RecipeModule,
    InventoryModule,
    PlanModule,
    WelcomeModule
  ],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
