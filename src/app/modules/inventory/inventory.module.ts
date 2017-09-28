import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventoryRoutingModule } from 'app/modules/inventory/inventory.routing';
import { ItemsListComponent } from 'app/modules/inventory/components/items-list/items-list.component';
import { ItemDetailComponent } from 'app/modules/inventory/components/item-detail/item-detail.component';
import { CategoriesListComponent } from 'app/modules/inventory/components/categories-list/categories-list.component';
import { CategoryDetailComponent } from 'app/modules/inventory/components/category-detail/category-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InventoryRoutingModule
  ],
  declarations: [
    ItemsListComponent,
    ItemDetailComponent,

    // Deprecated
    CategoriesListComponent,
    CategoryDetailComponent
  ]
})
export class InventoryModule { }
