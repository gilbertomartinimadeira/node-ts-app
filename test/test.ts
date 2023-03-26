import BankAccount from "../src/domain/aggregate/entity/BankAccount";
import Money from "../src/domain/aggregate/valueobjects/Money";

test('should create bank account', async function() {
        
    const initialBalance = new Money(100,50);

    const bankAccount = new BankAccount('Gilberto',initialBalance);

    expect(bankAccount.holder).toBe('Gilberto');
    expect(bankAccount.balance.units).toBe(initialBalance.units);
    expect(bankAccount.balance.cents).toBe(initialBalance.cents);
});

test('should withdraw corret value', async function() {
        
    debugger;
    const value = new Money(100,0);
    const initialBalance = new Money(100,50);

    const bankAccount = new BankAccount('Gilberto',initialBalance);
    bankAccount.withdraw(value);

    expect(bankAccount.balance.units).toBe(0);
    expect(bankAccount.balance.cents).toBe(50);
    
});
