import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  isLogIn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLogIn = !this.isLogIn;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
  }

}
