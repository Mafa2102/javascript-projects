// Define your Book class here:
class Book {
    constructor(title, author, date, isbn, numpages, numchecked, discarded){
        this.title = title;
        this.author = author;
        this.date = date; //copyright date
        this.isbn = isbn;
        this.numpages = numpages;
        this.numchecked = numchecked;
        this.discarded = discarded;
    }
    checkout(uses = 1) {
        this.numchecked += uses;
      }
}

// Define your Manual and Novel classes here:
class Manual extends Book{
    constructor(title, author, date, isbn, numpages, numchecked, discarded){
        super(title, author, date, isbn, numpages, numchecked, discarded);
    }
    dispose(currentYear) {
        if (currentYear - this.date > 5) {
          this.discarded = "Yes";
        }
    }
}

class Novel extends Book{
    constructor(title, author, date, isbn, numpages, numchecked, discarded){
        super(title, author, date, isbn, numpages, numchecked, discarded);
    } 
    dispose(){
        if(this.numchecked > 100){
            this.discarded = "Yes";
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let novel1 = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let manual1 = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000', 1147, 1, "No");
console.log(novel1);
console.log(manual1);
// Code exercises 4 & 5 here:
manual1.dispose(2024);
novel1.checkout(5);
console.log(novel1);
console.log(manual1);