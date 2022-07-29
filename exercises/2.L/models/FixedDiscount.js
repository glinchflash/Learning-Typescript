export class FixedDiscount {
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
