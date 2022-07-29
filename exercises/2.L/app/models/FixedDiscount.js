"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
