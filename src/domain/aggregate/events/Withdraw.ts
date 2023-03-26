import Money from "../valueobjects/Money";
import DomainEvent from "./DomainEvent";

export default class Withdraw extends DomainEvent {
    money : Money;
    date: Date;
    type: string;
    /**
     *
     */
    constructor(money: Money) {
        super();
        this.money = money;   
        this.date = new Date();
        this.type = 'Withdraw';
    }

    toString(): string {
        return super.toString();
    }
}