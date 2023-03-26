import Money from "../valueobjects/Money";
import DomainEvent from "./DomainEvent";

export default class Deposit extends DomainEvent{
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
        this.type = 'Deposit';
    }
    
    toString(): string {
        return super.toString();
    }
}