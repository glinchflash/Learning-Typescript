/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/models/classes/GasOven.ts":
/*!***************************************!*\
  !*** ./app/models/classes/GasOven.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GasOven = void 0;
class GasOven {
    constructor() {
        this._isOn = false;
    }
    turnOn() {
        this.lightGas();
    }
    turnOff() {
        this.extinguishGas();
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    }
    lightGas() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!"); //These tacos do hit harder then expected
        this._isOn = true;
    }
    extinguishGas() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //Maybe i'll grab a burrito next time
        this._isOn = false;
    }
}
exports.GasOven = GasOven;


/***/ }),

/***/ "./app/models/classes/Restaurant.ts":
/*!******************************************!*\
  !*** ./app/models/classes/Restaurant.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Restaurant = void 0;
class Restaurant {
    constructor(name, type) {
        this._name = name;
        this._type = type;
    }
    Cook(item) {
        this._type.turnOn();
        this._type.bake(item);
        this._type.turnOff();
    }
}
exports.Restaurant = Restaurant;


/***/ }),

/***/ "./app/models/classes/Stove.ts":
/*!*************************************!*\
  !*** ./app/models/classes/Stove.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stove = void 0;
class Stove {
    constructor() {
        this._isOn = false;
    }
    turnOn() {
        this.switchOnElectricity();
    }
    turnOff() {
        this.shutdownElectricity();
    }
    bake(item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("Electricity down, dammit!");
        }
    }
    switchOnElectricity() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Stove switched on!</p>";
        }, 1000);
        console.log("This pikachu is increasing my power level to over 9000!");
        this._isOn = true;
    }
    shutdownElectricity() {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Stove switched off!</p><hr>";
        }, 3000);
        console.log("The pikachu flew out of the running wheel!");
        this._isOn = false;
    }
}
exports.Stove = Stove;


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
const GasOven_1 = __webpack_require__(/*! ./models/classes/GasOven */ "./app/models/classes/GasOven.ts");
const Stove_1 = __webpack_require__(/*! ./models/classes/Stove */ "./app/models/classes/Stove.ts");
const Restaurant_1 = __webpack_require__(/*! ./models/classes/Restaurant */ "./app/models/classes/Restaurant.ts");
// old code
// let bakery = new Restaurant("Bakery");
// bakery.Cook("cookies");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
let bakery = new Restaurant_1.Restaurant("Bakery", new GasOven_1.GasOven());
bakery.Cook("cookies");
let crepery = new Restaurant_1.Restaurant("Crepery", new Stove_1.Stove());
crepery.Cook("crepes");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7QUMxQ0Y7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7O0FDZEw7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7OztVQzFDYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLGlFQUEwQjtBQUNwRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2REFBd0I7QUFDaEQscUJBQXFCLG1CQUFPLENBQUMsdUVBQTZCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvR2FzT3Zlbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvUmVzdGF1cmFudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvbW9kZWxzL2NsYXNzZXMvU3RvdmUudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2FwcC9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5HYXNPdmVuID0gdm9pZCAwO1xyXG5jbGFzcyBHYXNPdmVuIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHR1cm5PbigpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0R2FzKCk7XHJcbiAgICB9XHJcbiAgICB0dXJuT2ZmKCkge1xyXG4gICAgICAgIHRoaXMuZXh0aW5ndWlzaEdhcygpO1xyXG4gICAgfVxyXG4gICAgYmFrZShpdGVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT24pIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiBOb3cgYmFraW5nIFwiICsgaXRlbSArIFwiICE8L3A+XCI7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vdyBiYWtpbmcgXCIgKyBpdGVtICsgXCIhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFyZ2V0JykuaW5uZXJIVE1MICs9IFwiPHA+XCIgKyBuZXcgRGF0ZSgpLmdldEhvdXJzKCkgKyBcIjpcIiArIG5ldyBEYXRlKCkuZ2V0TWludXRlcygpICsgXCIgOiB0aGVyZSBpcyBubyBnYXMhPC9wPlwiO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGVyZSBpcyBubyBnYXMhXCIpOyAvL2luc2VydCBmYXJ0IGh1bW9yIGhlcmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsaWdodEdhcygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLmlubmVySFRNTCArPSBcIjxwPlwiICsgbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiIDogVEhFIEdBUyBJUyBPTiE8L3A+XCI7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUSEUgR0FTIElTIE9OIVwiKTsgLy9UaGVzZSB0YWNvcyBkbyBoaXQgaGFyZGVyIHRoZW4gZXhwZWN0ZWRcclxuICAgICAgICB0aGlzLl9pc09uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGV4dGluZ3Vpc2hHYXMoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IFRIRSBHQVMgSVMgT0ZGITwvcD48aHI+XCI7XHJcbiAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJUSEUgR0FTIElTIE9GRiFcIik7IC8vTWF5YmUgaSdsbCBncmFiIGEgYnVycml0byBuZXh0IHRpbWVcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYXNPdmVuID0gR2FzT3ZlbjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5SZXN0YXVyYW50ID0gdm9pZCAwO1xyXG5jbGFzcyBSZXN0YXVyYW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgIH1cclxuICAgIENvb2soaXRlbSkge1xyXG4gICAgICAgIHRoaXMuX3R5cGUudHVybk9uKCk7XHJcbiAgICAgICAgdGhpcy5fdHlwZS5iYWtlKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuX3R5cGUudHVybk9mZigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUmVzdGF1cmFudCA9IFJlc3RhdXJhbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuU3RvdmUgPSB2b2lkIDA7XHJcbmNsYXNzIFN0b3ZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHR1cm5PbigpIHtcclxuICAgICAgICB0aGlzLnN3aXRjaE9uRWxlY3RyaWNpdHkoKTtcclxuICAgIH1cclxuICAgIHR1cm5PZmYoKSB7XHJcbiAgICAgICAgdGhpcy5zaHV0ZG93bkVsZWN0cmljaXR5KCk7XHJcbiAgICB9XHJcbiAgICBiYWtlKGl0ZW0pIHtcclxuICAgICAgICBpZiAodGhpcy5faXNPbikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IE5vdyBiYWtpbmcgXCIgKyBpdGVtICsgXCIgITwvcD5cIjtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm93IGJha2luZyBcIiArIGl0ZW0gKyBcIiFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IHRoZXJlIGlzIG5vIGdhcyE8L3A+XCI7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsZWN0cmljaXR5IGRvd24sIGRhbW1pdCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoT25FbGVjdHJpY2l0eSgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhcmdldCcpLmlubmVySFRNTCArPSBcIjxwPlwiICsgbmV3IERhdGUoKS5nZXRIb3VycygpICsgXCI6XCIgKyBuZXcgRGF0ZSgpLmdldE1pbnV0ZXMoKSArIFwiIDogU3RvdmUgc3dpdGNoZWQgb24hPC9wPlwiO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBwaWthY2h1IGlzIGluY3JlYXNpbmcgbXkgcG93ZXIgbGV2ZWwgdG8gb3ZlciA5MDAwIVwiKTtcclxuICAgICAgICB0aGlzLl9pc09uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNodXRkb3duRWxlY3RyaWNpdHkoKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXJnZXQnKS5pbm5lckhUTUwgKz0gXCI8cD5cIiArIG5ldyBEYXRlKCkuZ2V0SG91cnMoKSArIFwiOlwiICsgbmV3IERhdGUoKS5nZXRNaW51dGVzKCkgKyBcIiA6IFN0b3ZlIHN3aXRjaGVkIG9mZiE8L3A+PGhyPlwiO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHBpa2FjaHUgZmxldyBvdXQgb2YgdGhlIHJ1bm5pbmcgd2hlZWwhXCIpO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlN0b3ZlID0gU3RvdmU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBHYXNPdmVuXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvY2xhc3Nlcy9HYXNPdmVuXCIpO1xyXG5jb25zdCBTdG92ZV8xID0gcmVxdWlyZShcIi4vbW9kZWxzL2NsYXNzZXMvU3RvdmVcIik7XHJcbmNvbnN0IFJlc3RhdXJhbnRfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9jbGFzc2VzL1Jlc3RhdXJhbnRcIik7XHJcbi8vIG9sZCBjb2RlXHJcbi8vIGxldCBiYWtlcnkgPSBuZXcgUmVzdGF1cmFudChcIkJha2VyeVwiKTtcclxuLy8gYmFrZXJ5LkNvb2soXCJjb29raWVzXCIpO1xyXG4vL05vdyBpZiB3ZSB3YW50IHRvIGFkZCBhIG5ldyByZXN0YXVyYW50IHdpdGggYW4gRUxFQ1RSSUMgY29va2VyLCB3ZSBhcmUgZ29ubmEgYmUgaW4gYSBob3QgbWVzcyAuLi5cclxubGV0IGJha2VyeSA9IG5ldyBSZXN0YXVyYW50XzEuUmVzdGF1cmFudChcIkJha2VyeVwiLCBuZXcgR2FzT3Zlbl8xLkdhc092ZW4oKSk7XHJcbmJha2VyeS5Db29rKFwiY29va2llc1wiKTtcclxubGV0IGNyZXBlcnkgPSBuZXcgUmVzdGF1cmFudF8xLlJlc3RhdXJhbnQoXCJDcmVwZXJ5XCIsIG5ldyBTdG92ZV8xLlN0b3ZlKCkpO1xyXG5jcmVwZXJ5LkNvb2soXCJjcmVwZXNcIik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==