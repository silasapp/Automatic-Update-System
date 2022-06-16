import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from '../services/generic.service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['company.component.css']})

export class DashboardComponent {
  title = 'AUS2FrontEnd';
  showapply = false;
  showaccount = false;
  generic: GenericService;

  constructor(gen: GenericService) {
      this.generic = gen;
  }

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
