/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/models/FixedDiscount.ts":
/*!*************************************!*\
  !*** ./app/models/FixedDiscount.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FixedDiscount = void 0;
class FixedDiscount {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        return Math.max(0, price - this._value);
    }
    showCalculation(price) {
        return price + "€ -  " + this._value + "€ (min 0 €)";
    }
}
exports.FixedDiscount = FixedDiscount;


/***/ }),

/***/ "./app/models/NoDiscount.ts":
/*!**********************************!*\
  !*** ./app/models/NoDiscount.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NoDiscount = void 0;
class NoDiscount {
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}
exports.NoDiscount = NoDiscount;


/***/ }),

/***/ "./app/models/VariableDiscount.ts":
/*!****************************************!*\
  !*** ./app/models/VariableDiscount.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VariableDiscount = void 0;
class VariableDiscount {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        let divide = 100;
        return (price - (price * this._value / divide));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
exports.VariableDiscount = VariableDiscount;


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
const FixedDiscount_1 = __webpack_require__(/*! ./models/FixedDiscount */ "./app/models/FixedDiscount.ts");
const VariableDiscount_1 = __webpack_require__(/*! ./models/VariableDiscount */ "./app/models/VariableDiscount.ts");
const NoDiscount_1 = __webpack_require__(/*! ./models/NoDiscount */ "./app/models/NoDiscount.ts");
class Product {
    constructor(name, price, discount) {
        this._name = name;
        this._price = price;
        this._discount = discount;
    }
    get name() {
        return this._name;
    }
    get discount() {
        return this._discount;
    }
    get originalPrice() {
        return this._price;
    }
    //The reason we call this function "calculateX" instead of using a getter on Price is because names communicate a lot of meaning between programmers.
    //most programmers would assume a getPrice() would be a simple display of a property that is already calculated, but in fact this function does a (more expensive) operation to calculate on the fly.
    calculatePrice() {
        return this._discount.apply(this._price);
    }
    showCalculation() {
        return this._discount.showCalculation(this._price);
    }
}
class shoppingBasket {
    constructor() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}
