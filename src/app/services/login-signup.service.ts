import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

interface LoginSignupDataResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginSignupService {

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<LoginSignupDataResponse>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3JE6GA1oB7GK1rs-OIdSL2zK3Kx284ac",
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(errorRes => {
            let errorMessage = "An unknown error occured!"
            if(!errorRes.error || !errorRes.error.error){
                throw errorMessage
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS' :
                  errorMessage = "The email address is already in use by another account.";
                  break;
                case 'INVALID_EMAIL':
                  errorMessage = "The entered email is invalid.";
                  break;
                case 'WEAK_PASSWORD : Password should be at least 6 characters':
                  errorMessage = "The Password should be at least 6 characters.";
                  break;
              }
            throw errorMessage
        }))
    }
}