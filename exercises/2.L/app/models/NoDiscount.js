"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
