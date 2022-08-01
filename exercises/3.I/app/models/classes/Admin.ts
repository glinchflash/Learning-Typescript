import {PassAuth} from "../interfaces/Password";
import {FacebookAuth} from "../interfaces/Facebook";
import {GoogleAuth} from "../interfaces/Google";

export class Admin implements PassAuth, FacebookAuth, GoogleAuth {

    private _password: string = "admin";

    setGoogleToken(token: string): void {
        throw new Error('Function not supported for admins');
    }
    checkGoogleLogin(token: string): boolean {
        return false;
    }
    setFacebookToken(token: string): void {
        throw new Error('Function not supported for admins');
    }
    getFacebookLogin(token: string): boolean {
        return false;
    }


    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')|| this._password;
    }

}