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
// class GoogleBot implements GoogleBotAuth
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
let guest = new User_1.User('secret_token_fb', 'secret_token_google');
let admin = new Admin_1.Admin;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7Ozs7Ozs7OztBQzFCQTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUM3Qlo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsMkRBQXVCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvQWRtaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9jbGFzc2VzL1VzZXIudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2FwcC9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZG1pbiA9IHZvaWQgMDtcclxuY2xhc3MgQWRtaW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBcImFkbWluXCI7XHJcbiAgICB9XHJcbiAgICBzZXRHb29nbGVUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IHN1cHBvcnRlZCBmb3IgYWRtaW5zJyk7XHJcbiAgICB9XHJcbiAgICBjaGVja0dvb2dsZUxvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2V0RmFjZWJvb2tUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IHN1cHBvcnRlZCBmb3IgYWRtaW5zJyk7XHJcbiAgICB9XHJcbiAgICBnZXRGYWNlYm9va0xvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY2hlY2tQYXNzd29yZChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiAocGFzc3dvcmQgPT09IHRoaXMuX3Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBwcm9tcHQoJ1doYXQgaXMgeW91ciBuZXcgcGFzc3dvcmQ/JykgfHwgdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZG1pbiA9IEFkbWluO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlVzZXIgPSB2b2lkIDA7XHJcbmNsYXNzIFVzZXIge1xyXG4gICAgY29uc3RydWN0b3IoZmFjZWJvb2ssIGdvb2dsZSkge1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gJ3VzZXInO1xyXG4gICAgICAgIHRoaXMuX2ZhY2Vib29rVG9rZW4gPSBmYWNlYm9vaztcclxuICAgICAgICB0aGlzLl9nb29nbGVUb2tlbiA9IGdvb2dsZTtcclxuICAgIH1cclxuICAgIGNoZWNrR29vZ2xlTG9naW4odG9rZW4pIHtcclxuICAgICAgICAvLyByZXR1cm4gXCJ0aGlzIHdpbGwgbm90IHdvcmtcIjtcclxuICAgICAgICByZXR1cm4gKHRva2VuID09PSB0aGlzLl9nb29nbGVUb2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRHb29nbGVUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX2dvb2dsZVRva2VuID0gdG9rZW47XHJcbiAgICB9XHJcbiAgICBnZXRGYWNlYm9va0xvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbiA9PT0gdGhpcy5fZmFjZWJvb2tUb2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRGYWNlYm9va1Rva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5fZmFjZWJvb2tUb2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG4gICAgY2hlY2tQYXNzd29yZChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiAocGFzc3dvcmQgPT09IHRoaXMuX3Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBwcm9tcHQoJ1doYXQgaXMgeW91ciBuZXcgcGFzc3dvcmQ/JykgfHwgdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Vc2VyID0gVXNlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IFVzZXJfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL1VzZXJcIik7XHJcbmNvbnN0IEFkbWluXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvY2xhc3Nlcy9BZG1pblwiKTtcclxuLy8gY2xhc3MgR29vZ2xlQm90IGltcGxlbWVudHMgR29vZ2xlQm90QXV0aFxyXG5jb25zdCBwYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcclxuY29uc3QgdHlwZVBhc3N3b3JkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlUGFzc3dvcmQnKTtcclxuY29uc3QgdHlwZUdvb2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUdvb2dsZScpO1xyXG5jb25zdCB0eXBlRmFjZWJvb2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVGYWNlYm9vaycpO1xyXG5jb25zdCBsb2dpbkFzQWRtaW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luQXNBZG1pbicpO1xyXG5jb25zdCByZXNldFBhc3N3b3JkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldFBhc3N3b3JkJyk7XHJcbmxldCBndWVzdCA9IG5ldyBVc2VyXzEuVXNlcignc2VjcmV0X3Rva2VuX2ZiJywgJ3NlY3JldF90b2tlbl9nb29nbGUnKTtcclxubGV0IGFkbWluID0gbmV3IEFkbWluXzEuQWRtaW47XHJcbi8vIGxldCBnb29nbGUgPSBuZXcgR29vZ2xlQm90KClcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdXNlciA9IGxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCA/IGFkbWluIDogZ3Vlc3Q7XHJcbiAgICBpZiAodXNlciA9PT0gZ3Vlc3QpIHtcclxuICAgICAgICB1c2VyLnNldEdvb2dsZVRva2VuKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgdXNlci5zZXRGYWNlYm9va1Rva2VuKCdzZWNyZXRfdG9rZW5fZmInKTtcclxuICAgIH1cclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgbGV0IGF1dGggPSBmYWxzZTtcclxuICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgIGNhc2UgdHlwZVBhc3N3b3JkRWxlbWVudC5jaGVja2VkOlxyXG4gICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgdHlwZUdvb2dsZUVsZW1lbnQuY2hlY2tlZDpcclxuICAgICAgICAgICAgYXV0aCA9IHVzZXIuY2hlY2tHb29nbGVMb2dpbignc2VjcmV0X3Rva2VuX2dvb2dsZScpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHR5cGVGYWNlYm9va0VsZW1lbnQuY2hlY2tlZDpcclxuICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgIGF1dGggPSB1c2VyLmdldEZhY2Vib29rTG9naW4oJ3NlY3JldF90b2tlbl9mYicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ2luIHN1Y2Nlc3MnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdsb2dpbiBmYWlsZWQnKTtcclxuICAgIH1cclxufSk7XHJcbnJlc2V0UGFzc3dvcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHVzZXIgPSBsb2dpbkFzQWRtaW5FbGVtZW50LmNoZWNrZWQgPyBhZG1pbiA6IGd1ZXN0O1xyXG4gICAgdXNlci5yZXNldFBhc3N3b3JkKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=