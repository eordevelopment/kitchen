import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthGuard } from 'app/services/auth-guard';
import { ItemsListComponent } from 'app/modules/inventory/components/items-list/items-list.component';
import { ItemDetailComponent } from 'app/modules/inventory/components/item-detail/item-detail.component';

const routes: Routes = [
  { path: 'items',  component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'itemdetail/:id', component: ItemDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class InventoryRoutingModule {}
