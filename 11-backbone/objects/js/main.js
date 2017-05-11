var data = {
  age: NaN,
  location: undefined
};

console.log(
  _.keys( data )
);

var distance = {
  start: 100,
  end: 300
};
var mappedObj = _.mapObject(distance, function (val, key) {
  return val * 3;
});
console.log( mappedObj );

// _.pairs
// Turn an object into an array of arrays

console.log(
  _.pairs( distance )
);

// _.invert
// Swaps the keys and values around

console.log(
  _.invert( distance )
);

var data = {
  name: "N/A",
  location: "N/A",
  description: "N/A"
};

// Whitelisting
var whitelisted = _.pick( data, 'name', 'location' );
  // The only things allowed are name and location
console.log(whitelisted);

// Blacklisting
var blacklisted = _.omit( data, 'description' );
  // Have whatever you want except description
console.log(blacklisted);

// _.defaults( OBJ, DEFAULT KEY VALUE PAIRS );
var mergedObj = _.defaults(
  { name: "Bill" },
  { drinksWater: true }
);
console.log(mergedObj);

var merged = _.defaults(
  { x: 192, y: 42 },
  { x: 0, y: 0 }
);
console.log( merged );




_.times(5, function () {
  console.log("This was called");
});

console.log(
  _.random( 1, 100 )
);

var someHTML = "<p> Hello <%= name %>! </p>";
var templateFunction = _.template( someHTML );

var janeGreeting = templateFunction({ name: "Jane" });
var sergeGreeting = templateFunction({ name: "Serge" });

console.log( janeGreeting, sergeGreeting );

var initializeGame = function () {
  console.log("The Game was Initialized");
};

var startGame = _.once( initializeGame );

var createApplication = _.once(function () {
  console.log("Application Created");
});

createApplication();
createApplication();
createApplication();
createApplication();

// [ "one", "two", "three" ]
// [ "one mapped", "two mapped", "three mapped" ]
// [ "ONE MAPPED", "TWO MAPPED", "THREE MAPPED" ]

_.chain( ["one", "two", "three"] )
  .map(function (word) {
    return word + " mapped";
  })
  .map(function (word) {
    return word.toUpperCase();
  })
  .each(function (word) {
    console.log("Current Word:", word);
  });

// Starting Data:         [ 1, 2, 3, 4, 5 ]
  // .map
// After first function:  [ 5, 10, 15, 20, 25 ]
  // .reduce || .inject
// What is returned:      75

var chainedTransformations =
  _.chain( [1, 2, 3, 4, 5] )
    .map(function (num) {
      return num * 5;
    })
    .reduce(function ( runningTotal, currentNumber ) {
      return runningTotal + currentNumber
    }, 0)
    .value();

console.log( chainedTransformations );
