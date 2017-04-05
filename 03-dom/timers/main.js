
var delayThisFunction = function () {
  console.log("This was delayed");
};
// delayThisFunction();

// window.setTimeout( callback, delayInMilliseconds );

// You define some code that you want to run (this is your callback function)
  // Hey JS, I have got a whole bunch of code - I don't want to be in charge of when it runs. You run it internally for me
  // JS - delay the execution of this

// window.setTimeout(delayThisFunction, 5000);
//
// window.setTimeout(function () {
//   console.log("This was called after 3000 milliseconds");
// }, 3000);

// window.setInterval( callback, delayInMilliseconds );

// var doThisRegularly = function () {
//   console.log("I should be run every second");
// };
// // doThisRegularly();
//
// window.setInterval(doThisRegularly, 1000);
//
// window.setInterval(function () {
//   console.log("Called very regularly");
// }, 500);

// Our First Animation

// Starting Point
  // opacity: 1.0
// Ending Point
  // opacity: 0.0
// Step or the Increment
  // -= 0.1
// Delay between steps
  // 100ms

var bill = document.querySelector("#bill");
bill.style.opacity = 1.0;

var makeBillFade = function () {
  bill.style.opacity -= 0.01;
};

// window.setInterval( makeBillFade, 30 );


// Starting Point
  // position absolute
  // top 0px
  // left 0px
// Ending Point ???
// Step or Increment
  // Add 10px to the left position
// How regularly?
  // 100ms

var bill = document.querySelector("#bill");
bill.style.position = "absolute";
bill.style.top = "0px";
bill.style.left = "0px";

var moveBill = function () {
  // "10px" --- > 10
  var currentLeft = parseInt( bill.style.left );
  var desiredLeft = currentLeft + 1;

  bill.style.left = desiredLeft + "px";
};
// moveBill();

window.setInterval( moveBill, 30 );
