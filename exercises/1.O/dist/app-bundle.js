/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/models/Animal.ts":
/*!******************************!*\
  !*** ./app/models/Animal.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Animal = void 0;
class Animal {
    constructor(type, sound) {
        this._type = type;
        this._sound = sound;
    }
    get type() {
        return this._type;
    }
    get sound() {
        return this._sound;
    }
}
exports.Animal = Animal;


/***/ }),

/***/ "./app/models/Cat.ts":
/*!***************************!*\
  !*** ./app/models/Cat.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cat = void 0;
const Animal_1 = __webpack_require__(/*! ./Animal */ "./app/models/Animal.ts");
class Cat extends Animal_1.Animal {
    constructor(type, sound) {
        super(type, sound);
    }
}
exports.Cat = Cat;


/***/ }),

/***/ "./app/models/Dog.ts":
/*!***************************!*\
  !*** ./app/models/Dog.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dog = void 0;
const Animal_1 = __webpack_require__(/*! ./Animal */ "./app/models/Animal.ts");
class Dog extends Animal_1.Animal {
    constructor(type, sound) {
        super(type, sound);
    }
}
exports.Dog = Dog;


/***/ }),

/***/ "./app/models/Meerkat.ts":
/*!*******************************!*\
  !*** ./app/models/Meerkat.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Meerkat = void 0;
const Animal_1 = __webpack_require__(/*! ./Animal */ "./app/models/Animal.ts");
class Meerkat extends Animal_1.Animal {
    constructor(type, sound) {
        super(type, sound);
    }
}
exports.Meerkat = Meerkat;


/***/ }),

