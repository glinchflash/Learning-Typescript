/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/models/classes/Admin.ts":
/*!*************************************!*\
  !*** ./app/models/classes/Admin.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Admin = void 0;
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
exports.Admin = Admin;


/***/ }),

/***/ "./app/models/classes/Google.ts":
/*!**************************************!*\
  !*** ./app/models/classes/Google.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleBot = void 0;
class GoogleBot {
    constructor(google, password) {
        this._googleToken = google;
        this._password = password;
    }
    checkPassword(password) {
        throw new Error('Function not supported for google bots');
    }
    resetPassword() {
        throw new Error('Function not supported for google bots');
    }
    checkGoogleLogin(token) {
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
    }
    setFacebookToken(token) {
        throw new Error('Function not supported for Google Bots');
    }
    getFacebookLogin(token) {
        return false;
    }
}
exports.GoogleBot = GoogleBot;


/***/ }),

/***/ "./app/models/classes/User.ts":
/*!************************************!*\
  !*** ./app/models/classes/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
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
exports.User = User;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./app/new.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const User_1 = __webpack_require__(/*! ./models/classes/User */ "./app/models/classes/User.ts");
const Admin_1 = __webpack_require__(/*! ./models/classes/Admin */ "./app/models/classes/Admin.ts");
const Google_1 = __webpack_require__(/*! ./models/classes/Google */ "./app/models/classes/Google.ts");
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User_1.User('fb', 'google');
let admin = new Admin_1.Admin;
let bot = new Google_1.GoogleBot('google', 'google');
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    //
    // let user;
    // if (!loginAsAdminElement.checked) {
    //     user = guest;
    //     console.log(user);
    // } else if (loginAsAdminElement.checked) {
    //     user = admin;
    //     console.log(user);
    // } else if (passwordElement.value === 'google'){
    //     user = bot;
    //     console.log(user);
    // }
    let user;
    if (loginAsAdminElement.checked) {
        user = admin;
        console.log(user);
    }
    else if (!loginAsAdminElement.checked && passwordElement.value !== 'google') {
        user = guest;
        console.log(user);
    }
    else if (!loginAsAdminElement.checked && passwordElement.value === 'google') {
        user = bot;
        console.log(user);
    }
    if (user === guest) {
        user.setGoogleToken('secret_token_google');
        user.setFacebookToken('secret_token_fb');
    }
    else if (user === bot) {
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7Ozs7Ozs7OztBQzFCQTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQzNCSjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUM3Qlo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsMkRBQXVCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNoRCxpQkFBaUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvQWRtaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9jbGFzc2VzL0dvb2dsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvVXNlci50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL25ldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkbWluID0gdm9pZCAwO1xyXG5jbGFzcyBBZG1pbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IFwiYWRtaW5cIjtcclxuICAgIH1cclxuICAgIHNldEdvb2dsZVRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3Qgc3VwcG9ydGVkIGZvciBhZG1pbnMnKTtcclxuICAgIH1cclxuICAgIGNoZWNrR29vZ2xlTG9naW4odG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRGYWNlYm9va1Rva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3Qgc3VwcG9ydGVkIGZvciBhZG1pbnMnKTtcclxuICAgIH1cclxuICAgIGdldEZhY2Vib29rTG9naW4odG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IHByb21wdCgnV2hhdCBpcyB5b3VyIG5ldyBwYXNzd29yZD8nKSB8fCB0aGlzLl9wYXNzd29yZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkbWluID0gQWRtaW47XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuR29vZ2xlQm90ID0gdm9pZCAwO1xyXG5jbGFzcyBHb29nbGVCb3Qge1xyXG4gICAgY29uc3RydWN0b3IoZ29vZ2xlLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHRoaXMuX2dvb2dsZVRva2VuID0gZ29vZ2xlO1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICB9XHJcbiAgICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBub3Qgc3VwcG9ydGVkIGZvciBnb29nbGUgYm90cycpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYXNzd29yZCgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIG5vdCBzdXBwb3J0ZWQgZm9yIGdvb2dsZSBib3RzJyk7XHJcbiAgICB9XHJcbiAgICBjaGVja0dvb2dsZUxvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbiA9PT0gdGhpcy5fZ29vZ2xlVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgc2V0R29vZ2xlVG9rZW4odG9rZW4pIHtcclxuICAgICAgICB0aGlzLl9nb29nbGVUb2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG4gICAgc2V0RmFjZWJvb2tUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IHN1cHBvcnRlZCBmb3IgR29vZ2xlIEJvdHMnKTtcclxuICAgIH1cclxuICAgIGdldEZhY2Vib29rTG9naW4odG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Hb29nbGVCb3QgPSBHb29nbGVCb3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcclxuY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihmYWNlYm9vaywgZ29vZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSAndXNlcic7XHJcbiAgICAgICAgdGhpcy5fZmFjZWJvb2tUb2tlbiA9IGZhY2Vib29rO1xyXG4gICAgICAgIHRoaXMuX2dvb2dsZVRva2VuID0gZ29vZ2xlO1xyXG4gICAgfVxyXG4gICAgY2hlY2tHb29nbGVMb2dpbih0b2tlbikge1xyXG4gICAgICAgIC8vIHJldHVybiBcInRoaXMgd2lsbCBub3Qgd29ya1wiO1xyXG4gICAgICAgIHJldHVybiAodG9rZW4gPT09IHRoaXMuX2dvb2dsZVRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEdvb2dsZVRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fZ29vZ2xlVG9rZW4gPSB0b2tlbjtcclxuICAgIH1cclxuICAgIGdldEZhY2Vib29rTG9naW4odG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gKHRva2VuID09PSB0aGlzLl9mYWNlYm9va1Rva2VuKTtcclxuICAgIH1cclxuICAgIHNldEZhY2Vib29rVG9rZW4odG9rZW4pIHtcclxuICAgICAgICB0aGlzLl9mYWNlYm9va1Rva2VuID0gdG9rZW47XHJcbiAgICB9XHJcbiAgICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IHByb21wdCgnV2hhdCBpcyB5b3VyIG5ldyBwYXNzd29yZD8nKSB8fCB0aGlzLl9wYXNzd29yZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlVzZXIgPSBVc2VyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgVXNlcl8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2NsYXNzZXMvVXNlclwiKTtcclxuY29uc3QgQWRtaW5fMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL0FkbWluXCIpO1xyXG5jb25zdCBHb29nbGVfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL0dvb2dsZVwiKTtcclxuY29uc3QgcGFzc3dvcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XHJcbmNvbnN0IHR5cGVQYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZVBhc3N3b3JkJyk7XHJcbmNvbnN0IHR5cGVHb29nbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVHb29nbGUnKTtcclxuY29uc3QgdHlwZUZhY2Vib29rRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlRmFjZWJvb2snKTtcclxuY29uc3QgbG9naW5Bc0FkbWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbkFzQWRtaW4nKTtcclxuY29uc3QgcmVzZXRQYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRQYXNzd29yZCcpO1xyXG5sZXQgZ3Vlc3QgPSBuZXcgVXNlcl8xLlVzZXIoJ2ZiJywgJ2dvb2dsZScpO1xyXG5sZXQgYWRtaW4gPSBuZXcgQWRtaW5fMS5BZG1pbjtcclxubGV0IGJvdCA9IG5ldyBHb29nbGVfMS5Hb29nbGVCb3QoJ2dvb2dsZScsICdnb29nbGUnKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IHVzZXI7XHJcbiAgICAvLyBpZiAoIWxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgLy8gICAgIHVzZXIgPSBndWVzdDtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIC8vIH0gZWxzZSBpZiAobG9naW5Bc0FkbWluRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAvLyAgICAgdXNlciA9IGFkbWluO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgLy8gfSBlbHNlIGlmIChwYXNzd29yZEVsZW1lbnQudmFsdWUgPT09ICdnb29nbGUnKXtcclxuICAgIC8vICAgICB1c2VyID0gYm90O1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgLy8gfVxyXG4gICAgbGV0IHVzZXI7XHJcbiAgICBpZiAobG9naW5Bc0FkbWluRWxlbWVudC5jaGVja2VkKSB7XHJcbiAgICAgICAgdXNlciA9IGFkbWluO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCAmJiBwYXNzd29yZEVsZW1lbnQudmFsdWUgIT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgdXNlciA9IGd1ZXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCAmJiBwYXNzd29yZEVsZW1lbnQudmFsdWUgPT09ICdnb29nbGUnKSB7XHJcbiAgICAgICAgdXNlciA9IGJvdDtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH1cclxuICAgIGlmICh1c2VyID09PSBndWVzdCkge1xyXG4gICAgICAgIHVzZXIuc2V0R29vZ2xlVG9rZW4oJ3NlY3JldF90b2tlbl9nb29nbGUnKTtcclxuICAgICAgICB1c2VyLnNldEZhY2Vib29rVG9rZW4oJ3NlY3JldF90b2tlbl9mYicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodXNlciA9PT0gYm90KSB7XHJcbiAgICAgICAgdXNlci5zZXRHb29nbGVUb2tlbignc2VjcmV0X3Rva2VuX2dvb2dsZScpO1xyXG4gICAgfVxyXG4gICAgZGVidWdnZXI7XHJcbiAgICBsZXQgYXV0aCA9IGZhbHNlO1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSB0eXBlUGFzc3dvcmRFbGVtZW50LmNoZWNrZWQ6XHJcbiAgICAgICAgICAgIGF1dGggPSB1c2VyLmNoZWNrUGFzc3dvcmQocGFzc3dvcmRFbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSB0eXBlR29vZ2xlRWxlbWVudC5jaGVja2VkOlxyXG4gICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja0dvb2dsZUxvZ2luKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHlwZUZhY2Vib29rRWxlbWVudC5jaGVja2VkOlxyXG4gICAgICAgICAgICBkZWJ1Z2dlcjtcclxuICAgICAgICAgICAgYXV0aCA9IHVzZXIuZ2V0RmFjZWJvb2tMb2dpbignc2VjcmV0X3Rva2VuX2ZiJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKGF1dGgpIHtcclxuICAgICAgICBhbGVydCgnbG9naW4gc3VjY2VzcycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ2luIGZhaWxlZCcpO1xyXG4gICAgfVxyXG59KTtcclxucmVzZXRQYXNzd29yZEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdXNlciA9IGxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCA/IGFkbWluIDogZ3Vlc3Q7XHJcbiAgICB1c2VyLnJlc2V0UGFzc3dvcmQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==