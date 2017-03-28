// Control Flow

// if ( some expression ) {
//
// }

if (true) {
  console.log("That evaluated to true");
}

if ( false ) {
  console.log("This shouldn't run");
}

var age = 16;

if ( age >= 21 ) {
  console.log("You can see this page");
} else {
  console.log("Redirect to mylittlepony");
}

// If the age is over 21
  // Print out you are right to look at the page
// If you are not over 21
  // Redirect to mylittlepony

// I have a boolean that indicates whether there are new tweets

// If there are new tweets
  // Print out there are new tweets
// If there aren't
  // Print out there are no tweets to show

var newTweets = false;
if ( newTweets === true ) {
  console.log("There are tweets to show");
} else {
  console.log("There are no snippets of wisdom");
}

// Comparison Operators
  // === - Strict Equality
  // == - Loose Equality (Type Coercion)
  // !== - Strict Inequality
  // != - Loose Inequality

// I want a favNumber variable
// If the variable is not equal to 42
  // Print out That's the wrong number
// If it is equal
  // Print out Yay! Twins!

var favNumber = 42;

if ( favNumber !== 42 ) {
  console.log("That's the wrong number");
} else {
  console.log("Yay! Twins!");
}


// I have two numbers
  // x is 10
  // y is 20
// If x times 2 is equal to y
  // Print out x is half Y
// Otherwise, print out Y is not double X

var x = 12;
var y = 20;
if ( x * 2 === y ) {
  console.log("X is half Y");
} else {
  console.log("Y is not double X");
}




var age = 10;
var youthfulHacker = false;
// If the age is over 21, or the person is a hacker
  // Print out you can see the site
// Otherwise, better luck next year
if ( age >= 21 || youthfulHacker === true ) {
  console.log("You can see the site");
} else {
  console.log("Better luck next year");
}

var myName = "Wolf";
var occupation = "Teacher";
// If the name is Wolf, and the occupation is Teacher
  // Print out you work at GA
// Otherwise, print out You are probably in Alaska
if ( myName === "Wolf" && occupation === "Teacher" ) {
  console.log("You work at GA");
} else {
  console.log("You are probably in Alaska");
}

// Logical Operators
  // Logical AND Operator ( && )
    // Both sides need to be true!
  // Logical OR Operator ( || )
    // Only needs one side to be true

// If / Else If / Else Statement

// if ( condition ) {
// } else if ( otherCondition ) {
// } else if ( anotherCondition ) {
// } else {
// }

var age = 40;
if ( age >= 35 ) {
  console.log("You can vote and hold any place in Government");
} else if ( age >= 25 ) {
  console.log("You can vote and run for the senate");
} else if ( age >= 18 ) {
  console.log("You can vote");
} else {
  console.log("You have no voice in Government");
}


// If you are over 35
  // You can vote and you can hold any place in Gov.
// Or if you are over 25
  // You can vote and you can run for the senate
// Or if you are over 18
  // You can vote
// Or if you aren't
  // You have no voice in Gov.

// Joel aka The Blade
var name = "Blade";
var occupation = "Teacher";

if (name === "Blade" && occupation === "Teacher") {
  console.log("That's a great choice");
} else if (name === "Blade" && occupation === "Ping Pong Player") {
  console.log("That's not a great choice");
} else {
  console.log("I don't know who you are, I don't know what you want");
}
// If you are the blade, and you are a teacher
  // That's a great choice
// Or if you are the blade, and you are a ping pong player
  // That's not a great choice
// Otherwise, probably a good choice
