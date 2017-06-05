// Var, let and const
  // Hoisting
    // Variable declarations are lifted up to the top of the scope
    // Function declarations are lifted up to the top of the scope
  // Scoping
    // With function scope, the only way to create a new scope is by creating a function
    // With block scope, any block code (curly brackets) is a new scope (e.g. if, while, for loops etc.)
  // Mutability is where the value that a variable is bound to can change
  // Immutability is where the value that a variable is bound to can't change
  // Shadowing: Declaring a variable with the same name, in the same scope

var global = true;

var scopedFunction = function () {
  var something = true;
  console.log( something, global );

  var innerScopedFunction = function () {
    var innerScope = false;
    console.log( innerScope, global );
  };

  innerScopedFunction();
};

// scopedFunction();

// console.log( twoEqualsTwo );
// console.log( twoIsntTwo );

if ( true ) {
  var twoEqualsTwo = true;
  // console.log( twoEqualsTwo );
} else {
  var twoIsntTwo = "Two isn't two";
}

// console.log( twoEqualsTwo );

// for ( var i = 0; i < 5; i += 1 ) {
//   // console.log( i );
// }
//
// // console.log( i );
//
// for ( var i = 0; i < 5; i += 1 ) {
//   // console.log( i );
//
//   window.setTimeout(function () {
//     // console.log( i );
//   }, i * 100);
//
// }

var SOMETHING_IMPORTANT = "asknfalksnfsalknfaslkn";
SOMETHING_IMPORTANT = "Something else important";

// console.log( SOMETHING_IMPORTANT );

var someFunctionScopedVar = "Function Scoped Var";

let someBlockScopedVar = 'Block Scoped Var';

for ( let i = 0; i < 5; i += 1 ) {
  console.log( i );
}

for ( let i = 0; i < 5; i += 1 ) {

  window.setTimeout(function () {
    console.log( i );
  }, 100);

}

let somethingImportant = "Something Important";
somethingImportant = "Something very important";
console.log( somethingImportant );

const API_KEY = "abcd1234";
API_KEY = "something else";
