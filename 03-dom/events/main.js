
// node.addEventListener('eventtype', callback)
var button = document.querySelector("#myButton");

var annoyUser = function () {
  console.log("I am annoying");
};

button.addEventListener('click', annoyUser);

// Find the DOM node
var appearanceButton = document.querySelector("#appearance");
console.log(appearanceButton);

// Figure out the callback
  // I want to change the background of the body tag
  // I want to change the color of all of the text
var changePageAppearance = function () {
  var currentBackground = document.body.style.background;

  if ( currentBackground === "hotpink" ) {
    document.body.style.background = "gainsboro";
  } else {
    document.body.style.background = "hotpink";
  }
};
// Figure out the event type
  // Click
// Bind the event type, the DOM node and the callback function with addEventListener

appearanceButton.addEventListener('click', changePageAppearance);

// I'm listening for a click event on the button with id lorem
  // When that takes place...
    // Create a new Paragraph tag
    // Set the text of that to be lots of lorem ipsum
    // Place the paragraph at the end of the body tag
var loremButton = document.querySelector("#lorem");
loremButton.addEventListener("click", function () {
  var newParagraph = document.createElement("p");
  newParagraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quam sit nulla, perspiciatis, expedita ad soluta temporibus consequuntur laudantium explicabo excepturi minus voluptatem, obcaecati nihil aperiam! Distinctio ipsa, voluptas quos.";
  document.body.appendChild( newParagraph );
});

var temp = document.querySelector( ".temporary" );

var myCallback = function () {
  console.log("This should run");
  temp.style.display = "none"
};

temp.addEventListener( "click", myCallback );
// temp.removeEventListener( "click", myCallback );

// Events require: a DOM node, a callback, an event type and something that binds them all together (event listener or the event handler)

var eventButton = document.querySelector("#event");
var anotherCallback = function (event) {
  console.log(event);
};
eventButton.addEventListener("click", anotherCallback);
// eventButton.addEventListener("click", function (event) {
//   console.log(event);
// });


// When I click the heading, change the text colour to salmon
var myHeading = document.querySelector("h1");
var salmonizeText = function () {
  myHeading.style.color = "salmon";
};
myHeading.addEventListener("click", salmonizeText);

var onBrowserScroll = function () {
  console.log("Scrolled");
};
window.addEventListener( "scroll", onBrowserScroll );


var onMouseMove = function ( e ) {
  var xPos = e.clientX;
  var yPos = e.clientY;
  console.log("X Position:", xPos, "Y Position:", yPos);
};
// window.addEventListener('mousemove', onMouseMove);

window.addEventListener('resize', function () {
  var currentWidth = window.innerWidth;
  console.log("Current Width:", currentWidth);
});

// var bill = document.querySelector("#bill");
// var makeBillBigger = function () {
//   bill.style.width = "400px";
// };
// bill.addEventListener("click", makeBillBigger);
//
// var nick = document.querySelector("#nick");
// var makeNickBigger = function () {
//   console.log("Enlarge the photo of Nick");
// };
// nick.addEventListener("click", makeNickBigger);
//
// var steve = document.querySelector("#steve");
// var makeSteveBigger = function () {
//   console.log("Enlarge the photo of Steve");
// };
// steve.addEventListener("click", makeSteveBigger);

var allImages = document.querySelectorAll("img");

var makeImageBigger = function () {
  var currentWidth = this.style.width;

  // What is the current width?
    // If it is 300px, make it 200px
    // If it isn't 300px, make it 300px
  if ( currentWidth === "300px" ) {
    this.style.width = "200px";
  } else {
    this.style.width = "300px";
  }

  // ` this ` refers to the DOM node that was being interacted with
    // Or the element that the event listener was added to
};

for ( var i = 0; i < allImages.length; i += 1 ) {
  var currentImage = allImages[i];
  currentImage.addEventListener(
    "click",
    makeImageBigger
  );
}

// What element do you care about? DOM node or the window
// What do you want to do? Your callback function
// What is your event type? 'click', 'scroll'...
// Create an event listener that joins all of those things together

// window.setTimeout( callback, delayInMilliseconds );

var logUserOut = function () {
  console.log("You have been inactive for a while, you have been logged out");
};
// Delay the execution of logUserOut by 1 second (1000ms)
window.setTimeout( logUserOut, 5000 );

var saveAtRegularIntervals = function () {
  console.log("We have just auto-saved your work, you can thank us later");
};
// I want to save the user's work every 1 second
// window.setInterval( saveAtRegularIntervals, 1000 );

// I want to spawn an enemy every three seconds
  // But I also want to be able to stop this
var spawnEnemy = function () {
  console.log("A new enemy is born");
};

var enemyTimerID = window.setInterval(spawnEnemy, 500);

var stopSpawningEnemies = function () {
  window.clearInterval( enemyTimerID );
};