let cart = new shoppingBasket();
cart.addProduct(new Product('Chair', 25, new FixedDiscount_1.FixedDiscount(10)));
//cart.addProduct(new Product('Chair', 25, new Discount("fixed", -10)));
cart.addProduct(new Product('Table', 50, new VariableDiscount_1.VariableDiscount(25)));
cart.addProduct(new Product('Bed', 100, new NoDiscount_1.NoDiscount()));
const tableElement = document.querySelector('#cart tbody');
cart.products.forEach((product) => {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerText = product.name;
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.originalPrice.toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.calculatePrice().toFixed(2) + " €";
    tr.appendChild(td);
    td = document.createElement('td');
    td.innerText = product.showCalculation();
    tr.appendChild(td);
    tableElement.appendChild(tr);
});
// Old class
//
// class Discount {
//     private _type: discountType;
//     private _value: number;
//
//     constructor(type : discountType, value : number = 0) {
//         this._type = type;
//         this._value = value;
//
//         if(this._type != 'none' && value <= 0) {
//             throw new Error('You cannot create a '+ this._type + ' discount with a negative value');
//         }
//     }
//
//     apply(price : number) : number {
//         //@todo: instead of using magic values as string in this, it would be a lot better to change them into constant. This would protect us from misspellings. Can you improve this?
//         if(this._type === "none")  {
//             return price;
//         }
//         else if(this._type === "variable")  {
//             return (price - (price * this._value / 100));
//         } else if(this._type === "fixed") {
//             return Math.max(0, price - this._value);
//         }
//         else {
//             throw new Error('Invalid type of discount');
//         }
//     }
//
//     showCalculation(price : number) : string {
//         if(this._type === "none")  {
//             return "No discount";
//         }
//         else if(this._type === "variable")  {
//             return price + " € -  "+ this._value +"%";
//         } else if(this._type === "fixed") {
//             return price + "€ -  "+ this._value +"€ (min 0 €)";
//         }
//         else {
//             throw new Error('Invalid type of discount');
//         }
//     }
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7Ozs7Ozs7O0FDZFI7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7O0FDWEw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7Ozs7OztVQ2Z4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QixtQkFBTyxDQUFDLDZEQUF3QjtBQUN4RCwyQkFBMkIsbUJBQU8sQ0FBQyxtRUFBMkI7QUFDOUQscUJBQXFCLG1CQUFPLENBQUMsdURBQXFCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tb2RlbHMvRml4ZWREaXNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL05vRGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9WYXJpYWJsZURpc2NvdW50LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRml4ZWREaXNjb3VudCA9IHZvaWQgMDtcclxuY2xhc3MgRml4ZWREaXNjb3VudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBhcHBseShwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBwcmljZSAtIHRoaXMuX3ZhbHVlKTtcclxuICAgIH1cclxuICAgIHNob3dDYWxjdWxhdGlvbihwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBwcmljZSArIFwi4oKsIC0gIFwiICsgdGhpcy5fdmFsdWUgKyBcIuKCrCAobWluIDAg4oKsKVwiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRml4ZWREaXNjb3VudCA9IEZpeGVkRGlzY291bnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTm9EaXNjb3VudCA9IHZvaWQgMDtcclxuY2xhc3MgTm9EaXNjb3VudCB7XHJcbiAgICBhcHBseShwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBwcmljZTtcclxuICAgIH1cclxuICAgIHNob3dDYWxjdWxhdGlvbihwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBcIk5vIGRpc2NvdW50XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Ob0Rpc2NvdW50ID0gTm9EaXNjb3VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5WYXJpYWJsZURpc2NvdW50ID0gdm9pZCAwO1xyXG5jbGFzcyBWYXJpYWJsZURpc2NvdW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGFwcGx5KHByaWNlKSB7XHJcbiAgICAgICAgbGV0IGRpdmlkZSA9IDEwMDtcclxuICAgICAgICByZXR1cm4gKHByaWNlIC0gKHByaWNlICogdGhpcy5fdmFsdWUgLyBkaXZpZGUpKTtcclxuICAgIH1cclxuICAgIHNob3dDYWxjdWxhdGlvbihwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBwcmljZSArIFwiIOKCrCAtICBcIiArIHRoaXMuX3ZhbHVlICsgXCIlXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5WYXJpYWJsZURpc2NvdW50ID0gVmFyaWFibGVEaXNjb3VudDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IEZpeGVkRGlzY291bnRfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9GaXhlZERpc2NvdW50XCIpO1xyXG5jb25zdCBWYXJpYWJsZURpc2NvdW50XzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvVmFyaWFibGVEaXNjb3VudFwiKTtcclxuY29uc3QgTm9EaXNjb3VudF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL05vRGlzY291bnRcIik7XHJcbmNsYXNzIFByb2R1Y3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRpc2NvdW50KSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcHJpY2UgPSBwcmljZTtcclxuICAgICAgICB0aGlzLl9kaXNjb3VudCA9IGRpc2NvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBnZXQgZGlzY291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2NvdW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IG9yaWdpbmFsUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaWNlO1xyXG4gICAgfVxyXG4gICAgLy9UaGUgcmVhc29uIHdlIGNhbGwgdGhpcyBmdW5jdGlvbiBcImNhbGN1bGF0ZVhcIiBpbnN0ZWFkIG9mIHVzaW5nIGEgZ2V0dGVyIG9uIFByaWNlIGlzIGJlY2F1c2UgbmFtZXMgY29tbXVuaWNhdGUgYSBsb3Qgb2YgbWVhbmluZyBiZXR3ZWVuIHByb2dyYW1tZXJzLlxyXG4gICAgLy9tb3N0IHByb2dyYW1tZXJzIHdvdWxkIGFzc3VtZSBhIGdldFByaWNlKCkgd291bGQgYmUgYSBzaW1wbGUgZGlzcGxheSBvZiBhIHByb3BlcnR5IHRoYXQgaXMgYWxyZWFkeSBjYWxjdWxhdGVkLCBidXQgaW4gZmFjdCB0aGlzIGZ1bmN0aW9uIGRvZXMgYSAobW9yZSBleHBlbnNpdmUpIG9wZXJhdGlvbiB0byBjYWxjdWxhdGUgb24gdGhlIGZseS5cclxuICAgIGNhbGN1bGF0ZVByaWNlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNjb3VudC5hcHBseSh0aGlzLl9wcmljZSk7XHJcbiAgICB9XHJcbiAgICBzaG93Q2FsY3VsYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2NvdW50LnNob3dDYWxjdWxhdGlvbih0aGlzLl9wcmljZSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3Mgc2hvcHBpbmdCYXNrZXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy90aGlzIGFycmF5IG9ubHkgYWNjZXB0cyBQcm9kdWN0IG9iamVjdHMsIG5vdGhpbmcgZWxzZVxyXG4gICAgICAgIHRoaXMuX3Byb2R1Y3RzID0gW107XHJcbiAgICB9XHJcbiAgICBnZXQgcHJvZHVjdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzO1xyXG4gICAgfVxyXG4gICAgYWRkUHJvZHVjdChwcm9kdWN0KSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZHVjdHMucHVzaChwcm9kdWN0KTtcclxuICAgIH1cclxufVxyXG5sZXQgY2FydCA9IG5ldyBzaG9wcGluZ0Jhc2tldCgpO1xyXG5jYXJ0LmFkZFByb2R1Y3QobmV3IFByb2R1Y3QoJ0NoYWlyJywgMjUsIG5ldyBGaXhlZERpc2NvdW50XzEuRml4ZWREaXNjb3VudCgxMCkpKTtcclxuLy9jYXJ0LmFkZFByb2R1Y3QobmV3IFByb2R1Y3QoJ0NoYWlyJywgMjUsIG5ldyBEaXNjb3VudChcImZpeGVkXCIsIC0xMCkpKTtcclxuY2FydC5hZGRQcm9kdWN0KG5ldyBQcm9kdWN0KCdUYWJsZScsIDUwLCBuZXcgVmFyaWFibGVEaXNjb3VudF8xLlZhcmlhYmxlRGlzY291bnQoMjUpKSk7XHJcbmNhcnQuYWRkUHJvZHVjdChuZXcgUHJvZHVjdCgnQmVkJywgMTAwLCBuZXcgTm9EaXNjb3VudF8xLk5vRGlzY291bnQoKSkpO1xyXG5jb25zdCB0YWJsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FydCB0Ym9keScpO1xyXG5jYXJ0LnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICBsZXQgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgdGQuaW5uZXJUZXh0ID0gcHJvZHVjdC5uYW1lO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgdGQuaW5uZXJUZXh0ID0gcHJvZHVjdC5vcmlnaW5hbFByaWNlLnRvRml4ZWQoMikgKyBcIiDigqxcIjtcclxuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIHRkLmlubmVyVGV4dCA9IHByb2R1Y3QuY2FsY3VsYXRlUHJpY2UoKS50b0ZpeGVkKDIpICsgXCIg4oKsXCI7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICB0ZC5pbm5lclRleHQgPSBwcm9kdWN0LnNob3dDYWxjdWxhdGlvbigpO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgdGFibGVFbGVtZW50LmFwcGVuZENoaWxkKHRyKTtcclxufSk7XHJcbi8vIE9sZCBjbGFzc1xyXG4vL1xyXG4vLyBjbGFzcyBEaXNjb3VudCB7XHJcbi8vICAgICBwcml2YXRlIF90eXBlOiBkaXNjb3VudFR5cGU7XHJcbi8vICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xyXG4vL1xyXG4vLyAgICAgY29uc3RydWN0b3IodHlwZSA6IGRpc2NvdW50VHlwZSwgdmFsdWUgOiBudW1iZXIgPSAwKSB7XHJcbi8vICAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbi8vICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuLy9cclxuLy8gICAgICAgICBpZih0aGlzLl90eXBlICE9ICdub25lJyAmJiB2YWx1ZSA8PSAwKSB7XHJcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBjcmVhdGUgYSAnKyB0aGlzLl90eXBlICsgJyBkaXNjb3VudCB3aXRoIGEgbmVnYXRpdmUgdmFsdWUnKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBhcHBseShwcmljZSA6IG51bWJlcikgOiBudW1iZXIge1xyXG4vLyAgICAgICAgIC8vQHRvZG86IGluc3RlYWQgb2YgdXNpbmcgbWFnaWMgdmFsdWVzIGFzIHN0cmluZyBpbiB0aGlzLCBpdCB3b3VsZCBiZSBhIGxvdCBiZXR0ZXIgdG8gY2hhbmdlIHRoZW0gaW50byBjb25zdGFudC4gVGhpcyB3b3VsZCBwcm90ZWN0IHVzIGZyb20gbWlzc3BlbGxpbmdzLiBDYW4geW91IGltcHJvdmUgdGhpcz9cclxuLy8gICAgICAgICBpZih0aGlzLl90eXBlID09PSBcIm5vbmVcIikgIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHByaWNlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIGlmKHRoaXMuX3R5cGUgPT09IFwidmFyaWFibGVcIikgIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIChwcmljZSAtIChwcmljZSAqIHRoaXMuX3ZhbHVlIC8gMTAwKSk7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3R5cGUgPT09IFwiZml4ZWRcIikge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgcHJpY2UgLSB0aGlzLl92YWx1ZSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdHlwZSBvZiBkaXNjb3VudCcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIHNob3dDYWxjdWxhdGlvbihwcmljZSA6IG51bWJlcikgOiBzdHJpbmcge1xyXG4vLyAgICAgICAgIGlmKHRoaXMuX3R5cGUgPT09IFwibm9uZVwiKSAge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gXCJObyBkaXNjb3VudFwiO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBlbHNlIGlmKHRoaXMuX3R5cGUgPT09IFwidmFyaWFibGVcIikgIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHByaWNlICsgXCIg4oKsIC0gIFwiKyB0aGlzLl92YWx1ZSArXCIlXCI7XHJcbi8vICAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3R5cGUgPT09IFwiZml4ZWRcIikge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJpY2UgKyBcIuKCrCAtICBcIisgdGhpcy5fdmFsdWUgK1wi4oKsIChtaW4gMCDigqwpXCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdHlwZSBvZiBkaXNjb3VudCcpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=