import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { detailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    detailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ],
  exports:[HomeComponent]
})
export class ModulesModule { }
