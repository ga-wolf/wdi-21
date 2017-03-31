
var DogFactory = function ( name ) {
  var dog = {};

  dog.name = name;
  dog.alive = true;
  dog.eat = function () {
    console.log("I eat endlessly");
  };

  return dog;
};

var lab = DogFactory("Buddy");
var tammy = DogFactory("Tammy");

console.log(lab, tammy);


var BeachFactory = function ( name, color ) {
  // Create something to house all properties and functionality
  var beach = {};

  beach.name = name;
  beach.color = color;
  beach.wavesBreaking = function () {
    console.log("Swoooooosh");
  };

  // Give the object back in case someone needs it
  return beach;
};

var spring = BeachFactory("Spring", "white");
var whitehaven = BeachFactory("Whitehaven", "very white");
console.log( spring );


// There should be Players
  // There should be Enemies
  // The enemies should inherit everything the Player has
  // The Allies should inherit everything the Player has

console.clear();

var PlayerFactory = function ( name ) {
  var player = {};

  player.name = name;
  player.sword = "Sharp";
  player.hp = 100;
  player.score = 0;

  return player;
};

var olivia = PlayerFactory("Olivia");
var charlotte = PlayerFactory("Charlotte");

// console.log(olivia, charlotte);

var EnemyFactory = function ( name ) {
  // I know I can create a generic Player
  var enemy = PlayerFactory( name );

  // An enemy is just a generic Player, but with illIntent and an evilHeart
  enemy.illIntent = true;
  enemy.evilHeart = true;

  return enemy;
};

var scar = EnemyFactory("Scar");
var subZero = EnemyFactory("SubZero");

console.log(scar, subZero);

// When I create a Player (I am going to use a PlayerFactory)
  // A sword
  // Health Points
  // Score
  // Name

// When I create an enemy (I am going to use an EnemyFactory)
  // It has everything that a player has, plus:
  // illIntent
  // evilHeart

// When I create an ally (I am going to use an AllyFactory)
  // It has everything that a player has, plus:
  // sharesABeer






// The ` this ` keyword is used for:
// - To make code flexible
// - It saves time
//
// It is just JS trying to help by giving us a context. The code that is currently running, you probably care about this value
//
// There are 4 ways it is set up, but basically we find the callsite and look to the left and right
//
// The GLOBAL BINDING
// - Refers to the window
// - There won't be the new keyword, there won't be .call, .apply or .bind and it won't be a property
// - It should just be a function call on its own
//
// The IMPLICIT BINDING
// - Refers to the object that some method is in
// - There won't be the new keyword, there won't be .call, .apply or .bind. But it will be a method (there will be something before the function name). ` person.speak() `
//
// The EXPLICIT BINDING
// - Refers to exactly what we tell it to
// - There will be .call, .apply or .bind (the .bind saves it for later). There won't be new and it won't be a method call
// - ` sayHello.call(person); `
//
// The NEW BINDING
// - Refers to a new empty object
// - There won't be .call, .apply or .bind. It won't be a method. But there will be the word ` new `
// - ` new Person() `
