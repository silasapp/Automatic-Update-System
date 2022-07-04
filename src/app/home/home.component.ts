import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuardsCheckEnd, Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, GenericService } from '../services';
import { environment } from 'src/environments/environment' ;

@Component({
  selector: 'app-root',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class homeComponent implements OnInit {
  title = 'AUS2FrontEnd';
  emailModal = false;
  loginForm: FormGroup;
  email: string;
  genk: GenericService;

  constructor(private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private gen: GenericService,
    private auth: AuthenticationService) {
      this.genk = gen;

      // this.route.params.subscribe(params => {
      //   console.log(params); // { orderby: "price" }
      //   this.email = params["email"];
      //   //console.log(this.orderby); // price
      //   if(this.email != null){
      //     this.auth.login(this.email)
      //       .subscribe(result => {
      //         this.router.navigate(['/' + this.genk.company, 'dashboard']);
      //       });
      //   }
      // });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'Email': new FormControl(this.email, [Validators.required])
    }, {});

    this.route.params.subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.email = params["email"];
        //console.log(this.orderby); // price
        if(this.email != null){
          this.auth.login(this.email)
            .subscribe(result => {
              this.router.navigate(['/' + this.genk.company, 'dashboard']);
            });
        }
      });

  }

  toggleEmailModal() {
    if (!this.emailModal) {
      this.emailModal = true;
    } else {
      this.emailModal = false;
    }
    this.cd.markForCheck();
  }

  login() {
    //debugger;
    this.auth.login(this.email)
    .subscribe(result => {
      this.router.navigate(['/' + this.genk.company, 'dashboard']);
    });
  }
}
