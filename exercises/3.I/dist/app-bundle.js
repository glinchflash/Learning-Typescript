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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleBot = void 0;
class GoogleBot {
    constructor() {
        this._googleToken = "";
    }
    checkGoogleLogin(token) {
        return (token === this._googleToken);
    }
    setGoogleToken(token) {
        this._googleToken = token;
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
    constructor() {
        this._password = 'user';
        this._facebookToken = "";
        this._googleToken = "";
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
            user.setGoogleToken('secret_token_google');
            user.setFacebookToken('secret_token_fb');
            switch (true) {
                case typePasswordElement.checked:
                    auth = user.checkPassword(passwordElement.value);
                    break;
                case typeFacebookElement.checked:
                    auth = user.getFacebookLogin('secret_token_fb');
                    break;
                case typeGoogleElement.checked:
                    auth = user.checkGoogleLogin('secret_token_google');
                    break;
            }
            console.log(user);
            break;
        case (!loginAsAdminElement.checked && typeGoogleElement.checked && passwordElement.value === ""):
            user = new GoogleBot_1.GoogleBot();
            user.setGoogleToken('secret_token_google');
            auth = user.checkGoogleLogin('secret_token_google');
            console.log(user);
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
    let user = loginAsAdminElement.checked ? new Admin_1.Admin() : new User_1.User();
    user.resetPassword();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOzs7Ozs7Ozs7OztBQ2RBO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ2RKO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7Ozs7OztVQzdCWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsbUJBQU8sQ0FBQywyREFBdUI7QUFDOUMsZ0JBQWdCLG1CQUFPLENBQUMsNkRBQXdCO0FBQ2hELG9CQUFvQixtQkFBTyxDQUFDLHFFQUE0QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tb2RlbHMvY2xhc3Nlcy9BZG1pbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvR29vZ2xlQm90LnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvY2xhc3Nlcy9Vc2VyLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRtaW4gPSB2b2lkIDA7XHJcbmNsYXNzIEFkbWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gXCJhZG1pblwiO1xyXG4gICAgfVxyXG4gICAgY2hlY2tQYXNzd29yZChwYXNzd29yZCkge1xyXG4gICAgICAgIHJldHVybiAocGFzc3dvcmQgPT09IHRoaXMuX3Bhc3N3b3JkKTtcclxuICAgIH1cclxuICAgIHJlc2V0UGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmQgPSBwcm9tcHQoJ1doYXQgaXMgeW91ciBuZXcgcGFzc3dvcmQ/JykgfHwgdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZG1pbiA9IEFkbWluO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdvb2dsZUJvdCA9IHZvaWQgMDtcclxuY2xhc3MgR29vZ2xlQm90IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2dvb2dsZVRva2VuID0gXCJcIjtcclxuICAgIH1cclxuICAgIGNoZWNrR29vZ2xlTG9naW4odG9rZW4pIHtcclxuICAgICAgICByZXR1cm4gKHRva2VuID09PSB0aGlzLl9nb29nbGVUb2tlbik7XHJcbiAgICB9XHJcbiAgICBzZXRHb29nbGVUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX2dvb2dsZVRva2VuID0gdG9rZW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Hb29nbGVCb3QgPSBHb29nbGVCb3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcclxuY2xhc3MgVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9wYXNzd29yZCA9ICd1c2VyJztcclxuICAgICAgICB0aGlzLl9mYWNlYm9va1Rva2VuID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9nb29nbGVUb2tlbiA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjaGVja0dvb2dsZUxvZ2luKHRva2VuKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIFwidGhpcyB3aWxsIG5vdCB3b3JrXCI7XHJcbiAgICAgICAgcmV0dXJuICh0b2tlbiA9PT0gdGhpcy5fZ29vZ2xlVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgc2V0R29vZ2xlVG9rZW4odG9rZW4pIHtcclxuICAgICAgICB0aGlzLl9nb29nbGVUb2tlbiA9IHRva2VuO1xyXG4gICAgfVxyXG4gICAgZ2V0RmFjZWJvb2tMb2dpbih0b2tlbikge1xyXG4gICAgICAgIHJldHVybiAodG9rZW4gPT09IHRoaXMuX2ZhY2Vib29rVG9rZW4pO1xyXG4gICAgfVxyXG4gICAgc2V0RmFjZWJvb2tUb2tlbih0b2tlbikge1xyXG4gICAgICAgIHRoaXMuX2ZhY2Vib29rVG9rZW4gPSB0b2tlbjtcclxuICAgIH1cclxuICAgIGNoZWNrUGFzc3dvcmQocGFzc3dvcmQpIHtcclxuICAgICAgICByZXR1cm4gKHBhc3N3b3JkID09PSB0aGlzLl9wYXNzd29yZCk7XHJcbiAgICB9XHJcbiAgICByZXNldFBhc3N3b3JkKCkge1xyXG4gICAgICAgIHRoaXMuX3Bhc3N3b3JkID0gcHJvbXB0KCdXaGF0IGlzIHlvdXIgbmV3IHBhc3N3b3JkPycpIHx8IHRoaXMuX3Bhc3N3b3JkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuVXNlciA9IFVzZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBVc2VyXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvY2xhc3Nlcy9Vc2VyXCIpO1xyXG5jb25zdCBBZG1pbl8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2NsYXNzZXMvQWRtaW5cIik7XHJcbmNvbnN0IEdvb2dsZUJvdF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2NsYXNzZXMvR29vZ2xlQm90XCIpO1xyXG5jb25zdCBwYXNzd29yZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKTtcclxuY29uc3QgdHlwZVBhc3N3b3JkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlUGFzc3dvcmQnKTtcclxuY29uc3QgdHlwZUdvb2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZUdvb2dsZScpO1xyXG5jb25zdCB0eXBlRmFjZWJvb2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3R5cGVGYWNlYm9vaycpO1xyXG5jb25zdCBsb2dpbkFzQWRtaW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvZ2luQXNBZG1pbicpO1xyXG5jb25zdCByZXNldFBhc3N3b3JkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldFBhc3N3b3JkJyk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dpbi1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBsZXQgdXNlcjtcclxuICAgIGxldCBhdXRoID0gZmFsc2U7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIChsb2dpbkFzQWRtaW5FbGVtZW50LmNoZWNrZWQgJiYgdHlwZVBhc3N3b3JkRWxlbWVudC5jaGVja2VkKTpcclxuICAgICAgICAgICAgdXNlciA9IG5ldyBBZG1pbl8xLkFkbWluKCk7XHJcbiAgICAgICAgICAgIGF1dGggPSB1c2VyLmNoZWNrUGFzc3dvcmQocGFzc3dvcmRFbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgKGxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCAmJiAhdHlwZVBhc3N3b3JkRWxlbWVudC5jaGVja2VkKTpcclxuICAgICAgICAgICAgYWxlcnQoJ0FkbWlucyBjYW4gb25seSBzaWduIGluIHRocm91Z2ggUGFzc3dvcmQnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAoIWxvZ2luQXNBZG1pbkVsZW1lbnQuY2hlY2tlZCB8fCBwYXNzd29yZEVsZW1lbnQudmFsdWUgPT09IFwidXNlclwiKTpcclxuICAgICAgICAgICAgdXNlciA9IG5ldyBVc2VyXzEuVXNlcigpO1xyXG4gICAgICAgICAgICB1c2VyLnNldEdvb2dsZVRva2VuKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgICAgIHVzZXIuc2V0RmFjZWJvb2tUb2tlbignc2VjcmV0X3Rva2VuX2ZiJyk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlUGFzc3dvcmRFbGVtZW50LmNoZWNrZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IHVzZXIuY2hlY2tQYXNzd29yZChwYXNzd29yZEVsZW1lbnQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0eXBlRmFjZWJvb2tFbGVtZW50LmNoZWNrZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IHVzZXIuZ2V0RmFjZWJvb2tMb2dpbignc2VjcmV0X3Rva2VuX2ZiJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHR5cGVHb29nbGVFbGVtZW50LmNoZWNrZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aCA9IHVzZXIuY2hlY2tHb29nbGVMb2dpbignc2VjcmV0X3Rva2VuX2dvb2dsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICghbG9naW5Bc0FkbWluRWxlbWVudC5jaGVja2VkICYmIHR5cGVHb29nbGVFbGVtZW50LmNoZWNrZWQgJiYgcGFzc3dvcmRFbGVtZW50LnZhbHVlID09PSBcIlwiKTpcclxuICAgICAgICAgICAgdXNlciA9IG5ldyBHb29nbGVCb3RfMS5Hb29nbGVCb3QoKTtcclxuICAgICAgICAgICAgdXNlci5zZXRHb29nbGVUb2tlbignc2VjcmV0X3Rva2VuX2dvb2dsZScpO1xyXG4gICAgICAgICAgICBhdXRoID0gdXNlci5jaGVja0dvb2dsZUxvZ2luKCdzZWNyZXRfdG9rZW5fZ29vZ2xlJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGlmIChhdXRoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2xvZ2luIHN1Y2Nlc3MnKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdsb2dpbiBmYWlsZWQnKTtcclxuICAgIH1cclxufSk7XHJcbnJlc2V0UGFzc3dvcmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHVzZXIgPSBsb2dpbkFzQWRtaW5FbGVtZW50LmNoZWNrZWQgPyBuZXcgQWRtaW5fMS5BZG1pbigpIDogbmV3IFVzZXJfMS5Vc2VyKCk7XHJcbiAgICB1c2VyLnJlc2V0UGFzc3dvcmQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==