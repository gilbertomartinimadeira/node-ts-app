import Money from "../valueobjects/Money";

export default abstract class Account {
    static id: number = 0;
    balance: Money = new Money(0,0);

    /**
     *
     */
    constructor() {
        Account.id++;            
    }
}