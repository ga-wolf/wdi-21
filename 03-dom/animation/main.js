
// Change in some property over time

// What element am I animating?
var bill = document.querySelector("img");

// What timer am I using?
var billTimerID = null;

// What is the starting point of the animation?
bill.style.width = "200px";

// For each frame of the animation, what needs to happen? This is the callback
var animateBill = function () {
  var currentWidth = bill.style.width;
    // => "200px"
  currentWidth = parseInt( currentWidth );
    // => 200
  var desiredWidth = currentWidth + 1;
    // => 201

  if ( desiredWidth <= window.innerWidth - 16 ) {
    bill.style.width = desiredWidth + "px";
  } else {
    // window.clearInterval( billTimerID );
  }
};

// Setting up the timer
  // 1000 / 60 === 60 frames per second
billTimerID = window.setInterval(
  animateBill,
  1000 / 60
);
