import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageNotFoundComponent } from "./Components/header/page-not-found/page-not-found.component";
import { HomeComponent } from "./Components/home/home.component";
import { LoginSignupComponent } from "./Components/login-signup/login-signup.component";

const appRoute: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginSignupComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }