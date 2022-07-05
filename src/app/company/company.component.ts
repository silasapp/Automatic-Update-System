import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, GenericService } from '../services';

@Component({
  selector: 'app-company-details',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyComponent implements OnInit {
  genk: GenericService;
  auth: AuthenticationService;
  showapply = false;
  showaccount = false;

  constructor(private gen: GenericService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private cd: ChangeDetectorRef) {
      this.genk = gen;
      this.auth = authenticationService;
   }

  ngOnInit(): void {

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

  logout() {
    this.auth.logout();
    this.router.navigate(['/' + this.genk.home]);
  }
}
