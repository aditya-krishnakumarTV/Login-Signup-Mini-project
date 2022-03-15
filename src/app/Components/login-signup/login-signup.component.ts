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
      this.loginSignupService.signUp(email, password).subscribe(
        (res) => {
          console.log(res);
          this.isLoading = false;
        },
        (errorMessage) => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: errorMessage,
          });
          this.isLoading = false;
        },
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Successfully Signed up!',
          });
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }

}
