import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'app/services/auth-guard';
import { PlannerHomeComponent } from 'app/modules/plan/components/planner-home/planner-home.component';

const routes: Routes = [
  { path: 'planner',  component: PlannerHomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class PlanRoutingModule {}
