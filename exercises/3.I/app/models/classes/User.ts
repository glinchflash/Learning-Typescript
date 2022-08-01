import {GoogleAuth} from "../interfaces/Google";
import {FacebookAuth} from "../interfaces/Facebook";
import {PassAuth} from "../interfaces/Password";

export class User implements GoogleAuth, FacebookAuth, PassAuth {
    private _password: string= 'user';
    private _facebookToken: string;
    private _googleToken: string;

    constructor(facebook: string, google: string) {
        this._facebookToken = facebook;
        this._googleToken = google;
    }

    checkGoogleLogin(token: string) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

    getFacebookLogin(token: string) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token: string) {
        this._facebookToken = token;
    }

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')|| this._password;
    }
}
