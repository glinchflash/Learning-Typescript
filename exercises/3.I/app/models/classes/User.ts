import {GoogleAuth} from "../interfaces/Google";
import {FacebookAuth} from "../interfaces/Facebook";
import {PassAuth} from "../interfaces/Password";
import {TokenInit} from "./TokenInit";
export class User extends TokenInit implements GoogleAuth, FacebookAuth, PassAuth {
    private _password: string= 'user';



    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this.token);
    }

    setGoogleToken(token: string) {
        this.setToken(token);
    }

    getFacebookLogin(token: string) {
        return (token === this.token);
    }

    setFacebookToken(token: string) {
        this.setToken(token)
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')|| this._password;
    }
}
