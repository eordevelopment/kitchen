import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/services/auth-guard';
import { PlannerHomeComponent } from 'app/modules/plan/components/planner-home/planner-home.component';
import { ShoppingListComponent } from 'app/modules/plan/components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'planner',  component: PlannerHomeComponent, canActivate: [AuthGuard] },
  { path: 'shopping',  component: ShoppingListComponent, canActivate: [AuthGuard] },
  { path: 'shopping/:id',  component: ShoppingListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class PlanRoutingModule {}
