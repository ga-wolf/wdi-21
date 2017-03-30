// console.log("Page Loaded");

var emptyArr = [];
var alphabet = ["a", "b", "c", "d", "e"];

var alphabetAsString = "abcdefghijklmnopqrstuvwxyz";
var alphabetArray = alphabetAsString.split('');

var tenthLetter = alphabetAsString[9];
var fifthLetter = alphabetAsString[4];
var lastLetter = alphabetAsString[25];
lastLetter = alphabetAsString[ alphabetAsString.length - 1 ];

var sillyArray = [
  false,
  '',
  undefined,
  null,
  [ 'INNER ARRAY 0', 'INNER ARRAY 1' ],
  {},
  1
];

// Find the index of the boolean false
var falseSearch = sillyArray.indexOf(false);
console.log(falseSearch);

// Find the index of INNER ARRAY 1 in the inner array
var innerArrayOne = sillyArray[4].indexOf("INNER ARRAY 1");
console.log(innerArrayOne);

var nullItem = sillyArray[3];
var innerArray = sillyArray[4];

var innerArrayItem = sillyArray[4][0];
innerArrayItem = innerArray[0];

// Reassigning Values

var rainbowColors = [
  "red",
  "orange",
  "yellow",
  "blue",
  "black"
];

// Change the first colour to Indigo
rainbowColors[0] = "Indigo";

// Change the index 3 element to Purple
rainbowColors[3] = "Purple";

// Change the last item to Gainsboro using the length property
rainbowColors[rainbowColors.length - 1] = "Gainsboro";

// Put something in the index 90
rainbowColors[90] = "This is a bad idea";

var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

// Find where the Stylophone is in this array
var styloIndex = weirdInstruments.indexOf("Stylophone");
var stylo = weirdInstruments[ styloIndex ];
console.log(stylo);

// Find where the Pyrophone is
var pyroIndex = weirdInstruments.indexOf("Pyrophone");

// Check to see if the Seaboard is in there
var seaboardIndex = weirdInstruments.indexOf("Roli Seaboard");

if ( seaboardIndex < 0 ) {
  console.log("The Seaboard is not in that array");
}

// Adding Elements

var fruits = ["Orange", "Banana", "Kiwi Fruit"];

// Add to the end - .push()
fruits.push("Grapes");
fruits.push("Red Apple", "Green Apple");
console.log( fruits );

// Add to the start - .unshift()
fruits.unshift("Mango");
console.log( fruits );

// Removing Items

// Remove from the end - .pop();
fruits.pop();
fruits.pop();
console.log( fruits );

// Remove from the start - .shift();
fruits.shift();


var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

// .splice( startingIndex, howManyItemsToRemove, what, items, to, add );

// Remove just the stylophone
weirdInstruments.splice(2, 1);
console.log(weirdInstruments);

// Remove from the Ondes Martenot to the Pyrophone (bonus points if you use the .length property)
var ondesIndex = weirdInstruments.indexOf("Ondes Martenot");
var lastIndex = weirdInstruments.length - 1;
weirdInstruments.splice(ondesIndex, lastIndex);
console.log(weirdInstruments);

var weirdInstruments = [
  "Badgermin",
  "The Great Stalacpipe Organ",
  "Stylophone",
  "Ondes Martenot",
  "Sharpischord",
  "Hydraulophone",
  "Pyrophone"
];

// Teenage Engineering OP-1 needs to go in the index of 4
console.log(weirdInstruments);
weirdInstruments.splice(4, 0, "OP1");
console.log(weirdInstruments);
