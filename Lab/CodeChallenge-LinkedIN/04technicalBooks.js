class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  // Getter
  get availability() {
    return this.getAvailability();
  }

  // Method
  getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    } else if (this.numCopies < 10) {
      return "Low stock";
    }
    return "In stock";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
  }
}

/*
  WRITE YOUR SOLUTION HERE
*/

class TechnicalBook extends Book {
  constructor(title, author, ISBN, numCopies, edition) {
    super(title, author, ISBN, numCopies, edition); // I can omit edition and it would work
    this.edition = edition;
  }
  getEdition() {
    return `The current edition of this book is ${this.edition}`;
  }
}

const eloquent = new TechnicalBook(
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  123456,
  12,
  1
);

const impractical = new TechnicalBook(
  "Impractical Python Projects",
  "Lee Vaughan",
  456789,
  14,
  2
);

console.log(impractical.getEdition());
console.log(eloquent.getEdition());
