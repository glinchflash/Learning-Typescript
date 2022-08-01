interface PassAuth {
    checkPassword(password: string): boolean;

    resetPassword(): void;
}

interface GoogleAuth {
    setGoogleToken(token: string): void;

    checkGoogleLogin(token: string): boolean;
}

interface FacebookAuth {

    setFacebookToken(token: string): void;

    getFacebookLogin(token: string): boolean;
}

class User implements GoogleAuth, FacebookAuth, PassAuth {
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

//admin cannot use Google or facebook token
class Admin implements PassAuth, FacebookAuth, GoogleAuth {

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

    private _password: string = "admin";

    checkPassword(password: string): boolean {
        return (password === this._password);
    }

    resetPassword() {
            this._password = prompt('What is your new password?')|| this._password;
    }

}

// class GoogleBot implements GoogleBotAuth

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User('secret_token_fb', 'secret_token_google');
let admin = new Admin;
// let google = new GoogleBot()


document.querySelector('#login-form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;

    if (user === guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    debugger;

    let auth = false;
    switch (true) {
        case typePasswordElement.checked:
            auth = user.checkPassword(passwordElement.value);
            break;
        case typeGoogleElement.checked:
            auth = user.checkGoogleLogin('secret_token_google');
            break;
        case typeFacebookElement.checked:
            debugger;
            auth = user.getFacebookLogin('secret_token_fb');
            break;
    }

    if (auth) {
        alert('login success');
    } else {
        alert('login failed');
    }
});

resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();

    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});