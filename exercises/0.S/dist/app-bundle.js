/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/models/Car.ts":
/*!***************************!*\
  !*** ./app/models/Car.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
const Engine_1 = __webpack_require__(/*! ./Engine */ "./app/models/Engine.ts");
const Radio_1 = __webpack_require__(/*! ./Radio */ "./app/models/Radio.ts");
class Car {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._engine = new Engine_1.Engine(MAXIMUM_FUEL_CAPACITY);
        this._radio = new Radio_1.Radio();
    }
    get engine() {
        return this._engine;
    }
    get radio() {
        return this._radio;
    }
    drive() {
        if (!this._engine.Status || this._engine.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._engine.consumeFuel();
        this._engine.addMileage();
    }
}
exports.Car = Car;


/***/ }),

/***/ "./app/models/Engine.ts":
/*!******************************!*\
  !*** ./app/models/Engine.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = void 0;
class Engine {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._miles = 0;
        this._Status = false;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get miles() {
        return this._miles;
    }
    get fuel() {
        return this._fuel;
    }
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get Status() {
        return this._Status;
    }
    turnEngineOn() {
        this._Status = true;
    }
    turnEngineOff() {
        this._Status = false;
    }
    consumeFuel() {
        this._fuel -= 1;
    }
    addMileage() {
        this._miles += this.FUEL_MILEAGE;
    }
}
exports.Engine = Engine;


/***/ }),

