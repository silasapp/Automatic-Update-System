import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { dashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [
    dashboardComponent
  ],
  providers: [],
})
export class CompanyModule { }

