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
        let divide = 100;
        return (price - (price * this._value / divide));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7Ozs7Ozs7Ozs7QUNmUjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7Ozs7QUNYTDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCOzs7Ozs7O1VDZnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCLG1CQUFPLENBQUMsNkRBQXdCO0FBQ3hELDJCQUEyQixtQkFBTyxDQUFDLG1FQUEyQjtBQUM5RCxxQkFBcUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9GaXhlZERpc2NvdW50LnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvTm9EaXNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL1ZhcmlhYmxlRGlzY291bnQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2FwcC9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5GaXhlZERpc2NvdW50ID0gdm9pZCAwO1xyXG5jbGFzcyBGaXhlZERpc2NvdW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGFwcGx5KHByaWNlKSB7XHJcbiAgICAgICAgbGV0IGRpdmlkZSA9IDEwMDtcclxuICAgICAgICByZXR1cm4gKHByaWNlIC0gKHByaWNlICogdGhpcy5fdmFsdWUgLyBkaXZpZGUpKTtcclxuICAgIH1cclxuICAgIHNob3dDYWxjdWxhdGlvbihwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBwcmljZSArIFwiIOKCrCAtICBcIiArIHRoaXMuX3ZhbHVlICsgXCIlXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5GaXhlZERpc2NvdW50ID0gRml4ZWREaXNjb3VudDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Ob0Rpc2NvdW50ID0gdm9pZCAwO1xyXG5jbGFzcyBOb0Rpc2NvdW50IHtcclxuICAgIGFwcGx5KHByaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByaWNlO1xyXG4gICAgfVxyXG4gICAgc2hvd0NhbGN1bGF0aW9uKHByaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTm8gZGlzY291bnRcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLk5vRGlzY291bnQgPSBOb0Rpc2NvdW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlZhcmlhYmxlRGlzY291bnQgPSB2b2lkIDA7XHJcbmNsYXNzIFZhcmlhYmxlRGlzY291bnQge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgYXBwbHkocHJpY2UpIHtcclxuICAgICAgICBsZXQgZGl2aWRlID0gMTAwO1xyXG4gICAgICAgIHJldHVybiAocHJpY2UgLSAocHJpY2UgKiB0aGlzLl92YWx1ZSAvIGRpdmlkZSkpO1xyXG4gICAgfVxyXG4gICAgc2hvd0NhbGN1bGF0aW9uKHByaWNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByaWNlICsgXCIg4oKsIC0gIFwiICsgdGhpcy5fdmFsdWUgKyBcIiVcIjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlZhcmlhYmxlRGlzY291bnQgPSBWYXJpYWJsZURpc2NvdW50O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgRml4ZWREaXNjb3VudF8xID0gcmVxdWlyZShcIi4vbW9kZWxzL0ZpeGVkRGlzY291bnRcIik7XHJcbmNvbnN0IFZhcmlhYmxlRGlzY291bnRfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9WYXJpYWJsZURpc2NvdW50XCIpO1xyXG5jb25zdCBOb0Rpc2NvdW50XzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvTm9EaXNjb3VudFwiKTtcclxuY2xhc3MgUHJvZHVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGlzY291bnQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMuX2Rpc2NvdW50ID0gZGlzY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIGdldCBkaXNjb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzY291bnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgb3JpZ2luYWxQcmljZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJpY2U7XHJcbiAgICB9XHJcbiAgICAvL1RoZSByZWFzb24gd2UgY2FsbCB0aGlzIGZ1bmN0aW9uIFwiY2FsY3VsYXRlWFwiIGluc3RlYWQgb2YgdXNpbmcgYSBnZXR0ZXIgb24gUHJpY2UgaXMgYmVjYXVzZSBuYW1lcyBjb21tdW5pY2F0ZSBhIGxvdCBvZiBtZWFuaW5nIGJldHdlZW4gcHJvZ3JhbW1lcnMuXHJcbiAgICAvL21vc3QgcHJvZ3JhbW1lcnMgd291bGQgYXNzdW1lIGEgZ2V0UHJpY2UoKSB3b3VsZCBiZSBhIHNpbXBsZSBkaXNwbGF5IG9mIGEgcHJvcGVydHkgdGhhdCBpcyBhbHJlYWR5IGNhbGN1bGF0ZWQsIGJ1dCBpbiBmYWN0IHRoaXMgZnVuY3Rpb24gZG9lcyBhIChtb3JlIGV4cGVuc2l2ZSkgb3BlcmF0aW9uIHRvIGNhbGN1bGF0ZSBvbiB0aGUgZmx5LlxyXG4gICAgY2FsY3VsYXRlUHJpY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2NvdW50LmFwcGx5KHRoaXMuX3ByaWNlKTtcclxuICAgIH1cclxuICAgIHNob3dDYWxjdWxhdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlzY291bnQuc2hvd0NhbGN1bGF0aW9uKHRoaXMuX3ByaWNlKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBzaG9wcGluZ0Jhc2tldCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvL3RoaXMgYXJyYXkgb25seSBhY2NlcHRzIFByb2R1Y3Qgb2JqZWN0cywgbm90aGluZyBlbHNlXHJcbiAgICAgICAgdGhpcy5fcHJvZHVjdHMgPSBbXTtcclxuICAgIH1cclxuICAgIGdldCBwcm9kdWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdHM7XHJcbiAgICB9XHJcbiAgICBhZGRQcm9kdWN0KHByb2R1Y3QpIHtcclxuICAgICAgICB0aGlzLl9wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xyXG4gICAgfVxyXG59XHJcbmxldCBjYXJ0ID0gbmV3IHNob3BwaW5nQmFza2V0KCk7XHJcbmNhcnQuYWRkUHJvZHVjdChuZXcgUHJvZHVjdCgnQ2hhaXInLCAyNSwgbmV3IEZpeGVkRGlzY291bnRfMS5GaXhlZERpc2NvdW50KDEwKSkpO1xyXG4vL2NhcnQuYWRkUHJvZHVjdChuZXcgUHJvZHVjdCgnQ2hhaXInLCAyNSwgbmV3IERpc2NvdW50KFwiZml4ZWRcIiwgLTEwKSkpO1xyXG5jYXJ0LmFkZFByb2R1Y3QobmV3IFByb2R1Y3QoJ1RhYmxlJywgNTAsIG5ldyBWYXJpYWJsZURpc2NvdW50XzEuVmFyaWFibGVEaXNjb3VudCgyNSkpKTtcclxuY2FydC5hZGRQcm9kdWN0KG5ldyBQcm9kdWN0KCdCZWQnLCAxMDAsIG5ldyBOb0Rpc2NvdW50XzEuTm9EaXNjb3VudCgpKSk7XHJcbmNvbnN0IHRhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJ0IHRib2R5Jyk7XHJcbmNhcnQucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICB0ZC5pbm5lclRleHQgPSBwcm9kdWN0Lm5hbWU7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICB0ZC5pbm5lclRleHQgPSBwcm9kdWN0Lm9yaWdpbmFsUHJpY2UudG9GaXhlZCgyKSArIFwiIOKCrFwiO1xyXG4gICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgdGQuaW5uZXJUZXh0ID0gcHJvZHVjdC5jYWxjdWxhdGVQcmljZSgpLnRvRml4ZWQoMikgKyBcIiDigqxcIjtcclxuICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgIHRkLmlubmVyVGV4dCA9IHByb2R1Y3Quc2hvd0NhbGN1bGF0aW9uKCk7XHJcbiAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICB0YWJsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodHIpO1xyXG59KTtcclxuLy8gT2xkIGNsYXNzXHJcbi8vXHJcbi8vIGNsYXNzIERpc2NvdW50IHtcclxuLy8gICAgIHByaXZhdGUgX3R5cGU6IGRpc2NvdW50VHlwZTtcclxuLy8gICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXI7XHJcbi8vXHJcbi8vICAgICBjb25zdHJ1Y3Rvcih0eXBlIDogZGlzY291bnRUeXBlLCB2YWx1ZSA6IG51bWJlciA9IDApIHtcclxuLy8gICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuLy8gICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4vL1xyXG4vLyAgICAgICAgIGlmKHRoaXMuX3R5cGUgIT0gJ25vbmUnICYmIHZhbHVlIDw9IDApIHtcclxuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGNyZWF0ZSBhICcrIHRoaXMuX3R5cGUgKyAnIGRpc2NvdW50IHdpdGggYSBuZWdhdGl2ZSB2YWx1ZScpO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy9cclxuLy8gICAgIGFwcGx5KHByaWNlIDogbnVtYmVyKSA6IG51bWJlciB7XHJcbi8vICAgICAgICAgLy9AdG9kbzogaW5zdGVhZCBvZiB1c2luZyBtYWdpYyB2YWx1ZXMgYXMgc3RyaW5nIGluIHRoaXMsIGl0IHdvdWxkIGJlIGEgbG90IGJldHRlciB0byBjaGFuZ2UgdGhlbSBpbnRvIGNvbnN0YW50LiBUaGlzIHdvdWxkIHByb3RlY3QgdXMgZnJvbSBtaXNzcGVsbGluZ3MuIENhbiB5b3UgaW1wcm92ZSB0aGlzP1xyXG4vLyAgICAgICAgIGlmKHRoaXMuX3R5cGUgPT09IFwibm9uZVwiKSAge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJpY2U7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2UgaWYodGhpcy5fdHlwZSA9PT0gXCJ2YXJpYWJsZVwiKSAge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gKHByaWNlIC0gKHByaWNlICogdGhpcy5fdmFsdWUgLyAxMDApKTtcclxuLy8gICAgICAgICB9IGVsc2UgaWYodGhpcy5fdHlwZSA9PT0gXCJmaXhlZFwiKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBwcmljZSAtIHRoaXMuX3ZhbHVlKTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlIG9mIGRpc2NvdW50Jyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vL1xyXG4vLyAgICAgc2hvd0NhbGN1bGF0aW9uKHByaWNlIDogbnVtYmVyKSA6IHN0cmluZyB7XHJcbi8vICAgICAgICAgaWYodGhpcy5fdHlwZSA9PT0gXCJub25lXCIpICB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBcIk5vIGRpc2NvdW50XCI7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2UgaWYodGhpcy5fdHlwZSA9PT0gXCJ2YXJpYWJsZVwiKSAge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gcHJpY2UgKyBcIiDigqwgLSAgXCIrIHRoaXMuX3ZhbHVlICtcIiVcIjtcclxuLy8gICAgICAgICB9IGVsc2UgaWYodGhpcy5fdHlwZSA9PT0gXCJmaXhlZFwiKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBwcmljZSArIFwi4oKsIC0gIFwiKyB0aGlzLl92YWx1ZSArXCLigqwgKG1pbiAwIOKCrClcIjtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlIG9mIGRpc2NvdW50Jyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==