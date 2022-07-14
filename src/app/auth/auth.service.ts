import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponseData {
    kind : string,
    idToken : string,
    email :string,
    Password : string,
    refreshToken :string,
    expiresIn : string,
    localId : string
}

@Injectable({providedIn: "root"})
export class AuthService{

    constructor(private http : HttpClient){}
    signUp(email : string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAJdJDcyiKXWX14Kc7nmYygVbJUSGyTSjQ')
    {
        email : String,
        password : String,
        returnSecureToken :true
    }
    }

}