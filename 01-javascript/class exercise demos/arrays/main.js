// Exercises: Arrays

// Your top choices

// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".

// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

var favAnimals = [
"Hyena",
"Crow",
"Octopus",
"Steak factories",
"Snakes"
];

for( var i = 0; i < favAnimals.length; i++ ){
  var returnStr = '';
  if( i === 0 ){
    returnStr = "My " + (i + 1) + "st choice will be " + favAnimals[i] + "."
  } else if ( i === 1 ) {
    returnStr = "My " + (i + 1) + "nd choice will be " + favAnimals[i] + "."
  } else if ( i === 2 ) {
    returnStr = "My " + (i + 1) + "rd choice will be " + favAnimals[i] + "."
  } else {
    returnStr = "My " + (i + 1) + "th choice will be " + favAnimals[i] + "."
  }
  console.log( returnStr )
}