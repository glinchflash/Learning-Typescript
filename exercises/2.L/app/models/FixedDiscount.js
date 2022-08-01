"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
