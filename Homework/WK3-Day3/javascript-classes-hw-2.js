/**
 * -----
 * REPL
 * -----
 * @link https://replit.com/@msoro/JavaScript-Classes-HW-2-WK3-Day3#index.js
 */

/**
 * ------------------------------
 * STATIC METHODS AND PROPERTIES
 * ------------------------------
 * There is only one Governor in the state,
 * add static methods and properties you'd expect a Governor to have.
 * log the properties and test the methods (don't instantiate)
 */

/**
 * -----------------
 * GOVERNOR'S CLASS
 * -----------------
 * I'm adding three properties and four static methods.
 */

class Governor {
  constructor(name, politicalParty, state) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.state = state;
  }

  static finalWord(vote) {
    return vote
      ? `Governor ${this.name} has signed this bill into law`
      : `Governor ${this.name} vetoes this bill`;
  }

  static appoint(appointee, department, date) {
    return `I hereby appoint ${appointee} to lead the ${department} effective ${date}`;
  }

  static declare(type) {
    return `Governor ${this.name} declares ${type}`;
  }

  static pardon(pardonee) {
    return `I the Governor of this state pardons this rascal ${pardonee} 
    \ from his or her crime!`;
  }
}

/**
 * -------------------------
 * LOG THE GOVERNOR'S CLASS
 * -------------------------
 */
console.log("\n======== LOG THE GOVERNOR CLASS ========\n");
console.log(Governor);

/**
 * ----------------------------------
 * LOG THE GOVERNOR'S STATIC METHODS
 * ----------------------------------
 * Static methods does not need an instance to be invoked.
 * Static methods can be called directly with the class
 */
console.log("\n======== LOG THE GOVERNOR'S STATIC METHOD ========\n");
console.log(Governor.finalWord(false), "\n");
console.log(
  Governor.appoint(
    "Mark Soro",
    " Department of Leisure",
    "today, immediately!"
  ),
  "\n"
);
console.log(Governor.declare("Public Health Emergency"), "\n");
console.log(Governor.pardon("Mickey Mouse"), "\n");

/**
 * ------------
 * INHERITANCE
 * ------------
 * Think of three properties all people share, set them with the constructor
 * Think of three methods all people share
 * Create a PostalWorker class that inherits from person, add some methods
 * Create a Chef class that inherits from person, add some methods
 * Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
 */

/**
 * getRandomNum() - get randomized tiredness and hungriness level for the person class
 * @returns number from 1 to 10
 */
const getRandomNum = () => Math.floor(Math.random() * 10);

/**
 * -------------
 * PERSON CLASS
 * -------------
 */
class Person {
  // Class Person properties
  constructor(name, age, sex, isFriendly, hobby, hungrinessLevel) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.isFriendly = isFriendly;
    this.hobby = hobby;
    this.hungrinessLevel = hungrinessLevel;
    this.moods = ["happy", "sad", "angry", "indifferent"];
  }
  introduce() {
    return this.isFriendly
      ? `Hi I am ${this.name}, ${this.age} y.o. in my free time I like to ${this.hobby}`
      : `I'm ${this.name}, I'd rather ${this.hobby} than talk to you!`;
  }

  eat(hungrinessLevel) {
    // if hungrinessLevel is not equal to zero then eat and decrement the hungriness level by one
    return this.hungrinessLevel !== 0
      ? `${this.name} says, Yum..Nom Nom Nom... ${
          this.name
        }'s hungriness level is now : ${(this.hungrinessLevel -= 1)}`
      : `${this.name} is not hungry`;
  }
  getMood() {
    let currentMoodIndex = Math.floor(Math.random() * this.moods.length);
    let currentMood = this.moods[currentMoodIndex];
    return currentMood;
  }
  action() {
    let mood = this.getMood();
    switch (mood) {
      case "happy":
        return `${this.name} is ${mood}, let's sing and dance!`;
        break;
      case "sad":
        return `${this.name} is ${mood}, help to cheer up?`;
        break;
      case "angry":
        return `${this.name} is ${mood}, and will break your jaw if you do not stop!`;
        break;
      case "indifferent":
        return `${this.name} is ${mood}, and could care less`;
        break;
      default:
        return `This mood is not recognized`;
    }
  }
}

/**
 * ----------------------------------
 * INSTANTIATING FROM A PERSON CLASS
 * ----------------------------------
 */
const mark = new Person("Mark", 34, "M", true, "program", getRandomNum());
const mo = new Person("Mo", 20, "F", false, "throw axe", getRandomNum());

console.log("\n======== PERSON 1 INVOKING METHODS ========\n");
console.log(mark.eat(), "\n");
console.log(mark.introduce(), "\n");
console.log(mark.action(), "\n");

console.log("\n======== PERSON 2 INVOKING METHODS ========\n");
console.log(mo.eat(), "\n");
console.log(mo.introduce(), "\n");
console.log(mo.action(), "\n");

