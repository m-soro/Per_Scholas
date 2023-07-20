/**
 * --------------
 * BANK ACCOUNTS
 * --------------
 * Derived From: n/a
 * Properties: ownerName, balance, acctNum(generated in constructor - not passed in)
 * Methods: deposit, withdraw
 */

class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.numAcct =
      Math.floor(Math.random() * 300) * Math.floor(Math.random() * 300) * 4;
  }
  deposit(funds) {
    return `\nYou are depositing ${funds} dollars. Balance updated from ${
      this.balance
    } to ${(this.balance += funds)}\n`;
  }
  withdraw(funds) {
    return `\nYou are withdrawing ${funds} dollars. Balance updated from ${
      this.balance
    } to ${(this.balance -= funds)}\n`;
  }
}

console.log("\n======== LARRY'S BANK ACCOUNT ========\n");
const larryBank = new BankAccount("Larry", 100);
console.log(larryBank);
console.log(larryBank.deposit(50));
console.log(larryBank.withdraw(75));

/**
 * ---------------------
 * CHECKINGACCOUNTCLASS
 * ---------------------
 * Derived From: BankAccount
 * Additional Properties: overdraftEnabled
 * Additional Methods: Override withdraw to implement overdraft feature
 */
class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, overdraftEnabled, numAcct) {
    super(ownerName, balance, overdraftEnabled, numAcct);
    this.overdraftEnabled = true;
  }
  withdraw(funds) {
    return this.balance - funds < 0
      ? `\nAccount will be less than 0. Available amount to withdraw is ${this.balance}\n`
      : `Current balance is ${(this.balance -= funds)}\n`;
  }
}
console.log("\n======== MO'S CHECKING ACCOUNT ========\n");
const moChecking = new CheckingAccount("Mo", 50);
console.log(moChecking);
console.log(moChecking.deposit(50));
console.log(moChecking.withdraw(75));
console.log(moChecking.withdraw(150));
/**
 * --------------------
 * SAVINGSACCOUNTCLASS
 * --------------------
 * Derived From: BankAccount
 * Additional Properties: None
 * Additional Methods: Override withdraw to disallow withdrawals completely :)
 */

class SavingsAccount extends BankAccount {
  withdraw() {
    return `\nWithdrawals from Savings account are not permitted\n`;
  }
}
console.log("\n======== CURLY'S SAVINGS ACCOUNT ========\n");
const curlySavings = new SavingsAccount("Curly", 30);
console.log(curlySavings);
console.log(curlySavings.deposit(50));
console.log(curlySavings.withdraw());
