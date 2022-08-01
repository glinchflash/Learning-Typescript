import {GoogleAuth} from "../interfaces/Google";
import {FacebookAuth} from "../interfaces/Facebook";
import {PassAuth} from "../interfaces/Password";

export class GoogleBot implements GoogleAuth, FacebookAuth, PassAuth{
    private _googleToken: string;
    private _password: string;

    constructor(google: string, password:string) {
        this._googleToken = google;
        this._password = password;
    }

    checkPassword(password: string): boolean {
        throw new Error('Function not supported for google bots');
    }
    resetPassword(): void {
        throw new Error('Function not supported for google bots');
    }

    checkGoogleLogin(token: string) {
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

    setFacebookToken(token: string): void {
        throw new Error('Function not supported for Google Bots');
    }
    getFacebookLogin(token: string): boolean {
        return false;
    }
}