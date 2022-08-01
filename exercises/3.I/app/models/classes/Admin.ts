import {PassAuth} from "../interfaces/Password";

export class Admin implements PassAuth {

    private _password: string = "admin";

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?')|| this._password;
    }

}