/**
 * ------------------------------------------------------------------------
 * CREATE A POSTALWORKER CLASS THAT INHERITS FROM PERSON, ADD SOME METHODS
 * ------------------------------------------------------------------------
 */

class PostalWorker extends Person {
  constructor(
    name,
    age,
    sex,
    isFriendly,
    hobby,
    hungrinessLevel,
    tirednessLevel
  ) {
    super(name, age, sex, isFriendly, hobby, hungrinessLevel);
    this.tirednessLevel = tirednessLevel;
  }
  isWorking() {
    // the postal worker classes only work if their mood is happy
    let postalWorkerMood = this.getMood();
    return postalWorkerMood !== "happy"
      ? `${this.name} says, Hello Boss, ${this.name} calling to tell you, I'm feeling ${postalWorkerMood} and won't be coming to work today.`
      : `${this.name} says,I'm happy to do this for you!`;
  }
  takeLunchBreak() {
    // method that decreases hungriness level
    return this.tirednessLevel > 5 && this.hungrinessLevel !== 0
      ? `${
          this.name
        } says, Im taking a break. Ahh I'm less hungry and tired now: tirednessLevel is ${(this.tirednessLevel =
          this.tirednessLevel -=
            1)}\ hungriness level is now: ${(this.hungrinessLevel -= 1)}`
      : `${this.name} says, Not hungry, and not yet tired`;
  }
}

/**
 * ----------------------------------------------------------------
 * CREATE A CHEF CLASS THAT INHERITS FROM PERSON, ADD SOME METHODS
 * ----------------------------------------------------------------
 */

class Chef extends Person {
  constructor(
    name,
    age,
    sex,
    isFriendly,
    hobby,
    hungrinessLevel,
    tirednessLevel,
    chefPosition
  ) {
    super(name, age, sex, isFriendly, hobby, hungrinessLevel, tirednessLevel);
    // adding addtional property the chefPosition
    this.chefPosition = chefPosition;
  }

  // over-riding the introduce method from Person class
  introduce() {
    return `Hi I am ${this.name}, ${this.age} y.o. I work as a ${this.chefPosition}, in my free time I like to ${this.hobby}`;
  }
  // adding a static method. to give random roles to chefs upon instantiation
  static chefRole() {
    let chefPosition = [
      "Chef de Cuisine",
      "Chef de Partie",
      "Sous Chef",
      "Commis",
      "Executive Chef",
    ];
    return chefPosition[Math.floor(Math.random() * chefPosition.length)];
  }
}

/**
 * -------------------------------------------
 * 2 POSTAL WORKERS AND TESTING THEIR METHODS
 * -------------------------------------------
 */
const newman = new PostalWorker(
  "Newman",
  45,
  "M",
  false,
  "eat the whole day",
  getRandomNum(),
  getRandomNum()
);

const kramer = new PostalWorker(
  "Kramer",
  40,
  "M",
  true,
  "hang out with my friends: Jerry, George & Elaine",
  getRandomNum(),
  getRandomNum()
);

console.log("\n======== 2 POSTAL WORKER TESTING METHODS ========\n");
console.log(newman, "\n");
console.log(newman.introduce(), "\n");
console.log(newman.isWorking(), "\n");
console.log(newman.takeLunchBreak(), "\n");

console.log(kramer, "\n");
console.log(kramer.introduce(), "\n");
console.log(kramer.isWorking(), "\n");
console.log(kramer.takeLunchBreak(), "\n");

/**
 * ----------------------------------
 * 2 CHEFS AND TESTING THEIR METHODS
 * ----------------------------------
 */

const gordon = new Chef(
  "Gordon",
  45,
  "M",
  false,
  "practice my yelling skills",
  getRandomNum(),
  getRandomNum(),
  Chef.chefRole() // invoking the static method
);
const wolfgang = new Chef(
  "Wolfgang",
  50,
  "M",
  false,
  "travel to exotic places",
  getRandomNum(),
  getRandomNum(),
  Chef.chefRole() // invoking the static method
);

console.log("\n======== 2 CHEFS WORKER TESTING METHODS ========\n");
console.log(gordon, "\n");
console.log(gordon.introduce(), "\n");
console.log(gordon.eat(), "\n");

console.log(wolfgang, "\n");
console.log(wolfgang.introduce(), "\n");
console.log(wolfgang.eat(), "\n");

console.log("\n====================================================");
console.log("======== BANK ACCOUNT - OPTIONAL ASSIGNMENT ========");
console.log("====================================================\n");
/**
 * --------------
 * BANK ACCOUNTS
 * --------------
 * Derived From: n/a
 * Properties: ownerName, balance, acctNum(generated in constructor - not passed in)
 * Methods: deposit, withdraw
 *
 */

class BankAccount {
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
    // assign random numbers for account numbers
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
      : `You withdrawed ${funds} current balance is ${(this.balance -=
          funds)}\n`;
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
