// _.each( COLLECTION, CALLBACK || ITERATEE, [CONTEXT] );

// _.each( [ 'a', 'b', 'c' ], function ( letter, index ) {
//   console.log( "Current letter: " + letter );
//   console.log( "\tCurrent index: " + index );
// } );
//
// var numbers = [ 12, 242, 4121, 219, 0.18 ];
// var displayNumber = function ( number ) {
//   console.log( number );
// };
// _.each( numbers, displayNumber );
//
// var groucho = {
//   firstName: "Groucho",
//   lastName: "Marx",
//   bestAppearance: "Duck Soup"
// };
//
// _.each( groucho, function ( value, key ) {
//   var msg = "Key: " + key + ". Value: " + value;
//   console.log( msg );
// } );

var numbers = [ 1, 2, 3 ];

var multipliedNumbers = _.map( numbers, function ( num ) {
  return num * 3;
} );

// console.log( multipliedNumbers );

var bankAccountValues = [ 100, 50, 1000 ];

var totalBalance = _.reduce( bankAccountValues, function ( sum, num ) {
  // console.log("Sum: " + sum);
  // console.log("Num: " + num);

  return sum + num;
}, 0 );

// console.log( totalBalance );

var testScores = [ 92, 84, 49, 100, 76, 100 ];

var totalScore = _.inject( testScores, function ( scoreTotal, currentScore ) {
  return scoreTotal + currentScore;
}, 0 );

var average = totalScore / testScores.length;

// console.log( average );

var data = [
  { id: 22, username: "Martin", active: true  },
  { id: 23, username: "Max",    active: false },
  { id: 24, username: "Linda",  active: false }
];

var inactiveUsers = _.where( data, { active: false } );
  // ActiveRecord = .where
console.log( inactiveUsers );

var firstInactiveUser = _.findWhere( data, { active: false } );
  // ActiveRecord = .find_by
console.log( firstInactiveUser );

var nums = [ 1, 2, 3, 4, 5, 6 ];

var evenNumbers = _.filter( nums, function ( number ) {
  // Removes anything where the callback function returns false
  return number % 2 === 0;
} );

var allOdds = _.reject( nums, function ( number ) {
  // Removes anything where the callback function returns true
  return number % 2 === 0;
} );

console.log( evenNumbers, allOdds );

var listOfNumbers = [ 1.1, 1.4, 2.3, 2.7, 8.4 ];
var groupedByNum = _.groupBy( listOfNumbers, function ( num ) {
  return Math.floor( num );
})

var jsLibraries = [ "angular", "backbone", "react", "d3", "threejs", "jquery", "underscore", "ember", "vue", "fartscroll", "rekt.js", "lodash", "dead-hyphen" ];

var searchLibraries = _.groupBy(jsLibraries, function (lib) {
  return lib[0];
});
console.log( searchLibraries );
