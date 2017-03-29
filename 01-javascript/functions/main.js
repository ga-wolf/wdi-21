// var someVar = true;
//
// // // var doSomething = function () {
// // //   console.log("I did something");
// // // };
// // //
// // // // Duplicate Lines: CMND + SHIFT + D
// // // // Comment Line(s): CMND + /
// // //
// // // doSomething(); // Call site
// // // doSomething(); // Call site
// // // doSomething(); // Call site
// // //
// // // // multiplyFiveByFive();
// // //
// // // var multiplyFiveByFive = function () {
// // //   console.log(5 * 5);
// // // };
// // //
// // // var sayHi = function () {
// // //   var message = "Hello";
// // //   console.log(message);
// // // };
// // //
// // // sayHi();
// // // sayHi();
// //
// // // functionExpression();
// //
// // var functionExpression = function () {
// //   console.log("I am a function expression");
// // };
// //
// // // functionExpression();
// //
// // // funcDeclaration();
// // //
// // // function funcDeclaration () {
// // //   console.log("I am a function declaration");
// // // };
// // //
// // // funcDeclaration();
//
// // var sayHello = function ( name ) {
// //   var msg = "Hello " + name;
// //   console.log(msg);
// // };
// //
// // sayHello();
// // sayHello( "Groucho" );
// // sayHello( "Harpo" );
// // sayHello( "Zeppo" );
// //
// // var add = function ( firstNum, secondNum ) {
// //   var result = firstNum + secondNum;
// //   return result;
// // };
// //
// // var res = add( 18, 900 );
// // var secondResult = add( 200, 131 );
// // console.log( res, secondResult );
// //
// // add( 10, 42 );
// // add( 2, 9 );
// // add( 2, 2982 );
// //
// var createFullName = function ( first, last ) {
//   var fullName = first + " " + last;
//   return fullName;
// };
//
// createFullName( "Groucho", "Marx" );
// createFullName( "Chris", "Barnaby" );
// createFullName( "Hayley", "Petrov" );
//
// var firstName = "Olivia";
// var lastName = "Basheer";
//
// var olivia = createFullName(firstName, lastName);
// console.log(olivia); // => "Olivia Basheer"
//
// var multiply = function (x, y) {
//   return x * y; // NEEDS TO BE THE LAST LINE!
//   console.log("X Y");
// };
//
// var res = multiply(1, 5);
//
// // var res = multiply( multiply(1, 4), 5 );
// // var res = multiply(
// //   multiply(1, 4),
// //   multiply(1, 10)
// // );
//
//
// console.log( res );
//
// var doSomething = function () {
//   var scopedVar = "SCOPED VAR";
//   console.log( scopedVar );
// };
//
// console.log(scopedVar);
//
// console.log(someVar);
// doSomething();
//
//
//

// var globalVar = "GLOBAL VAR";
//
// var aNewFunctionScope = function () {
//   var localScoped = "LOCAL SCOPED VAR";
//
//   var anotherNewFunctionScope = function () {
//     var veryLocallyScoped = "VERY LOCALLY SCOPED";
//   }
//   console.log(veryLocallyScoped, localScoped, globalVar);
//
//   console.log(globalVar, localScoped);
// };
//
// aNewFunctionScope();


// We have got our global scope

var myGlobalVariable = "A GLOBAL VAR";

var myFirstScope = function () {
  var myLocalVariable = "A LOCAL VAR";

  var mySecondScope = function () {
    var myVeryLocalVar = "A VERY LOCAL VAR";
    console.log(myVeryLocalVar, myLocalVariable, myGlobalVariable);
  };

  mySecondScope();

  // From here, you can see global variables and variables created in this function
  console.log(myGlobalVariable, myLocalVariable);
};

myFirstScope();
console.log(myGlobalVariable);





var globalVar = null;
// The var keyword declares an identifier as well as declaring the scope
var add = function (x, y) {
  var localVar = x + y;
  globalVar = x + y;
};

add(1, 3);
console.log(globalVar);
