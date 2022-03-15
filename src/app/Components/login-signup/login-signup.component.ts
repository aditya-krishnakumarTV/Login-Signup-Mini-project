import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { LoginSignupService } from 'src/app/services/login-signup.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  isLogIn: boolean = true;
  isLoading: boolean = false;
  errorMes : string = '';

  constructor(private loginSignupService: LoginSignupService) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLogIn = !this.isLogIn;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    if (!this.isLogIn) {
      this.loginSignupService.signUp(email, password).subscribe((res) => {
        console.log(res);
        this.isLoading = false;
      },
        (errorRes) => {
          console.log(errorRes);
          switch(errorRes.error.error.message){
            case 'EMAIL_EXISTS' :
              this.errorMes = "The email address is already in use by another account.";
              break;
            case 'INVALID_EMAIL':
              this.errorMes = "The entered email is invalid.";
              break;
            case 'WEAK_PASSWORD : Password should be at least 6 characters':
              this.errorMes = "The Password should be at least 6 characters.";
              break;
          }
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: this.errorMes,
          });
          this.isLoading = false;
        });
    }

    form.reset();
  }

}
