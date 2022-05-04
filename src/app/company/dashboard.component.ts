import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['company.component.css']})

export class dashboardComponent {
  title = 'AUS2FrontEnd';
  showapply = false;
  showaccount = false;

  showApply() {
    if (this.showapply) {
      this.showapply = false;
    } else {
      this.showapply = true;
    }
  }

  showAccount() {
    if (this.showaccount) {
      this.showaccount = false;
    } else {
      this.showaccount = true;
    }
  }
}
