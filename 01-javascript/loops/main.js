// LOOPS IN JS

// Starting Point
// Increment or Step
// Ending Condition || Finishing Line

// while ( condition ) {
// }

// I want the computer to count from 1 to 10
// var count = 1;
// while ( count <= 10 ) {
//   console.log("Count:", count);
//   count = count + 1;
// }
//
// var countdown = 5;
// // Go from 5 to 1 (step through one at a time)
// while ( countdown >= 1 ) {
//   console.log(countdown);
//   countdown -= 1; // Syntactic Sugar
// }
// // Print out lift off
// console.log("Lift off!");

// for ( var count = 1; count <= 5; count += 1 ) {
//   console.log("Count:", count);
// }
//
// for ( var countdown = 5; countdown >= 1; countdown -= 1 ) {
//   console.log(countdown);
// }
//
// console.log("Blast off!");

// I want something that can count every five numbers up to a given number (limit)

var everyFiveNumbers = function ( limit ) {
  for ( var i = 0; i <= limit; i += 5 ) {
    console.log("I:", i);
  }
};

// everyFiveNumbers(250);

var loop = function ( start, end, step ) {
  for ( var count = start; count <= end; count += step ) {
    console.log( count );
  }
}

// loop( startingPoint, endingPoint, increment );
// loop( 5, 15, 3 );
// loop( 1, 100, 1 );
// loop( 200, 250, 5 );

// Given a range of 1 to 100
  // Keep counting until you find a number evenly divisible by 42

for ( var i = 1; i <= 100; i += 1 ) {
  console.log( i );
  if ( i % 42 === 0 ) {
    console.log("No longer necessary to loop!");
    break;
  }
}
