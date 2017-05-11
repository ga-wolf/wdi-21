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

var emails = [ "groucho@ga.co", "harpo@ga.co", "zeppo@ga.co" ];

var allGAEmails = _.every( emails, function ( email ) {
  return email.endsWith("@ga.co");
});

console.log( allGAEmails );

var nums = [ 1, 2, 3, 4, 5 ];
console.log( _.contains(nums, 3) );
console.log( _.contains(nums, 10) );

var stooges = [
  {name: 'moe', age: 40},
  {name: 'larry', age: 50},
  {name: 'curly', age: 60}
];

console.log(
  _.pluck( stooges, 'name' )
);
console.log(
  _.pluck( stooges, 'age' )
);
console.log(
  _.max(stooges, 'age')
);

var nums = [ 1, 2, 3, 4, 5, 6 ];

console.log(
  _.shuffle( nums )
);
console.log(
  _.sample( nums )
);
console.log(
  _.sample( nums, 2 )
);

var nums = [ 1, 2, 3, 4, 5 ];
var evenAndOdds = _.countBy( nums, function ( number ) {
  if ( number % 2 === 0 ) {
    return "even";
  } else {
    return "odd";
  }
});
console.log( evenAndOdds );

var libraryCount = _.countBy( jsLibraries, function (lib) {
  return lib[0];
});
console.log( libraryCount );
