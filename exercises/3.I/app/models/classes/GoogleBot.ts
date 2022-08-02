import {GoogleAuth} from "../interfaces/Google";
import {TokenInit} from "./TokenInit";

export class GoogleBot extends TokenInit implements GoogleAuth{
    checkGoogleLogin(token: string) {
        return (token === this.token);
    }

    setGoogleToken(token: string) {
        this.setToken(token);
    }

}