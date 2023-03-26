import DomainEvent from "../events/DomainEvent";
import Deposit from "../events/Deposit";
import Withdraw from "../events/Withdraw";
import Money from "../valueobjects/Money";
import Account from "./Account";
import { EventStream } from "../EventStream";

export default class BankAccount extends Account implements EventStream{

    readonly events: DomainEvent[] = [];
    readonly newEvents: DomainEvent[] = [];
    readonly holder : string;

    deposit(value: Money) {
        this.registerEvent(new Deposit(value));
    }

    withdraw(value: Money) {
        if(value.greaterThan(this.balance) ) throw new Error("Value is greater than current available balance");
        this.registerEvent(new Withdraw(value));
    }
    
    toString(){
        return `${this.holder} Bank Account Balance: $${this.balance.units},${this.balance.cents}`;
    }

    constructor(holder: string, balance: Money) {
        super();

        this.holder = holder;
        this.balance = balance;
        
    }
    
    private registerEvent(event : DomainEvent) {
        switch(event.type){
            case 'Withdraw': this.applyWithdraw(event as Withdraw);break;
            case 'Deposit': this.applyDeposit(event as Deposit);break;
            default: throw new Error('Unsupported event detected');
        }

        this.events.push(event);
        this.newEvents.push(event);
    }

    private applyDeposit(deposit: Deposit){
        this.balance.units = this.balance.units + deposit.money.units;
        this.balance.cents = this.balance.cents + deposit.money.cents;
    }

    private applyWithdraw(withdraw: Withdraw){
        this.balance.units = this.balance.units - withdraw.money.units;
        this.balance.cents = this.balance.cents - withdraw.money.cents;
    }

}

