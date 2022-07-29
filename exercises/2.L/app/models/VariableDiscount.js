"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
