export class NoDiscount {
    apply(price) {
        return price;
    }
    showCalculation(price) {
        return "No discount";
    }
}
