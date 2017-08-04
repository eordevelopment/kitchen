import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlanRoutingModule } from 'app/modules/plan/plan.routing';
import { PlannerHomeComponent } from 'app/modules/plan/components/planner-home/planner-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlanRoutingModule
  ],
  declarations: [
    PlannerHomeComponent
  ]
})
export class PlanModule { }
