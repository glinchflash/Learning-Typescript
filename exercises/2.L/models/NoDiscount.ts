
export class NoDiscount {
    apply(price : number) : number {
        return price;
    }
    showCalculation(price : number) : string {
        return "No discount";
    }
}