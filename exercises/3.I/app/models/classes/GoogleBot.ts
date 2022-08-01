import {GoogleAuth} from "../interfaces/Google";

export class GoogleBot implements GoogleAuth{
    private _googleToken: string = "";

    checkGoogleLogin(token: string) {
        return (token === this._googleToken);
    }

    setGoogleToken(token: string) {
        this._googleToken = token;
    }

}