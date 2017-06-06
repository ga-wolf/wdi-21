// // // Arrow Functions
// //   // Shorthand
// //     // const functionName = () => {};
// //   // Implicit Return
// //     // const implicitReturned = () => 42;
// //     // This will always return 42
// //
// // // var sayHello = function () {
// // //   console.log("Hello");
// // // };
// //
// // // const sayHi = function () {
// // const sayHi = () => {
// //   console.log("Hi");
// // };
// //
// // sayHi();
// //
// // const addNums = ( x, y ) => {
// //   console.log( x + y );
// // };
// //
// // // addNums( 4, 5 );
// // // addNums( 4, 9 );
// //
// // // const square = ( num ) => {
// // //   return num * num;
// // // };
// //
// // const square = ( num ) => num * num;
// //
// // const result = square( 5 );
// // console.log( result );
// //
// // const addImplicit = ( x, y ) => x + y;
// //
// // console.log(
// //   addImplicit( 20, 22 )
// // );
// //
// // // document.addEventListener("click", function () {
// // //   console.log("The page was clicked");
// // // });
// // document.addEventListener("click", () => {
// //   console.log("The page was clicked");
// // });
// //
// // // [ 1, 2, 3, 4, 5 ].forEach(function ( num ) {
// // //   console.log( "An iteration ran", num );
// // // });
// // [ 1, 2, 3, 4, 5 ].forEach(( num ) => {
// //   console.log( "An iteration ran", num );
// // });
// //
// // const nums = [ 3, 6, 9 ];
// //
// // const multipliedByFive = nums.map(function ( currentNum ) {
// //   return currentNum * 5;
// // });
// //
// // const implicit = nums.map( (n) => n * 5 );
// // const implicitTwo = nums.map(n => n * 5);
// //
// // console.log( implicit );
// // console.log( implicitTwo );
// //
// // console.log( multipliedByFive );
// //
// // const myNums = [ 1, 2, 3, 4, 5, 6 ];
// //
// // const evenNums = myNums.filter(function ( num ) {
// //   return num % 2 === 0;
// // });
// // // const evenNumbers = myNums.filter( ( n ) => {
// // //   return n % 2 === 0;
// // // });
// // // const evenNumbers = myNums.filter( ( n ) => n % 2 === 0 );
// // const evenNumbers = myNums.filter(n => n % 2 === 0);
// //
// // console.log( evenNums );
// // console.log(evenNumbers);
// //
// // console.clear();
// //
// // // var greet = function ( name ) {
// // //   if ( name === undefined ) {
// // //     name = "World";
// // //   }
// // //   console.log( "Hello " + name );
// // // };
// //
// // var greet = function ( name = "World" ) {
// //   console.log( "Hello " + name );
// // };
// //
// // greet( "Jane" );
// // greet();
// //
// // // const greeting = ( name ) => {
// // //   if ( name === undefined ) {
// // //     name = "World";
// // //   }
// // //   console.log( "Hello " + name );
// // // };
// // const greeting = ( name = "World" ) => {
// //   console.log( "Hello " + name );
// // };
// //
// // greeting( "Jane" );
// // greeting();
// //
// // const addTwoNums = ( x = 0, y = 0 ) => {
// //   console.log( x + y );
// // };
// //
// // addTwoNums( 10, 2 );
// // addTwoNums( 10 );
// // addTwoNums();
// //
// // const firstName = "Groucho";
// // const lastName = "Marx";
// //
// // let fullName = firstName + " " + lastName;
// // fullName = firstName + ' ' + lastName;
// //
// // fullName = `${firstName} ${lastName}`;
// // console.log( fullName );
// //
// // const brand = "Wurlitzer";
// // const keys = 64;
// //
// // // My Wurlitzer keyboard has 64 keys, or 8 octaves
// // const msg = `My ${brand} keyboard has ${keys} keys, or ${keys / 8} octaves.`;
// // console.log( msg );
// //
// // const greetBest = (name = "World") => `Hello ${name}`;
// //
// // const janeGreeting = greetBest( "Jane" );
// // const worldGreeting = greetBest();
// //
// // console.log( janeGreeting, worldGreeting );
// //
// // const title = "My blog post";
// // const subheading = "All about something";
// //
// // const html = `<h1>Title: ${title}</h1><h2>Subheading: ${subheading}</h2>`;
// // console.log( html );
// //
// // console.clear();
//
// let details = [ "Groucho", "Marx", "Duck Soup" ];
//
// // Array Destructuring
//
// let [ firstName, lastName, bestMovie ] = details;
// // let firstName = details[0];
// // let lastName = details[1];
// // let bestMovie = details[2];
//
// console.log( firstName, lastName, bestMovie );
//
//
// let userDetails = [ "Jane", "Serge", "jane@ga.co", 42 ];
// const [ first, partnerName, email ] = userDetails;
//
// console.log( first, email );
//
// let users = [ {}, {}, {}, {} ];
// let [ firstUser, secondUser, thirdUser, fourthUser ] = users;
//
// const explorer = {
//   first: "Jacques",
//   last: "Cousteau"
// };
//
// const { first: f, last } = explorer;
// // var f = explorer.first;
// // var last = explorer.last;
//
// console.log( f, last );
//
// const weather = {
//   wind: "SSW",
//   currentTemp: 15,
//   units: "Celsius",
//   windStrength: "25 knots"
// };
// const { wind, currentTemp: temp, units, windStrength } = weather;
//
// // Create variables for wind, currentTemp, units and windStrength
//   // Rename currentTemp to be temp
//
// const blogPost = [ { postTitle: "Heading" }, { userName: "Ron" } ];
// // Create variables for post and user
// const [ post, user ] = blogPost;
// console.log( post, user );
//
// // Spread Operator
//   // Take a collection of data, turn it into individual items
//
// const letters = "abcdefg";
// const alphabet = [ ...letters ];
//
// console.log( alphabet );
//
// let arrOne = [ "A", "B", "C" ];
// // To copy an array
// let arrTwo = [ ...arrOne ];
//
// arrOne.push( "D" );
// console.log( arrTwo );
//
// // Rest operator
//   // Can be used in two places:
//     // Where you receive parameters
//     // With array destructuring
//
// const receiveNumbers = ( ...nums ) => {
//   console.log( nums );
// };
//
// receiveNumbers( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );
//
// // const addInfinitely = ( ...nums ) => {
// //   const res = nums.reduce((sum, num) => {
// //     return sum + num;
// //   }, 0);
// //   console.log( res );
// // };
//
// const addInfinitely = (...nums) => nums.reduce((s, n) => s + n);
//
// console.log(
//   addInfinitely( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 )
// );
//
// const groucho = [ "Groucho", "Marx", "Duck Soup", "Animal Crackers", "Horse Feathers", "A Night at the Opera" ];
//
// const [ fName, lName, ...movies ] = groucho;
// // The first item will be stored in a const called fName
// // The second item will be stored in a const called lName
// // The rest of the items will be stored in an array called movies
//
// console.log( movies );

