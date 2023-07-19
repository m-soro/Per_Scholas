/**
 * -----------
 * REPL @LINK
 * -----------
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
    return `I the Governor of this state pardons this rascal ${pardonee} from his or her crime!`;
  }
}

/**
 * -------------------------
 * LOG THE GOVERNOR'S CLASS
 * -------------------------
 */
console.log(`\n--LOG THE GOVERNOR CLASS--\n`);
console.log(Governor);

/**
 * ----------------------------------
 * LOG THE GOVERNOR'S STATIC METHODS
 * ----------------------------------
 * Static methods does not need an instance to be invoked.
 * Static methods can be called directly with the class
 */
console.log(`\n--LOG THE GOVERNOR'S STATIC METHODS--\n`);
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
    console.log("\n*** The class Person is invoked. ***\n");
  }
  introduce() {
    return this.isFriendly
      ? `Hi I am ${this.name}, ${this.age} y.o. in my free time I like to ${this.hobby}`
      : `I'm ${this.name}, I'd rather ${this.hobby} than talk to you!`;
  }

  eat(hungrinessLevel) {
    // if hungrinessLevel is not equal to zero then eat and decrement the hungriness level by one
    return this.hungrinessLevel !== 0
      ? `Yum..Nom Nom Nom... ${
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
 * --------------------------------------------
 * A DE-TOUR, INSTATIATING FROM PERSON CLASS
 * --------------------------------------------
 * Just me trying out the new Person objects! =)
 */
const person1 = new Person("Mark", 34, "M", true, "programming", 4);
const person2 = new Person("Miley", 20, "F", false, "throw eggs at people", 10);

console.log(`\n--PERSON 1 INVOKING METHODS--\n`);
console.log(person1.eat());
console.log(person1.introduce());
console.log(person1.action());

console.log(`\n--PERSON 2 INVOKING METHODS--\n`);
console.log(person2.eat());
console.log(person2.introduce());
console.log(person2.action());

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
    let postalWorkerMood = this.getMood();
    return postalWorkerMood !== "happy"
      ? `I'm calling out I'm feeling ${postalWorkerMood} today`
      : "I'm happy to do this for you!";
  }
  takeLunchBreak() {
    return this.tirednessLevel > 5 && this.hungrinessLevel !== 0
      ? `Im taking a break, Ahh I'm less hungry and tired now: tirednessLevel is ${(this.tirednessLevel =
          this.tirednessLevel -=
            1)}\
    hungriness level is now: ${(this.hungrinessLevel -= 1)}`
      : `Not hungry, and not yet tired`;
  }
}

const person3 = new PostalWorker(
  "Newman",
  45,
  "M",
  false,
  "eat the whole day",
  4,
  10
);
console.log(person3);
console.log(person3.introduce());
console.log(person3.isWorking());
console.log(person3.takeLunchBreak());
console.log(person3);
console.log(person3.takeLunchBreak());
console.log(person3);