/***/ "./app/models/Parrot.ts":
/*!******************************!*\
  !*** ./app/models/Parrot.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parrot = void 0;
const Animal_1 = __webpack_require__(/*! ./Animal */ "./app/models/Animal.ts");
class Parrot extends Animal_1.Animal {
    constructor(type, sound) {
        super(type, sound);
    }
}
exports.Parrot = Parrot;


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
const Cat_1 = __webpack_require__(/*! ./models/Cat */ "./app/models/Cat.ts");
const Dog_1 = __webpack_require__(/*! ./models/Dog */ "./app/models/Dog.ts");
const Parrot_1 = __webpack_require__(/*! ./models/Parrot */ "./app/models/Parrot.ts");
const Meerkat_1 = __webpack_require__(/*! ./models/Meerkat */ "./app/models/Meerkat.ts");
class Zoo {
    constructor() {
        this._animals = new Array(); //original code: private _animals: Array <object> = new Array<object>()
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat_1.Cat('Cat', 'miauw'));
zoo.addAnimal(new Dog_1.Dog('Dog', 'woof'));
zoo.addAnimal(new Parrot_1.Parrot('Parrot', "i'm a pirate"));
zoo.addAnimal(new Meerkat_1.Meerkat('Meerkat', 'pumba why u do this'));
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.sound + "<br>");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDZkQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsV0FBVztBQUNYLGlCQUFpQixtQkFBTyxDQUFDLHdDQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7Ozs7Ozs7OztBQ1RFO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVc7QUFDWCxpQkFBaUIsbUJBQU8sQ0FBQyx3Q0FBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7Ozs7Ozs7Ozs7QUNURTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxlQUFlO0FBQ2YsaUJBQWlCLG1CQUFPLENBQUMsd0NBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7Ozs7Ozs7Ozs7O0FDVEY7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYztBQUNkLGlCQUFpQixtQkFBTyxDQUFDLHdDQUFVO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOzs7Ozs7O1VDVGQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxjQUFjLG1CQUFPLENBQUMseUNBQWM7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLHlDQUFjO0FBQ3BDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFpQjtBQUMxQyxrQkFBa0IsbUJBQU8sQ0FBQyxpREFBa0I7QUFDNUM7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9BbmltYWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9DYXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9Eb2cudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9NZWVya2F0LnRzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvUGFycm90LnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9hcHAvbmV3LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQW5pbWFsID0gdm9pZCAwO1xyXG5jbGFzcyBBbmltYWwge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgc291bmQpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9zb3VuZCA9IHNvdW5kO1xyXG4gICAgfVxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgICBnZXQgc291bmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQW5pbWFsID0gQW5pbWFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNhdCA9IHZvaWQgMDtcclxuY29uc3QgQW5pbWFsXzEgPSByZXF1aXJlKFwiLi9BbmltYWxcIik7XHJcbmNsYXNzIENhdCBleHRlbmRzIEFuaW1hbF8xLkFuaW1hbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBzb3VuZCkge1xyXG4gICAgICAgIHN1cGVyKHR5cGUsIHNvdW5kKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhdCA9IENhdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Eb2cgPSB2b2lkIDA7XHJcbmNvbnN0IEFuaW1hbF8xID0gcmVxdWlyZShcIi4vQW5pbWFsXCIpO1xyXG5jbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWxfMS5BbmltYWwge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgc291bmQpIHtcclxuICAgICAgICBzdXBlcih0eXBlLCBzb3VuZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5Eb2cgPSBEb2c7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTWVlcmthdCA9IHZvaWQgMDtcclxuY29uc3QgQW5pbWFsXzEgPSByZXF1aXJlKFwiLi9BbmltYWxcIik7XHJcbmNsYXNzIE1lZXJrYXQgZXh0ZW5kcyBBbmltYWxfMS5BbmltYWwge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgc291bmQpIHtcclxuICAgICAgICBzdXBlcih0eXBlLCBzb3VuZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5NZWVya2F0ID0gTWVlcmthdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QYXJyb3QgPSB2b2lkIDA7XHJcbmNvbnN0IEFuaW1hbF8xID0gcmVxdWlyZShcIi4vQW5pbWFsXCIpO1xyXG5jbGFzcyBQYXJyb3QgZXh0ZW5kcyBBbmltYWxfMS5BbmltYWwge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgc291bmQpIHtcclxuICAgICAgICBzdXBlcih0eXBlLCBzb3VuZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5QYXJyb3QgPSBQYXJyb3Q7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBDYXRfMSA9IHJlcXVpcmUoXCIuL21vZGVscy9DYXRcIik7XHJcbmNvbnN0IERvZ18xID0gcmVxdWlyZShcIi4vbW9kZWxzL0RvZ1wiKTtcclxuY29uc3QgUGFycm90XzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvUGFycm90XCIpO1xyXG5jb25zdCBNZWVya2F0XzEgPSByZXF1aXJlKFwiLi9tb2RlbHMvTWVlcmthdFwiKTtcclxuY2xhc3MgWm9vIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FuaW1hbHMgPSBuZXcgQXJyYXkoKTsgLy9vcmlnaW5hbCBjb2RlOiBwcml2YXRlIF9hbmltYWxzOiBBcnJheSA8b2JqZWN0PiA9IG5ldyBBcnJheTxvYmplY3Q+KClcclxuICAgIH1cclxuICAgIGFkZEFuaW1hbChhbmltYWwpIHtcclxuICAgICAgICB0aGlzLl9hbmltYWxzLnB1c2goYW5pbWFsKTtcclxuICAgIH1cclxuICAgIGdldCBhbmltYWxzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYWxzO1xyXG4gICAgfVxyXG59XHJcbmxldCB6b28gPSBuZXcgWm9vO1xyXG56b28uYWRkQW5pbWFsKG5ldyBDYXRfMS5DYXQoJ0NhdCcsICdtaWF1dycpKTtcclxuem9vLmFkZEFuaW1hbChuZXcgRG9nXzEuRG9nKCdEb2cnLCAnd29vZicpKTtcclxuem9vLmFkZEFuaW1hbChuZXcgUGFycm90XzEuUGFycm90KCdQYXJyb3QnLCBcImknbSBhIHBpcmF0ZVwiKSk7XHJcbnpvby5hZGRBbmltYWwobmV3IE1lZXJrYXRfMS5NZWVya2F0KCdNZWVya2F0JywgJ3B1bWJhIHdoeSB1IGRvIHRoaXMnKSk7XHJcbnpvby5hbmltYWxzLmZvckVhY2goKGFuaW1hbCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhcmdldCcpLmlubmVySFRNTCArPSAoYW5pbWFsLnR5cGUgKyBcIjogXCIgKyBhbmltYWwuc291bmQgKyBcIjxicj5cIik7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=