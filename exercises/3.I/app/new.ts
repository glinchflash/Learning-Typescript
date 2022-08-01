import {User} from "./models/classes/User";
import {Admin} from "./models/classes/Admin";
import {GoogleBot} from "./models/classes/Google";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');

let guest = new User('fb', 'google');
let admin = new Admin;
let bot = new GoogleBot('google', 'google')


document.querySelector('#login-form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    let user;
    if (loginAsAdminElement.checked){
        user = admin;
        console.log(user);
    } else if (!loginAsAdminElement.checked && passwordElement.value !== 'google'){
        user = guest;
        console.log(user);
    } else if (!loginAsAdminElement.checked && passwordElement.value === 'google'){
        user = bot;
        console.log(user);
    }

    if (user === guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    } else if (user === bot) {
        user.setGoogleToken('secret_token_google');
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