import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './changepassword.component';
import { CompanyProfileComponent } from './companyprofile.component';
import { DashboardComponent } from './dashboard.component';
import { MessagesComponent } from './messeges.component';
import { MyScheduleComponent } from './myschedule.component';
import { PermitsComponent } from './permits.component'

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'myschedule', component: MyScheduleComponent},
    {path: 'changepassword', component: ChangePasswordComponent},
    {path: 'companyprofile', component: CompanyProfileComponent},
    {path: 'permits', component: PermitsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
