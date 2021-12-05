import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  signIn(): void {
      this.authService.login(this.signInForm.value.email, this.signInForm.value.password).subscribe(
        (res: any) => {
          if( res.privileges == '{SALESMAN_USER}' ) {
            localStorage.setItem('currentUser', JSON.stringify(res));
            localStorage.setItem('userId', res.userId);
            localStorage.setItem('token', res.token);
            localStorage.setItem('scopes', res.privileges);
            this.authService.currentUserVal.next(res);
            this.router.navigateByUrl('overview')
          } else {
            alert('Only Registered Buyers Can Login, You are not seem to be a buyer!');
            return
          }
        }, error => {
          alert('User or password are incorrect, please try again!');
        }
      )
  }

}
