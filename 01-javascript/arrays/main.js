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
  [ 'INNER ARRAY 0' ],
  {},
  1
];

var nullItem = sillyArray[3];
var innerArray = sillyArray[4];

var innerArrayItem = sillyArray[4][0];
innerArrayItem = innerArray[0];

console.log(innerArrayItem);
