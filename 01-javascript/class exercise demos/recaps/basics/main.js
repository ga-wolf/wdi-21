// **********************************************************
// Variables

// What are variables? 
// Packets that contain information - they are variable in the sense that the information inside always changes.

console.log( variableName );
// Will throw undefined, because no variable called 'variableName' has been declared.

var variableName;
console.log( variableName );
// will still return undefined, as we have named it, but not told it it holds any value.

var variableName = null;
console.log( variableName );
// This will now return null. It is still empty, but it /is/ defined.

var variableName = "Some content";
console.log( variableName );
// This will finally return a value. variableName is now a wrapper that contains "Some content."

// The easiest analogy is to think of this like a box in a post office.
// We may not know what will be in the box, but we know it will be in a box.

// No matter what the contents are, we know we will always be sending boxes.

variableName = "New content";
console.log( variableName );

// Because we already have our variable defined, we can simply change the content. The exact same code works, because it's only looking for the variable -- the wrapper (box).

// **********************************************************
// Functions

// What are they?
// Functions are blocks of code that we need to do specific tasks during the operation of our program.

var testFunction = function(){
  console.log( "I have triggered." );
};

// Even when a function is not taking parameters, it need to be proceeded by brackets to trigger.
testFunction
// This says, "What's in the variable 'testFunction'?"

testFunction();
// This says, "find this function and run it".
// Functions share the same naming and call limitations as variables -- because they /ARE/ variables.

var testFunction = function( input ){
  console.log( input );
};

// Functions can optionally take parameters. The parameter names are variables that only that function, and items inside that function can see.

//------------
// Return statements: used if you need to interact directly with the results of a function, not a variable it is interacting with.

var scoreCount = function( someScore ){
  return someScore + 10;
};

// This returns a value of the number it was passed, plus 10. It might work something like this:

var score = scoreCount( 10 );

// Because it is explicitly returning a value, I can say things like:

var score = scoreCount( 10 ) * 2;

// Alternatively, I might use a function to modify something in the global namespace

var score = 10;
var scoreCount = function(){
  score += 10;
};

// While they seem very similar, if I try the same method as above:

var score = scoreCount() * 2;

// I will get undefined, as I have not returned a value. I cannot say "Give me this function * 2".


// **********************************************************
// For loops
// What are for loops?
// A means of repeating a task a certain number of times.

// typical structure:
  // ( start ; end condition; increment )
for( var i = 0; i < 5; i++){
  console.log( i );
}

// This will count from 0 to 4 -- because we start at 0, and we are only checking if we have an i that is less than 5. The 5th count doesn't run.

for( var i = 5; i < 0; i--){
  console.log( i );
}

// Loops do not need to count up, they can count backwards.

var outsideVariable = 10;
for(; outsideVariable < 20 ; outsideVariable ++){
  console.log( outsideVariable );
}

// In fact, they don't even need to rely on iterators inside their conditionals

// --------------------
// ** DO NOT RUN ME. **
// --------------------

// var condition = true;
// for(; condition === true ;){
//   console.log( "I'm going to crash your browser." );
// }

// Or even numbers for that matter. WARNING: This is an infinite loop. It is ALWAYS true.
// For loops are harder to make infinite, but not impossible.

// **********************************************************
// Arrays
// What are arrays?
// Arrays are an indexed based means of storing information.

var array = ["First", "Second", "Fourth"];

// Arrays confusingly start at 0 as their first item.

array[0];

// This actually returns "First"

array[3];

// And this returns undefined. Even though if we call array.length, we get a length of 3. It counts from 0.

var favAnimals = [
"Hyena",
"Crow",
"Octopus",
"Steak factories",
"Snakes"
];

for ( var i = 0; i < favAnimals.length; i++ ){
  console.log( i + " " +favAnimals[i] );
}

// For loops and arrays work amazingly well together, and you can easily have a loop that counts up to any length of array you give it, as above.

// With that said, you can run in to little ussues easily. Consider this:
// You have a list of the first 3 winners in a race and you want to list them.

var racers = [ "John", "Stewart", "Alicia"];

for ( var i = 0; i < racers.length; i++ ){
  console.log( i + " " + racers[i] );
}

// This logs our first place runner as '0 John' Maybe 1 instead of 0?. 

for ( var i = 1; i < racers.length; i++ ){
  console.log( i + " " + racers[i] );
}

// Now John's gone entirely. Our loop starts at one, and only counts twice.

for ( var i = 0; i <= racers.length; i++ ){
  console.log( i + " " + racers[i] );
}

// You can also run in to issues with '<=' - now we go from 0-3 and 3 is undefined.
// While these seem like basic mistakes on a small scale, they can be extremely frustrating on bigger projects. We call this the 'off by one' error. This mismatch between arrays starting at 0, and us starting sat 1.







