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
    checkPassword(password) {
        return (password === this._password);
    }
    resetPassword() {
        this._password = prompt('What is your new password?') || this._password;
    }
}
exports.Admin = Admin;


/***/ }),

/***/ "./app/models/classes/GoogleBot.ts":
/*!*****************************************!*\
  !*** ./app/models/classes/GoogleBot.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleBot = void 0;
const TokenInit_1 = __webpack_require__(/*! ./TokenInit */ "./app/models/classes/TokenInit.ts");
class GoogleBot extends TokenInit_1.TokenInit {
    checkGoogleLogin(token) {
        return (token === this.token);
    }
    setGoogleToken(token) {
        this.setToken(token);
    }
}
exports.GoogleBot = GoogleBot;


/***/ }),

/***/ "./app/models/classes/TokenInit.ts":
/*!*****************************************!*\
  !*** ./app/models/classes/TokenInit.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TokenInit = void 0;
class TokenInit {
    constructor() {
        this._token = "";
    }
    get token() {
        return this._token;
    }
    setToken(token) {
        this._token = token;
    }
}
exports.TokenInit = TokenInit;


/***/ }),

/***/ "./app/models/classes/User.ts":
/*!************************************!*\
  !*** ./app/models/classes/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const TokenInit_1 = __webpack_require__(/*! ./TokenInit */ "./app/models/classes/TokenInit.ts");
