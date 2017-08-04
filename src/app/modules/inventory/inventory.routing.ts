import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from 'app/services/auth-guard';
import { CategoriesListComponent } from 'app/modules/inventory/components/categories-list/categories-list.component';
import { CategoryDetailComponent } from 'app/modules/inventory/components/category-detail/category-detail.component';

const routes: Routes = [
  { path: 'categories',  component: CategoriesListComponent, canActivate: [AuthGuard] },
  { path: 'categorydetail/:id', component: CategoryDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class InventoryRoutingModule {}
