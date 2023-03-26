import Money from "../valueobjects/Money";
import DomainEvent from "./DomainEvent";

export default class Withdraw implements DomainEvent {
    money : Money;
    date: Date;
    type: string;
    /**
     *
     */
    constructor(money: Money) {
        this.money = money;   
        this.date = new Date();
        this.type = 'Withdraw';
    }

    toString(): string {
        return `${this.type} at ${this.date.toLocaleString()}`;
    }
}