class User extends TokenInit_1.TokenInit {
    constructor() {
        super(...arguments);
        this._password = 'user';
    }
    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this.token);
    }
    setGoogleToken(token) {
        this.setToken(token);
    }
    getFacebookLogin(token) {
        return (token === this.token);
    }
    setFacebookToken(token) {
        this.setToken(token);
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
const GoogleBot_1 = __webpack_require__(/*! ./models/classes/GoogleBot */ "./app/models/classes/GoogleBot.ts");
const passwordElement = document.querySelector('#password');
const typePasswordElement = document.querySelector('#typePassword');
const typeGoogleElement = document.querySelector('#typeGoogle');
const typeFacebookElement = document.querySelector('#typeFacebook');
const loginAsAdminElement = document.querySelector('#loginAsAdmin');
const resetPasswordElement = document.querySelector('#resetPassword');
document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    debugger;
    let user;
    let auth = false;
    switch (true) {
        case (loginAsAdminElement.checked && typePasswordElement.checked):
            user = new Admin_1.Admin();
            auth = user.checkPassword(passwordElement.value);
            console.log(user);
            break;
        case (loginAsAdminElement.checked && !typePasswordElement.checked):
            alert('Admins can only sign in through Password');
            break;
        case (!loginAsAdminElement.checked || passwordElement.value === "user"):
            user = new User_1.User();
            switch (true) {
                case typePasswordElement.checked:
                    auth = user.checkPassword(passwordElement.value);
                    break;
                case typeFacebookElement.checked:
                    user.setFacebookToken('secret_token_fb');
                    auth = user.getFacebookLogin('secret_token_fb');
                    break;
                case typeGoogleElement.checked:
                    user.setGoogleToken('secret_token_google');
                    auth = user.checkGoogleLogin('secret_token_google');
                    break;
            }
            console.log(user);
            break;
    }
    if (typeGoogleElement.checked && !loginAsAdminElement.checked) {
        let user = new GoogleBot_1.GoogleBot();
        user.setGoogleToken('secret_token_google');
        auth = user.checkGoogleLogin('secret_token_google');
        console.log(user);
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
    let user = loginAsAdminElement.checked ? new Admin_1.Admin() : new User_1.User();
    user.resetPassword();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7Ozs7Ozs7OztBQ2RBO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ1pKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ2RKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWixvQkFBb0IsbUJBQU8sQ0FBQyxzREFBYTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUM3Qlo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsMkRBQXVCO0FBQzlDLGdCQUFnQixtQkFBTyxDQUFDLDZEQUF3QjtBQUNoRCxvQkFBb0IsbUJBQU8sQ0FBQyxxRUFBNEI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvQWRtaW4udHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9jbGFzc2VzL0dvb2dsZUJvdC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvVG9rZW5Jbml0LnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvY2xhc3Nlcy9Vc2VyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRtaW4gPSB2b2lkIDA7XHJcbmNsYXNzIEFkbWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJhZG1pblwiO1xyXG4gICAgfVxyXG4gICAgY2hlY2tQYXNzd29yZChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiAocGFzc3dvcmQgPT09IHRoaXMuX3Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBwcm9tcHQoJ1doYXQgaXMgeW91ciBuZXcgcGFzc3dvcmQ/JykgfHwgdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZG1pbiA9IEFkbWluO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdvb2dsZUJvdCA9IHZvaWQgMDtcclxuY29uc3QgVG9rZW5Jbml0XzEgPSByZXF1aXJlKFwiLi9Ub2tlbkluaXRcIik7XHJcbmNsYXNzIEdvb2dsZUJvdCBleHRlbmRzIFRva2VuSW5pdF8xLlRva2VuSW5pdCB7XHJcbiAgICBjaGVja0dvb2dsZUxvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbiA9PT0gdGhpcy50b2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRHb29nbGVUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuc2V0VG9rZW4odG9rZW4pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuR29vZ2xlQm90ID0gR29vZ2xlQm90O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRva2VuSW5pdCA9IHZvaWQgMDtcclxuY2xhc3MgVG9rZW5Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gXCJcIjtcclxuICAgIH1cclxuICAgIGdldCB0b2tlbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdG9rZW47XHJcbiAgICB9XHJcbiAgICBzZXRUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX3Rva2VuID0gdG9rZW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ub2tlbkluaXQgPSBUb2tlbkluaXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcclxuY29uc3QgVG9rZW5Jbml0XzEgPSByZXF1aXJlKFwiLi9Ub2tlbkluaXRcIik7XHJcbmNsYXNzIFVzZXIgZXh0ZW5kcyBUb2tlbkluaXRfMS5Ub2tlbkluaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9ICd1c2VyJztcclxuICAgIH1cclxuICAgIGNoZWNrR29vZ2xlTG9naW4odG9rZW4pIHtcclxuICAgICAgICAvLyByZXR1cm4gXCJ0aGlzIHdpbGwgbm90IHdvcmtcIjtcclxuICAgICAgICByZXR1cm4gKHRva2VuID09PSB0aGlzLnRva2VuKTtcclxuICAgIH1cclxuICAgIHNldEdvb2dsZVRva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUb2tlbih0b2tlbik7XHJcbiAgICB9XHJcbiAgICBnZXRGYWNlYm9va0xvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbiA9PT0gdGhpcy50b2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRGYWNlYm9va1Rva2VuKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUb2tlbih0b2tlbik7XHJcbiAgICB9XHJcbiAgICBjaGVja1Bhc3N3b3JkKHBhc3N3b3JkKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXNzd29yZCA9PT0gdGhpcy5fcGFzc3dvcmQpO1xyXG4gICAgfVxyXG4gICAgcmVzZXRQYXNzd29yZCgpIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9IHByb21wdCgnV2hhdCBpcyB5b3VyIG5ldyBwYXNzd29yZD8nKSB8fCB0aGlzLl9wYXNzd29yZDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlVzZXIgPSBVc2VyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgVXNlcl8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2NsYXNzZXMvVXNlclwiKTtcclxuY29uc3QgQWRtaW5fMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL0FkbWluXCIpO1xyXG5jb25zdCBHb29nbGVCb3RfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL0dvb2dsZUJvdFwiKTtcclxuY29uc3QgcGFzc3dvcmRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XHJcbmNvbnN0IHR5cGVQYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZVBhc3N3b3JkJyk7XHJcbmNvbnN0IHR5cGVHb29nbGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVHb29nbGUnKTtcclxuY29uc3QgdHlwZUZhY2Vib29rRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlRmFjZWJvb2snKTtcclxuY29uc3QgbG9naW5Bc0FkbWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbkFzQWRtaW4nKTtcclxuY29uc3QgcmVzZXRQYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXRQYXNzd29yZCcpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4tZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgbGV0IHVzZXI7XHJcbiAgICBsZXQgYXV0aCA9IGZhbHNlO1xyXG4gICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgY2FzZSAobG9naW5Bc0FkbWluRWxlbWVudC5jaGVja2VkICYmIHR5cGVQYXNzd29yZEVsZW1lbnQuY2hlY2tlZCk6XHJcbiAgICAgICAgICAgIHVzZXIgPSBuZXcgQWRtaW5fMS5BZG1pbigpO1xyXG4gICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIChsb2dpbkFzQWRtaW5FbGVtZW50LmNoZWNrZWQgJiYgIXR5cGVQYXNzd29yZEVsZW1lbnQuY2hlY2tlZCk6XHJcbiAgICAgICAgICAgIGFsZXJ0KCdBZG1pbnMgY2FuIG9ubHkgc2lnbiBpbiB0aHJvdWdoIFBhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKCFsb2dpbkFzQWRtaW5FbGVtZW50LmNoZWNrZWQgfHwgcGFzc3dvcmRFbGVtZW50LnZhbHVlID09PSBcInVzZXJcIik6XHJcbiAgICAgICAgICAgIHVzZXIgPSBuZXcgVXNlcl8xLlVzZXIoKTtcclxuICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVQYXNzd29yZEVsZW1lbnQuY2hlY2tlZDpcclxuICAgICAgICAgICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja1Bhc3N3b3JkKHBhc3N3b3JkRWxlbWVudC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVGYWNlYm9va0VsZW1lbnQuY2hlY2tlZDpcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLnNldEZhY2Vib29rVG9rZW4oJ3NlY3JldF90b2tlbl9mYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dGggPSB1c2VyLmdldEZhY2Vib29rTG9naW4oJ3NlY3JldF90b2tlbl9mYicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlR29vZ2xlRWxlbWVudC5jaGVja2VkOlxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2V0R29vZ2xlVG9rZW4oJ3NlY3JldF90b2tlbl9nb29nbGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja0dvb2dsZUxvZ2luKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVHb29nbGVFbGVtZW50LmNoZWNrZWQgJiYgIWxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCkge1xyXG4gICAgICAgIGxldCB1c2VyID0gbmV3IEdvb2dsZUJvdF8xLkdvb2dsZUJvdCgpO1xyXG4gICAgICAgIHVzZXIuc2V0R29vZ2xlVG9rZW4oJ3NlY3JldF90b2tlbl9nb29nbGUnKTtcclxuICAgICAgICBhdXRoID0gdXNlci5jaGVja0dvb2dsZUxvZ2luKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB9XHJcbiAgICBpZiAoYXV0aCkge1xyXG4gICAgICAgIGFsZXJ0KCdsb2dpbiBzdWNjZXNzJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhbGVydCgnbG9naW4gZmFpbGVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5yZXNldFBhc3N3b3JkRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB1c2VyID0gbG9naW5Bc0FkbWluRWxlbWVudC5jaGVja2VkID8gbmV3IEFkbWluXzEuQWRtaW4oKSA6IG5ldyBVc2VyXzEuVXNlcigpO1xyXG4gICAgdXNlci5yZXNldFBhc3N3b3JkKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=