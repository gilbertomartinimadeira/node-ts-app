export default class Money {
    units: number;
    cents: number;

    /**
     *
     */
    constructor(units, cents) {
            this.units = units;
            this.cents = cents;
    }

    greaterThan(money : Money) :boolean{
        return this.units > money.units && this.cents > money.cents;
    }
    greaterThanOrEqual(money : Money) :boolean {
        return this.units >= money.units && this.cents >= money.cents;
    }

    lesserThan(money : Money) :boolean {
        return this.units < money.units && this.cents < money.cents;
    }    
    lesserThanOrEqual(money : Money) :boolean {
        return  this.units <= money.units && this.cents <= money.cents;
    }

    toString() : string {
        return `$ ${this.units},${this.cents}`;
    }
}