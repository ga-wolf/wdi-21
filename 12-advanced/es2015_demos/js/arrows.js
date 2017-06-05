// Arrow Functions
  // Shorthand
    // const functionName = () => {};
  // Implicit Return
    // const implicitReturned = () => 42;
    // This will always return 42

// var sayHello = function () {
//   console.log("Hello");
// };

// const sayHi = function () {
const sayHi = () => {
  console.log("Hi");
};

sayHi();

const addNums = ( x, y ) => {
  console.log( x + y );
};

// addNums( 4, 5 );
// addNums( 4, 9 );

// const square = ( num ) => {
//   return num * num;
// };

const square = ( num ) => num * num;

const result = square( 5 );
console.log( result );

const addImplicit = ( x, y ) => x + y;

console.log(
  addImplicit( 20, 22 )
);

// document.addEventListener("click", function () {
//   console.log("The page was clicked");
// });
document.addEventListener("click", () => {
  console.log("The page was clicked");
});

// [ 1, 2, 3, 4, 5 ].forEach(function ( num ) {
//   console.log( "An iteration ran", num );
// });
[ 1, 2, 3, 4, 5 ].forEach(( num ) => {
  console.log( "An iteration ran", num );
});

const nums = [ 3, 6, 9 ];

const multipliedByFive = nums.map(function ( currentNum ) {
  return currentNum * 5;
});

const implicit = nums.map( (n) => n * 5 );
const implicitTwo = nums.map(n => n * 5);

console.log( implicit );
console.log( implicitTwo );

console.log( multipliedByFive );

const myNums = [ 1, 2, 3, 4, 5, 6 ];

const evenNums = myNums.filter(function ( num ) {
  return num % 2 === 0;
});
// const evenNumbers = myNums.filter( ( n ) => {
//   return n % 2 === 0;
// });
// const evenNumbers = myNums.filter( ( n ) => n % 2 === 0 );
const evenNumbers = myNums.filter(n => n % 2 === 0);

console.log( evenNums );
console.log(evenNumbers);

console.clear();

// var greet = function ( name ) {
//   if ( name === undefined ) {
//     name = "World";
//   }
//   console.log( "Hello " + name );
// };

var greet = function ( name = "World" ) {
  console.log( "Hello " + name );
};

greet( "Jane" );
greet();

// const greeting = ( name ) => {
//   if ( name === undefined ) {
//     name = "World";
//   }
//   console.log( "Hello " + name );
// };
const greeting = ( name = "World" ) => {
  console.log( "Hello " + name );
};

greeting( "Jane" );
greeting();

const addTwoNums = ( x = 0, y = 0 ) => {
  console.log( x + y );
};

addTwoNums( 10, 2 );
addTwoNums( 10 );
addTwoNums();

const firstName = "Groucho";
const lastName = "Marx";

let fullName = firstName + " " + lastName;
fullName = firstName + ' ' + lastName;

fullName = `${firstName} ${lastName}`;
console.log( fullName );

const brand = "Wurlitzer";
const keys = 64;

// My Wurlitzer keyboard has 64 keys, or 8 octaves
const msg = `My ${brand} keyboard has ${keys} keys, or ${keys / 8} octaves.`;
console.log( msg );

const greetBest = (name = "World") => `Hello ${name}`;

const janeGreeting = greetBest( "Jane" );
const worldGreeting = greetBest();

console.log( janeGreeting, worldGreeting );

const title = "My blog post";
const subheading = "All about something";

const html = `<h1>Title: ${title}</h1><h2>Subheading: ${subheading}</h2>`;
console.log( html );
