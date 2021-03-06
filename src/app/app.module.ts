import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './services/auth-guard';

// Services
import { CategoriesService } from './services/categories.service'
import { ItemsService } from './services/items.service'
import { RecipesService } from './services/recipes.service'
import { FormHelperService } from './services/form-helper.service'
import { PlanService } from './services/plan.service'
import { ShoppingListService } from 'app/services/shopping-list.service';
import { SessionService } from 'app/services/session.service';

import { AppShellComponent } from 'app/app-shell/app-shell.component';

// Feature modules
import { RecipeModule } from 'app/modules/recipe/recipe.module';
import { InventoryModule } from 'app/modules/inventory/inventory.module';
import { PlanModule } from 'app/modules/plan/plan.module';
import { WelcomeModule } from 'app/modules/welcome/welcome.module';

@NgModule({
  providers: [
    AuthGuard,
    SessionService,
    CategoriesService,
    ItemsService,
    RecipesService,
    PlanService,
    FormHelperService,
    ShoppingListService],
  declarations: [
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    RecipeModule,
    InventoryModule,
    PlanModule,
    WelcomeModule
  ],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
