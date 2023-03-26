import BankAccount from "./src/domain/aggregate/entity/BankAccount";
import Money from "./src/domain/aggregate/valueobjects/Money";

debugger;
const bankAccount = new BankAccount('Joao', new Money(1000,0));

bankAccount.deposit(new Money(10000,0));
bankAccount.withdraw(new Money(200,0));
bankAccount.withdraw(new Money(50,0));
bankAccount.withdraw(new Money(25,0));
bankAccount.withdraw(new Money(300,0));


console.log(bankAccount.toString());

bankAccount.events.forEach(ev => {
    console.log(ev.toString());
});

console.log(`Total events for bank account: ${bankAccount.events.length}`);