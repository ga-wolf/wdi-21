// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:

// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var fortuneTeller = function( job, country, spouse, numKids ){
  return "You will be a " + job + " in " + country + ", and married to " + spouse + " with " + numKids + " kids.";
}

// A function does not care if you are passing it more arguments than it expects, only too few.

// console.log( fortuneTeller( "plumber", "Australia", "the thug life", 0, 1, 7, "Potatoes" ) );


// Because we are only RETURNING a value from the function, we must log it to see what values it is actually spitting out.
console.log( fortuneTeller( "plumber", "Australia", "the thug life", 0 ) );


// The Geometrizer
// Create 2 functions that calculate properties of a circle.
// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".

var calcCircumfrence = function( r ){
  var returnVal = 2 * Math.PI * r;

// Instead of logging the function, I can log from within before the return statement. Note: If it FOLLOWS the return statement, it will never be called.
  console.log( "The circumference is " + returnVal +  "." );
  return returnVal;
};

calcCircumfrence( 4 );

// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

var calcArea = function( radius ){
  var returnVal = Math.PI * ( radius * radius );
  console.log( "The area is " + returnVal + "." );
  return returnVal;
};

calcArea(4);















