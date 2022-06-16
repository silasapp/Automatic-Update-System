import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AccountRoutingModule } from './accoun-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent,
  
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AccountComponent],
})
export class AccountModule {}
