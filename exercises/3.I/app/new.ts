import {User} from "./models/classes/User";
import {Admin} from "./models/classes/Admin";
import {GoogleBot} from "./models/classes/GoogleBot";

const passwordElement = <HTMLInputElement>document.querySelector('#password');
const typePasswordElement = <HTMLInputElement>document.querySelector('#typePassword');
const typeGoogleElement = <HTMLInputElement>document.querySelector('#typeGoogle');
const typeFacebookElement = <HTMLInputElement>document.querySelector('#typeFacebook');
const loginAsAdminElement = <HTMLInputElement>document.querySelector('#loginAsAdmin');
const resetPasswordElement = <HTMLAnchorElement>document.querySelector('#resetPassword');


document.querySelector('#login-form')!.addEventListener('submit', (event) => {
    event.preventDefault();

    debugger;

    let user;
    let auth = false;
    switch (true) {
        case (loginAsAdminElement.checked && typePasswordElement.checked):
            user = new Admin();
            auth = user.checkPassword(passwordElement.value);
            console.log(user);
            break;
        case (loginAsAdminElement.checked && !typePasswordElement.checked):
            alert('Admins can only sign in through Password');
            break;
        case (!loginAsAdminElement.checked || passwordElement.value === "user"):
            user = new User();
            switch (true) {
                case typePasswordElement.checked:
                    auth = user.checkPassword(passwordElement.value);
                    break;
                case  typeFacebookElement.checked:
                    auth = user.getFacebookLogin('secret_token_fb');
                    user.setFacebookToken('secret_token_fb');
                    break
                case typeGoogleElement.checked:
                    user.setGoogleToken('secret_token_google');
                    auth = user.checkGoogleLogin('secret_token_google');
                    break;
            }
            console.log(user);
            break;
        case (!loginAsAdminElement.checked && typeGoogleElement.checked && passwordElement.value === ""):
            user = new GoogleBot()
            user.setGoogleToken('secret_token_google');
            auth = user.checkGoogleLogin('secret_token_google');
            console.log(user);
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

    let user = loginAsAdminElement.checked ? new Admin() : new User();
    user.resetPassword();

});