// Enhanced Object Literals

const firstName = "Groucho";
const lastName = "Marx";
const job = "Actor || Comedian";

const groucho = {
  firstName,
  lastName,
  job,
  somethingElse: true
};

console.log( groucho );

const temp = 15;
const windDirection = "SSW";
const windSpeed = 25;
const units = "Celsius";

const weather = { temp, windDirection, windSpeed, units };
console.log( weather );

const title = "Modal Title";
const modal = {
  title,
  backgroundColor: "rebeccapurple",
  open: function () {
    console.log("Modal opened");
  },
  close() {
    console.log("Modal closed");
  }
};

console.log( modal );
console.clear();


// class Shape
//   def initialize
//   end
// end

class Shape {
  constructor() {
    console.log("A new shape was created");
  }
  sayHi() {
    console.log("A shape says hi");
  }
}

let s = new Shape();
s.sayHi();

// class Rectangle < Shape
// end

class Rectangle extends Shape {
  sayRectangleStuff() {
    console.log( "I am a rectangle" );
  }
}

let rect = new Rectangle();
rect.sayRectangleStuff();
rect.sayHi();

class Player {
  constructor() {
    console.log("A new player was created");
  }
  speak() {
    console.log("Hi");
  }
  attack() {
    console.log("asknfaksnflasn");
  }
}
let p = new Player();
p.speak();
p.attack();

class Enemy extends Player {
  kill() {
    console.log("I just did something bad");
  }
}
let e = new Enemy();
e.kill();
e.speak();

// Player
  // speak
  // greet
  // attack

// Enemy
  // kill
  // Plus speak, greet, attack
