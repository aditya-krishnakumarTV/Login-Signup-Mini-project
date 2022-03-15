import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginSignupService } from 'src/app/services/login-signup.service';

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
      this.loginSignupService.signUp(email, password).subscribe((res) => {
        console.log(res);
        this.isLoading = false;
      },
        (error) => {
          console.log(error);
          this.isLoading = false;
        });
    }

    form.reset();
  }

}
