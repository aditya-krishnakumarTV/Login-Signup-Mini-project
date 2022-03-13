import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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
            })
    }
}