class BadGuy {
  constructor(type, damage, health, attackShout) {
    this.type = type;
    this.damage = damage;
    this.health = health;
    this.attackShout = attackShout;
    /**
     * -------------------------------------
     * ADDING THIS PROPERTY OF ATTACK ARRAY
     * -------------------------------------
     */
    this.attackMenu = ["Punch", "Kick", "Nunchucks", "Bite", "Gun", "Laser"];
  }
  shout() {
    console.log(`${this.type} says: ${this.attackShout}`);
  }
  attack() {
    console.log(
      `${this.type} is attacking you with ${
        this.attackMenu[Math.floor(Math.random() * this.attackMenu.length)]
      }`
    );
  }
}

const badGuy1 = new BadGuy("Skeleton", 4, 20, "HOORAH!");
const badGuy2 = new BadGuy("Goblin", 5, 18, "TAKE THIS!");
const badGuy3 = new BadGuy("Robot", 1, 130, "eliminating target...");

/**
 * ----------------------------
 * INSTANTIATING MARK'S BAD GUY
 * ----------------------------
 */
const badGuy4 = new BadGuy("Punk", 3, 2, "You want trouble huh?!");

// By now, we should all thoroughly understand what the above does.
// We make a blueprint class, and we create new objects from it using  the 'new' keyword.
// We pass in our arguments to initialize the objects properties.

// In this case, We're creating enemy objects 'bad guys' for a video game.
// Each enemy has their own stats such as damage and health, and a message they will shout when they attack.
// additionally, each bad guy has a type, which allows us to define what kind of enemy our hero has to fight.

// Let's print out the bad guy objects we just created.

console.log("\n ======= BAD GUYS ======= \n");
console.log(badGuy1);
console.log(badGuy2);
console.log(badGuy3);

console.log("\n ======= BAD GUYS ATTACKS!======= \n");
badGuy1.attack();
badGuy2.attack();
badGuy3.attack();
badGuy4.attack();

console.log("\n ======= MARK'S BAD GUYS ======= \n");
console.log(badGuy4);

// Now let's call each of their shout methods

console.log("\n======= BAD GUY SHOUTS ======= \n");
badGuy1.shout();
badGuy2.shout();
badGuy3.shout();

// Feel free to alter any of the above code for your own amusement and practice.
