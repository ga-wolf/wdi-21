// GLOBAL BINDING

console.log(this);

var randomFunction = function () {
  console.log("RANDOM FUNCTION", this);
};

randomFunction();

// IMPLICIT BINDING
// Is this a method?

var person = {
  name: "Groucho",
  speak: function () {
    console.log(this);
    console.log(this.name + " says hi");
  }
};

person.speak(); // Call site

// EXPLICIT BINDING
  // .call(), .apply(), .bind()

var sayHi = function () {
  console.log( "Hello, " + this.name );
};

// sayHi(); // GLOBAL BINDING

var personTwo = {
  name: "Groucho"
};
var personThree = {
  name: "Harpo"
};

sayHi.call( personTwo );
// Hey JS, can you set the this keyword to whatever is stored in personTwo please
sayHi.call( personThree );

sayHi.apply( personTwo );
sayHi.apply( personThree );

var personFour = {
  name: "Zeppo"
};

var sayHiToZeppo = sayHi.bind(personFour);
sayHiToZeppo();

// Create a copy of sayHi
  // Make sure the this keyword always refers to personTwo
var helloGroucho = sayHi.bind( personTwo );
// Call it a couple of times
helloGroucho();
helloGroucho();
helloGroucho();

console.clear();

var Person = function ( name, email ) {
  this.name = name;
  this.email = email;
  this.sayHi = function () {
    var msg = "Hello, I am " + this.name;
    console.log(msg);
  };
};

var p1 = new Person( "Groucho", "groucho@ga.co" );
var p2 = new Person( "Harpo", "harpo@ga.co" ); // {}
var p3 = new Person( "Gummo", "gummo@ga.co" ); // {}

p1.sayHi();
p2.sayHi();
p3.sayHi();

console.clear();

var Admin = function (name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role;
  this.deletePost = function () {
    var msg = this.email + " deleted a post";
    console.log(msg);
  };
  this.sendEmail = function () {
    var msg = this.email + " sent a post";
    console.log(msg);
  };
  this.deleteAccount = function () {
    console.log("We deleted an account");
  };
};

var bill = new Admin("Billy", "bill@ga.co", "Designer");
bill.deletePost();

var jill = new Admin("Jilly", "jill@ga.co", "Author");
jill.deletePost();
var jill = new Admin("Jilly", "jill@ga.co", "Author");
jill.deletePost();
// Admin - name, email, role
  // deletePosts => `email` deleted a post
  // sendEmail => `email` sent an email
  // deleteAccount => We deleted the account of `email`

// Enemy - name, rank
  // shoot
  // die
  // spawn


// The new keyword does two things for us
  // It creates a new empty object and sets it to this
  // It also automatically returns the value of this



console.log(this === window); // window
var someGlobalFunction = function () {
  console.log(this === window); // window
};
someGlobalFunction();

var brian = {
  name: "Brian Greene",
  displayName: function () {
    console.log(this === brian); // brian
  }
};
brian.displayName();

var greetPerson = function () {
  console.log(this);
};
var obj = { name: "Groucho" };
var objTwo = { name: "Harpo" };
var objThree = { name: "Zeppo" };

greetPerson.call( objThree ); // objThree
greetPerson.apply( objTwo ); // objTwo
var greetGroucho = greetPerson.bind( obj );
greetGroucho(); // obj

console.clear();

var Books = [];
var Book = function ( title, author, alreadyRead ) {
  this.title = title;
  this.author = author;
  this.alreadyRead = alreadyRead;
  this.read = function () {
    if ( this.alreadyRead ) {
      console.log(
        "You have already read "
        + this.title +
        ", are you sure?"
      );
    } else {
      console.log("Dig in to " + this.title);
    }
  };
  Books.push( this );
};

var geb = new Book(
  "GEB: Eternal Golden Braid",
  "Douglas Hofstadter",
  true
);
// geb.read();

var fabric = new Book(
  "The Fabric of the Cosmos",
  "Brian Greene",
  true
);
// fabric.read();

var icarus = new Book("Icarus", "BG", false);

// What if I wanted to run the read method on every book?
  // Every time we create a book, it gets pushed into the Books array
    // Loop through all of the books
      // Create currentBook that represents just one at a time
        // Do whatever we want

for (var i = 0; i < Books.length; i += 1) {
  var currentBook = Books[i];
  currentBook.read();
}
