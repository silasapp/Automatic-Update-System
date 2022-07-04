import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChangePasswordComponent } from './changepassword.component';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyProfileComponent } from './companyprofile.component';
import { DashboardComponent } from './dashboard.component';
import { MessagesComponent } from './messeges.component';
import { MyScheduleComponent } from './myschedule.component';
import { PermitsComponent } from './permits.component';
import { ApplyComponent } from './apply.component';
import { MyApplicationComponent } from './myapplication.component';
import { CompanyDirectorsComponent } from './companydirectors.component';
import { CompanyInformationComponent } from './companyinformation.component';
import { RegisterDirectorComponent } from './registerdirector.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [
    DashboardComponent, MessagesComponent, ChangePasswordComponent, MyScheduleComponent,
    CompanyProfileComponent, PermitsComponent, ApplyComponent, MyApplicationComponent,
    CompanyInformationComponent, CompanyDirectorsComponent, RegisterDirectorComponent
  ],
  providers: [],
})
export class CompanyModule { }

