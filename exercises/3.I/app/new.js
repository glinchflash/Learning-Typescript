"use strict";
class User {
    constructor(facebook, google) {
        this._password = 'user';
        this._facebookToken = facebook;
        this._googleToken = google;
    }
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }
    setFacebookToken(token) {
        this._facebookToken = token;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?') || this._password;
    }
}
//admin cannot use Google or facebook token
class Admin {
    constructor() {
        this._password = "admin";
    }
    setGoogleToken(token) {
        throw new Error('Function not supported for admins');
    }
    checkGoogleLogin(token) {
        return false;
    }
    setFacebookToken(token) {
        throw new Error('Function not supported for admins');
    }
    getFacebookLogin(token) {
        return false;
    }
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?') || this._password;
    }
}
// class GoogleBot implements GoogleBotAuth
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User('secret_token_fb', 'secret_token_google');
let admin = new Admin;
// let google = new GoogleBot()
document.querySelector('#login-form').addEventListener('submit', (event) => {
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
    }
    else {
        alert('login failed');
    }
});
resetPasswordElement.addEventListener('click', (event) => {
    event.preventDefault();
    let user = loginAsAdminElement.checked ? admin : guest;
    user.resetPassword();
});
