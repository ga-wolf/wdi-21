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
