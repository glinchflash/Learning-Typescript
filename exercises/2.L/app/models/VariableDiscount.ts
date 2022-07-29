

export class VariableDiscount {

    private _value: number;

    constructor(value: number) {
        this._value = value;
    }

    apply(price: number): number {
        let divide = 100;
        return (price - (price * this._value / divide));
    }

    showCalculation(price: number): string {
        return price + " € -  " + this._value + "%";

    }

}