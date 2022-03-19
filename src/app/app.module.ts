import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginSignupComponent } from './Components/login-signup/login-signup.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PageNotFoundComponent } from './Components/header/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginSignupComponent,
    LoadingSpinnerComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
