import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WelcomeRoutingModule } from 'app/modules/welcome/welcome.routing';
import { HomePublicComponent } from 'app/modules/welcome/components/home-public/home-public.component';
import { HomeComponent } from 'app/modules/welcome/components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WelcomeRoutingModule
  ],
  declarations: [
    HomePublicComponent,
    HomeComponent
  ]
})
export class WelcomeModule { }
