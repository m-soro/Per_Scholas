/**
 * ----------------
 * AVAILABLE BOOKS
 * ----------------
 * Requirements:
 * Create a book class. Each book contains title, authos ISBN and current inventory
 * A Method current inventory, if no books. It should return Out of Stock
 * A method for selling a book which deducts from the current inventory. default sell value is 1
 * A method that re-stock takes a number and adds to current inventory. default re-stock is 5.
 */

class Book {
  constructor(title, author, isbn, currentInventory) {
    (this.title = title),
      (this.author = author),
      (this.isbn = isbn),
      (this.currentInventory = currentInventory);
  }
  getInventory() {
    return this.currentInventory !== 0 ? this.currentInventory : "Out of Stock";
  }
  sell(sale = 1) {
    //prettier-ignore
    return typeof sale === "number" ? (this.currentInventory -= sale) : "Enter a number";
  }
  reStock(bookAmt = 5) {
    return typeof bookAmt === "number"
      ? (this.currentInventory += bookAmt)
      : "Enter a number";
  }
}

const grapes = new Book("The Grapres of Wrath", "John Steinbeck", 123456, 1);
const catcher = new Book("The Catcher in the Rye", "J.D. Salinger", 678912, 8);
const farewell = new Book("A Farewell to Arms", "Ernest Hemingway", 56789, 12);

console.log(grapes.getInventory());
console.log(grapes.reStock("ggg"));
console.log(farewell.sell(6));

/**
 * -------------------------
 * RE-WRITTEN AS A FUNCTION
 * -------------------------
 */

function Book(title, author, isbn, currentInventory) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.currentInventory = currentInventory;
}

Book.prototype.getInventory = function () {
  return this.currentInventory !== 0 ? this.currentInventory : "Out of Stock";
};

Book.prototype.sell = function (sale = 1) {
  //prettier-ignore
  return typeof sale === "number" ? (this.currentInventory -= sale) : "Enter a number";
};

Book.prototype.reStock = function (bookAmt = 5) {
  //prettier-ignore
  return typeof bookAmt === "number" ? (this.currentInventory += bookAmt) : "Enter a number";
};

/**
 * -------------
 * MOVIE OBJECT
 * -------------
 * Create a movie object that has 5 arguments: Title, director, genre, release yr, rating
 * A method: getOverview() returns overview for each film "<movie>, a <genre> film directed by "
 * "<director>" was released in <releaseYear>. .It received a rating of <rating>"
 */

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    (this.title = title),
      (this.director = director),
      (this.genre = genre),
      (this.releaseYear = releaseYear),
      (this.rating = rating);
  }
  getOverview() {
    return `\n${this.title}, a ${this.genre} film directed by ${this.director} \was 
    released in ${this.releaseYear}. It received a rating of ${this.rating}\n`;
  }
}

const goodMen = new Movie("A Few Good Men", "Rob Reiner", "Drama", 1992, 8.5);
const forrest = new Movie(
  "Forrest Gump",
  "Robert Zemeckis",
  "Drama",
  1994,
  8.8
);

console.log(goodMen.getOverview());
console.log(forrest.getOverview());
