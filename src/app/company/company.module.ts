import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './changepassword.component';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyProfileComponent } from './companyprofile.component';
import { DashboardComponent } from './dashboard.component';
import { MessagesComponent } from './messeges.component';
import { MyScheduleComponent } from './myschedule.component';
import { PermitsComponent } from './permits.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [
    DashboardComponent, MessagesComponent, ChangePasswordComponent, MyScheduleComponent, CompanyProfileComponent, PermitsComponent,
  ],
  providers: [],
})
export class CompanyModule { }

