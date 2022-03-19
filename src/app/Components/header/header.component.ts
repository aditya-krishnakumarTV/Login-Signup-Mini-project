import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { LoginSignupService } from 'src/app/services/login-signup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub!: Subscription; 

  constructor(private loginSignupService: LoginSignupService, private router : Router) {}

  ngOnInit(): void {
    this.userSub = this.loginSignupService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onLogout(){
    this.isAuthenticated = !this.isAuthenticated;
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
