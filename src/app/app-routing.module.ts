import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginSignupComponent } from "./Components/login-signup/login-signup.component";

const appRoute: Routes = [
    { path: 'login', component: LoginSignupComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }