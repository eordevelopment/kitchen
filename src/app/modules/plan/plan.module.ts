import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlanRoutingModule } from 'app/modules/plan/plan.routing';
import { PlannerHomeComponent } from 'app/modules/plan/components/planner-home/planner-home.component';
import { ShoppingListComponent } from 'app/modules/plan/components/shopping-list/shopping-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanRoutingModule
  ],
  declarations: [
    PlannerHomeComponent,
    ShoppingListComponent
  ]
})
export class PlanModule { }
