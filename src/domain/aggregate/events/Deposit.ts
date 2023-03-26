import Money from "../valueobjects/Money";
import DomainEvent from "./DomainEvent";

export default class Deposit implements DomainEvent{
    money : Money;
    date: Date;
    type: string;
    /**
     *
     */
    constructor(money: Money) {
        this.money = money;    
        this.date = new Date();
        this.type = 'Deposit';
    }

    toString(): string {
        return `${this.type} at ${this.date.toLocaleString()}`;
    }

}