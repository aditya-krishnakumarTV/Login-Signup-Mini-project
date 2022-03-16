import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

interface LoginSignupDataResponse {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean
}

@Injectable({
    providedIn: 'root'
})
export class LoginSignupService {

    apiKey = "AIzaSyA3JE6GA1oB7GK1rs-OIdSL2zK3Kx284ac"

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<LoginSignupDataResponse>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.apiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError))
    }

    logIn(email: string, password: string) {
        return this.http.post<LoginSignupDataResponse>(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.handleError))
    }

    private handleError(errorRes : HttpErrorResponse){
        let errorMessage = "An unknown error occured!"
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage)
            }
            switch (errorRes.error.error.message) {
                case 'EMAIL_NOT_FOUND':
                    errorMessage = "There is no user record corresponding to this email. The user may have been deleted.";
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = "The password is invalid or the user does not have a password.";
                    break;
                    case 'EMAIL_EXISTS':
                    errorMessage = "The email address is already in use by another account.";
                    break;
                case 'INVALID_EMAIL':
                    errorMessage = "The entered email is invalid.";
                    break;
                case 'WEAK_PASSWORD : Password should be at least 6 characters':
                    errorMessage = "The Password should be at least 6 characters.";
                    break;
            }
            return throwError(errorMessage)
    }
}