/***/ "./app/models/Radio.ts":
/*!*****************************!*\
  !*** ./app/models/Radio.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Radio = void 0;
class Radio {
    constructor() {
        this._musicLevel = 0;
        this._oldMusicLevel = 50;
    }
    //Take attention to these getters and setters
    get musicLevel() {
        return this._musicLevel;
    }
    set musicLevel(value) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }
    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }
    turnMusicOff() {
        this._musicLevel = 0;
    }
}
exports.Radio = Radio;


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
const Car_1 = __webpack_require__(/*! ./models/Car */ "./app/models/Car.ts");
// When you see <cast>variable this is a "cast" of a variable, explicitly telling the code what the type of this variable will be.
// This is sometimes needed when a default JS function does not return a precise enough Type.
// I need to cast this to HtmlElement because the default Element return type is not specific to the HTML context (because some versions of JS can also be used in the backend, see node.js)
// This makes it not having some properties like .innerText. Test it out yourself by removing the <HTMLElement>
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = document.querySelector('#add-fuel-input');
const fuelLevelElement = document.querySelector('#fuel-level');
const milesElement = document.querySelector('#miles-value');
const audioElement = document.querySelector('#car-music');
let car = new Car_1.Car(100);
musicToggleElement.addEventListener('click', () => {
    if (car.radio.musicLevel === 0) {
        car.radio.turnMusicOn();
        musicSliderElement.value = car.radio.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.radio.turnMusicOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    car.radio.musicLevel = target.value;
    audioElement.volume = car.radio.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.radio.musicLevel ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', () => {
    if (car.engine.Status) {
        car.engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnEngineOn();
});
addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    car.engine.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.engine.fuel.toString();
});
setInterval(() => {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.engine.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.engine.fuel.toString();
    if (car.radio.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLHdDQUFVO0FBQ25DLGdCQUFnQixtQkFBTyxDQUFDLHNDQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7Ozs7Ozs7Ozs7QUMzQkU7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDdkNEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7Ozs7OztVQ3ZCYjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGNBQWMsbUJBQU8sQ0FBQyx5Q0FBYztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tb2RlbHMvQ2FyLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvRW5naW5lLnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvUmFkaW8udHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2FwcC9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5DYXIgPSB2b2lkIDA7XHJcbmNvbnN0IEVuZ2luZV8xID0gcmVxdWlyZShcIi4vRW5naW5lXCIpO1xyXG5jb25zdCBSYWRpb18xID0gcmVxdWlyZShcIi4vUmFkaW9cIik7XHJcbmNsYXNzIENhciB7XHJcbiAgICBjb25zdHJ1Y3RvcihNQVhJTVVNX0ZVRUxfQ0FQQUNJVFkpIHtcclxuICAgICAgICB0aGlzLl9lbmdpbmUgPSBuZXcgRW5naW5lXzEuRW5naW5lKE1BWElNVU1fRlVFTF9DQVBBQ0lUWSk7XHJcbiAgICAgICAgdGhpcy5fcmFkaW8gPSBuZXcgUmFkaW9fMS5SYWRpbygpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGVuZ2luZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZW5naW5lO1xyXG4gICAgfVxyXG4gICAgZ2V0IHJhZGlvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYWRpbztcclxuICAgIH1cclxuICAgIGRyaXZlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZW5naW5lLlN0YXR1cyB8fCB0aGlzLl9lbmdpbmUuZnVlbCA8PSAwKSB7XHJcbiAgICAgICAgICAgIC8vd2hhdCBJIGFtIGRvaW5nIGhlcmUgaXMgYSBnb29kIHByaW5jaXBsZSBjYWxsZWQgXCJmYWlsaW5nIGVhcmx5XCJcclxuICAgICAgICAgICAgLy8gSWYgeW91IGhhdmUgc29tZSBjb25kaXRpb25zIHlvdSBuZWVkIHRvIGNoZWNrLCB0aGF0IHdpbGwgZXhjbHVkZSBtb3N0IG9mIHRoZSBjb2RlIGluIHlvdXIgZnVuY3Rpb24gY2hlY2sgdGhhdCBmaXJzdFxyXG4gICAgICAgICAgICAvLyBUaGlzIHByZXZlbnRzIHlvdXIgXCJoYXBweSBwYXRoXCIgb2YgY29kZSB0byBiZSBkZWVwbHkgaW5kZW50ZWQuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5naW5lLmNvbnN1bWVGdWVsKCk7XHJcbiAgICAgICAgdGhpcy5fZW5naW5lLmFkZE1pbGVhZ2UoKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhciA9IENhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FbmdpbmUgPSB2b2lkIDA7XHJcbmNsYXNzIEVuZ2luZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihNQVhJTVVNX0ZVRUxfQ0FQQUNJVFkpIHtcclxuICAgICAgICB0aGlzLl9mdWVsID0gMDtcclxuICAgICAgICB0aGlzLl9taWxlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5GVUVMX01JTEVBR0UgPSAxMDtcclxuICAgICAgICB0aGlzLk1BWElNVU1fRlVFTF9DQVBBQ0lUWSA9IE1BWElNVU1fRlVFTF9DQVBBQ0lUWTtcclxuICAgIH1cclxuICAgIGdldCBtaWxlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWlsZXM7XHJcbiAgICB9XHJcbiAgICBnZXQgZnVlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZnVlbDtcclxuICAgIH1cclxuICAgIC8vV2hlbiBhIHZhbHVlIGNhbiBvbmx5IGdvIG9uZSB3YXkgKHlvdSBhZGQgZnVlbCwgY29uc3VtaW5nIGZ1ZWwgaXMgaGFuZGxlZCBieSB0aGUgY2FyIGl0c2VsZilcclxuICAgIC8vIGl0IGlzIGJldHRlciB0byBwcm92aWRlIGEgc3BlY2lmaWMgbWV0aG9kIGZvciB0aGlzIGluc3RlYWQgb2YgYSBnZW5lcmljIHNldHRlci5cclxuICAgIC8vIHdpdGggYSBzZXR0ZXIgdGhlcmUgaXMgYWx3YXlzIHRoZSBjaGFuY2Ugb2Ygc29tZWJvZHkgbG93ZXJpbmcgdGhlIGZ1ZWwgYW1vdW50IGJ5IGFjY2lkZW50LlxyXG4gICAgYWRkRnVlbChmdWVsKSB7XHJcbiAgICAgICAgdGhpcy5fZnVlbCA9IE1hdGgubWluKGZ1ZWwgKyB0aGlzLl9mdWVsLCB0aGlzLk1BWElNVU1fRlVFTF9DQVBBQ0lUWSk7XHJcbiAgICB9XHJcbiAgICBnZXQgU3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGF0dXM7XHJcbiAgICB9XHJcbiAgICB0dXJuRW5naW5lT24oKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhdHVzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHR1cm5FbmdpbmVPZmYoKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhdHVzID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdW1lRnVlbCgpIHtcclxuICAgICAgICB0aGlzLl9mdWVsIC09IDE7XHJcbiAgICB9XHJcbiAgICBhZGRNaWxlYWdlKCkge1xyXG4gICAgICAgIHRoaXMuX21pbGVzICs9IHRoaXMuRlVFTF9NSUxFQUdFO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuRW5naW5lID0gRW5naW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJhZGlvID0gdm9pZCAwO1xyXG5jbGFzcyBSYWRpbyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9tdXNpY0xldmVsID0gMDtcclxuICAgICAgICB0aGlzLl9vbGRNdXNpY0xldmVsID0gNTA7XHJcbiAgICB9XHJcbiAgICAvL1Rha2UgYXR0ZW50aW9uIHRvIHRoZXNlIGdldHRlcnMgYW5kIHNldHRlcnNcclxuICAgIGdldCBtdXNpY0xldmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY0xldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IG11c2ljTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9tdXNpY0xldmVsID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fb2xkTXVzaWNMZXZlbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdHVybk11c2ljT24oKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNMZXZlbCA9IHRoaXMuX29sZE11c2ljTGV2ZWw7XHJcbiAgICB9XHJcbiAgICB0dXJuTXVzaWNPZmYoKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNMZXZlbCA9IDA7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5SYWRpbyA9IFJhZGlvO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgQ2FyXzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvQ2FyXCIpO1xyXG4vLyBXaGVuIHlvdSBzZWUgPGNhc3Q+dmFyaWFibGUgdGhpcyBpcyBhIFwiY2FzdFwiIG9mIGEgdmFyaWFibGUsIGV4cGxpY2l0bHkgdGVsbGluZyB0aGUgY29kZSB3aGF0IHRoZSB0eXBlIG9mIHRoaXMgdmFyaWFibGUgd2lsbCBiZS5cclxuLy8gVGhpcyBpcyBzb21ldGltZXMgbmVlZGVkIHdoZW4gYSBkZWZhdWx0IEpTIGZ1bmN0aW9uIGRvZXMgbm90IHJldHVybiBhIHByZWNpc2UgZW5vdWdoIFR5cGUuXHJcbi8vIEkgbmVlZCB0byBjYXN0IHRoaXMgdG8gSHRtbEVsZW1lbnQgYmVjYXVzZSB0aGUgZGVmYXVsdCBFbGVtZW50IHJldHVybiB0eXBlIGlzIG5vdCBzcGVjaWZpYyB0byB0aGUgSFRNTCBjb250ZXh0IChiZWNhdXNlIHNvbWUgdmVyc2lvbnMgb2YgSlMgY2FuIGFsc28gYmUgdXNlZCBpbiB0aGUgYmFja2VuZCwgc2VlIG5vZGUuanMpXHJcbi8vIFRoaXMgbWFrZXMgaXQgbm90IGhhdmluZyBzb21lIHByb3BlcnRpZXMgbGlrZSAuaW5uZXJUZXh0LiBUZXN0IGl0IG91dCB5b3Vyc2VsZiBieSByZW1vdmluZyB0aGUgPEhUTUxFbGVtZW50PlxyXG5jb25zdCBtdXNpY1RvZ2dsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXVzaWMtdG9nZ2xlJyk7XHJcbmNvbnN0IG11c2ljU2xpZGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdXNpYy1zbGlkZXInKTtcclxuY29uc3QgZW5naW5lVG9nZ2xlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmdpbmUtdG9nZ2xlJyk7XHJcbmNvbnN0IGFkZEZ1ZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1mdWVsLWZvcm0nKTtcclxuY29uc3QgYWRkRnVlbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1mdWVsLWlucHV0Jyk7XHJcbmNvbnN0IGZ1ZWxMZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVlbC1sZXZlbCcpO1xyXG5jb25zdCBtaWxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWlsZXMtdmFsdWUnKTtcclxuY29uc3QgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nhci1tdXNpYycpO1xyXG5sZXQgY2FyID0gbmV3IENhcl8xLkNhcigxMDApO1xyXG5tdXNpY1RvZ2dsZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAoY2FyLnJhZGlvLm11c2ljTGV2ZWwgPT09IDApIHtcclxuICAgICAgICBjYXIucmFkaW8udHVybk11c2ljT24oKTtcclxuICAgICAgICBtdXNpY1NsaWRlckVsZW1lbnQudmFsdWUgPSBjYXIucmFkaW8ubXVzaWNMZXZlbC50b1N0cmluZygpO1xyXG4gICAgICAgIG11c2ljVG9nZ2xlRWxlbWVudC5pbm5lclRleHQgPSAnVHVybiBtdXNpYyBvZmYnO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIG11c2ljVG9nZ2xlRWxlbWVudC5pbm5lclRleHQgPSAnVHVybiBtdXNpYyBvbic7XHJcbiAgICBjYXIucmFkaW8udHVybk11c2ljT2ZmKCk7XHJcbn0pO1xyXG4vL0kgdXNlIGlucHV0IGluc3RlYWQgb2YgY2hhbmdlLCBiZWNhdXNlIHRoZW4gdGhlIHZhbHVlIGNoYW5nZXMgd2hlbiBJIG1vdmUgdGhlIG1vdXNlLCBub3Qgb25seSBvbiByZWxlYXNlXHJcbm11c2ljU2xpZGVyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xyXG4gICAgbGV0IHRhcmdldCA9IChldmVudC50YXJnZXQpO1xyXG4gICAgY2FyLnJhZGlvLm11c2ljTGV2ZWwgPSB0YXJnZXQudmFsdWU7XHJcbiAgICBhdWRpb0VsZW1lbnQudm9sdW1lID0gY2FyLnJhZGlvLm11c2ljTGV2ZWwgLyAxMDA7XHJcbiAgICAvL0B0b2RvIHdoZW4geW91IGFyZSByZXBlYXRpbmcgdGhlIHNhbWUgdGV4dCBvdmVyIGFuZCBvdmVyIGFnYWluIG1heWJlIHdlIHNob3VsZCBoYXZlIG1hZGUgc29tZSBjb25zdGFudHMgZm9yIGl0PyBDYW4geW91IGRvIGltcHJvdmUgb24gdGhpcz9cclxuICAgIG11c2ljVG9nZ2xlRWxlbWVudC5pbm5lclRleHQgPSBjYXIucmFkaW8ubXVzaWNMZXZlbCA/ICdUdXJuIG11c2ljIG9mZicgOiAnVHVybiBtdXNpYyBvbic7XHJcbn0pO1xyXG5lbmdpbmVUb2dnbGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGNhci5lbmdpbmUuU3RhdHVzKSB7XHJcbiAgICAgICAgY2FyLmVuZ2luZS50dXJuRW5naW5lT2ZmKCk7XHJcbiAgICAgICAgZW5naW5lVG9nZ2xlRWxlbWVudC5pbm5lclRleHQgPSAnVHVybiBlbmdpbmUgb24nO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVuZ2luZVRvZ2dsZUVsZW1lbnQuaW5uZXJUZXh0ID0gJ1R1cm4gZW5naW5lIG9mZic7XHJcbiAgICBjYXIuZW5naW5lLnR1cm5FbmdpbmVPbigpO1xyXG59KTtcclxuYWRkRnVlbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY2FyLmVuZ2luZS5hZGRGdWVsKE51bWJlcihhZGRGdWVsSW5wdXQudmFsdWUpKTtcclxuICAgIGZ1ZWxMZXZlbEVsZW1lbnQuaW5uZXJUZXh0ID0gY2FyLmVuZ2luZS5mdWVsLnRvU3RyaW5nKCk7XHJcbn0pO1xyXG5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBjYXIuZHJpdmUoKTtcclxuICAgIC8vd2hpbGUgaXQgbG9va3MgbGlrZSBib3RoIGxpbmVzIGJlbG93IGFyZSB0aGUgc2FtZSB0aGVyZSBpcyBhIHN1YnRsZSBkaWZmZXJlbmNlICh5b3UgY291bGQgcHV0IGJyZWFrcG9pbnRzIGhlcmUgdG8gc2VlIHRoZSBkaWZmZXJlbmNlKTpcclxuICAgIC8vIHRoaXMgPGNhc3Q+IHdpbGwgb25seSB0ZWxsIFR5cGVTY3JpcHQgdGhhdCB0aGUgdmFsdWUgaXMgYSBzdHJpbmcsIGJ1dCB0aGUgYWN0dWFsIHZhcmlhYmxlIGluIEpTIGlzIG5vdCBjaGFuZ2VkIGluIGFueSB3YXk6IGl0IGlzIGluIHJlYWxpdHkgc3RpbGwgYSBudW1iZXJcclxuICAgIG1pbGVzRWxlbWVudC5pbm5lclRleHQgPSAoY2FyLmVuZ2luZS5taWxlcyk7XHJcbiAgICAvLyBUaGlzIC50b1N0cmluZygpIHdpbGwgYWN0dWFsbHkgY29udmVydCB0aGUgdmFsdWUgaW4gSmF2YVNjcmlwdCBmcm9tIGFuIGludGVnZXIgdG8gYSBzdHJpbmdcclxuICAgIGZ1ZWxMZXZlbEVsZW1lbnQuaW5uZXJUZXh0ID0gY2FyLmVuZ2luZS5mdWVsLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoY2FyLnJhZGlvLm11c2ljTGV2ZWwgPT09IDApIHtcclxuICAgICAgICBhdWRpb0VsZW1lbnQucGF1c2UoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvRWxlbWVudC5wbGF5KCk7XHJcbiAgICB9XHJcbn0sIDEwMDApO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=