// var doFirst = function () {
//   console.log("Do First");
// };

var doFirst = function () {
  window.setTimeout(function () {
    console.log("Do First");
  }, 100);
};

var doSecond = function () {
  console.log("Do Second");
};

// doFirst();
// doSecond();

var doFirst = function ( callback ) {
  window.setTimeout(function () {
    console.log("Do First");
    callback();
  }, 2000);
};

// doFirst( function () {
//   console.log("Do Second");
// } );

var doSecond = function () {
  console.log("DO SECOND");
};

// doFirst( doSecond );

window.addEventListener("click", function () {
  console.log("The page was clicked");
});

var totals = [ 92, 94, 89, 99, 100, 96 ];

for ( var i = 0; i < totals.length; i += 1 ) {
  var current = totals[i];
  // console.log( "Current value: ", current );
}

var each = function ( collection, callback ) {
  for ( var i = 0; i < collection.length; i += 1 ) {
    var currentItem = collection[ i ];
    callback( currentItem );
  }
};

var totals = [ 92, 94, 89, 99, 100, 96 ];

each( totals, function ( num ) {
  console.log( "An iteration ran", num );
} );

var scores = [ 'A', 'D', 'F', 'F', 'C' ];
var printOutScore = function ( score ) {
  console.log( "Printing out score:", score );
};

each( scores, printOutScore );

var map = function ( collection, callback ) {
  var mappedArray = [];

  for ( var i = 0; i < collection.length; i += 1 ) {
    var currentItem = collection[i];
    var result = callback( currentItem );
    mappedArray.push( result );
  }

  console.log( mappedArray );
};

var nums = [ 1, 2, 3, 4, 5 ];
var squareNumber = function ( num ) {
  return num * num;
};
map( nums, squareNumber );

var allergens = [ '1', '2', '4', '8', '16', '32' ];

console.log( allergens );

map( allergens, function ( allergen ) {
  return parseInt( allergen );
} );

window.onload = function () {
  console.log("The page has finished loading");
};
