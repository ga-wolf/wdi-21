// _.compact
  // Removes anything that is falsey

var falseyArray = [ 0, 1, 2, null, undefined, false, true, 3, 4 ];

console.log(
  _.compact( falseyArray )
);

// _.flatten
// Remove nested arrays
var nestedArray = [1, [2], [[3]], [[[[[[4]]]]]]];

var completelyFlattened = _.flatten( nestedArray );
var slightlyFlattened = _.flatten( nestedArray, true ); // You only flatten one level deep when you pass in true

console.log(
  completelyFlattened,
  slightlyFlattened
);

// Removes anything that it finds after the collection
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
 // => [2, 3, 4]

// Find all of the unique items in every array
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2, 3, 101, 10]

// Finds the things that are in every array
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// => [1, 2]

// Finds the things that are only in the first array
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
// => [1, 3, 4]




_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
// => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]

_.unzip([['moe', 30, true], ["larry", 40, false], ["curly", 50, false]])
// => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]

_.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// => {moe: 30, larry: 40, curly: 50}

_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
// => {moe: 30, larry: 40, curly: 50}

var stooges = [
  {name: 'moe', age: 40},
  {name: 'larry', age: 50},
  {name: 'curly', age: 60}
];
var alphabet = [ 'a', 'b', 'c', 'd', 'e', 'a' ];

var aIndex = _.indexOf(alphabet, 'a');
var lastAIndex = _.lastIndexOf(alphabet, 'a');
  // Return -1 if it can't find 'a'
console.log( aIndex, lastAIndex );

// _.sortedIndex( ARRAY, DATA TO BE ADDED, ORDERED BY )
var stooges = [
  { name: "Larry",  age: 40 },
  { name: "Moe",    age: 60 }
];
var curly = {
  name: "Curly",
  age: 50
};
var whereToAddCurly = _.sortedIndex( stooges, curly, 'age' );
console.log( whereToAddCurly );

// _.range( UPPER_LIMIT ); -> exclusive
// _.range( START, UPPER_LIMIT ); -> exclusive (includes the start)
// _.range( START, UPPER_LIMIT, STEP ); -> exclusive

console.log(
  _.range( 10 )
);
console.log(
  _.range( 1, 10 )
);
console.log(
  _.range( -1, -10, -1 )
);
