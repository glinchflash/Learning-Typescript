let divide = 100;
export class VariableDiscount {
    constructor(value) {
        this._value = value;
    }
    apply(price) {
        return (price - (price * this._value / divide));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
