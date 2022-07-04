import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services';
import { GenericService } from '../services/generic.service';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['company.component.css']})

export class DashboardComponent implements OnInit {
  title = 'AUS2FrontEnd';
  showapply = false;
  showaccount = false;
  generic: GenericService;

  constructor(private gen: GenericService, 
    private auth: AuthenticationService) {
      this.generic = gen;
  }

  ngOnInit(): void {
    alert(this.auth.currentUserValue.userId);
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
