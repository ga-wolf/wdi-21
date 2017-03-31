var emptyObject = {};

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var title = movie.title;
var director = movie.director;
var duration = movie.duration;
console.log(title, director, duration);

var rating = movie.rating;
console.log(rating);

var title = movie["title"];
var duration = movie["duration"];
console.log(title, duration);

// Reassigning Values

movie.title = "SATANTANGO";
movie["title"] = "SATANTANGO!";

// Adding New Values

movie.language = "Hungarian";
movie.parts = 12;
console.log(movie);

// Destroying Properties

var bestCamera = {
  brand: "Leica",
  model: "M3",
  memoryCard: "SD"
};

console.log(bestCamera);
delete bestCamera.memoryCard;
console.log(bestCamera);

var bookSeries = {
  name: "In Search of Lost Time",
  author: "Marcel Proust",
  books: [
    "Swann's Way",
    "In the Shadow of Young Girls in Flower",
    "The Guermantes Way",
    "Sodom and Gomorrah",
    "The Prisoner",
    "The Fugitive",
    "Time Regained"
  ]
};

var seriesTitle = bookSeries.name;
var author = bookSeries.author;
var books = bookSeries.books;

var firstBook = bookSeries.books[0];
var lastBook = bookSeries.books[
  bookSeries.books.length - 1
];
console.log(lastBook);

for ( var index = 0; index < bookSeries.books.length; index += 1 ) {

  var currentBook = bookSeries.books[index];
  console.log(currentBook);

}

console.clear();

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  birth: {
    day: 11,
    month: 6,
    year: 1910
  }
};

console.log(explorer);
var fullName = explorer.firstName + " " + explorer.lastName;
console.log(fullName);

var birthYear = explorer.birth.year;
console.log(birthYear);

var marxFamily = [
  {
    name: "Groucho",
    year: 1890,
    displayFullName: function () {
      console.log(this.name + " Marx");
    }
  },
  {
    name: "Harpo",
    year: 1888,
    displayFullName: function () {
      console.log(this.name + " Marx");
    }
  },
  {
    name: "Chico",
    year: 1887,
    displayFullName: function () {
      console.log(this.name + " Marx");
    }
  },
  {
    name: "Zeppo",
    year: 1901,
    displayFullName: function () {
      console.log(this.name + " Marx");
    }
  },
  {
    name: "Gummo",
    year: 1893,
    displayFullName: function () {
      console.log(this.name + " Marx");
    }
  }
];

// marxFamily[0].displayFullName();

// "Groucho Marx was born in 1890"
// "Harpo Marx was born in 1888"

// I need to loop through the marxFamily
  // For each iteration of the loop
    // I want to create a brother variable
    // I want to access the name and the year
      // I want to output some string with that data

for ( var i = 0; i < marxFamily.length; i += 1 ) {
  var brother = marxFamily[i];
  var name = brother.name; // marxFamily[i].name
  var birthYear = brother.year;
  var msg = name + " Marx was born in " + birthYear;
  console.log( msg );
}

console.clear();

// LOOPS IN JS OBJECTS
// This is not normally a great idea

var movie = {
  title: "Satantango",
  director: "Bela Tarr",
  duration: 432
};

var titleKey = "title";

movie.title;
movie["title"];
movie[titleKey];
movie.titleKey; // => undefined

var arrayOfKeys = Object.keys(movie);
console.log(arrayOfKeys);

for ( var i = 0; i < arrayOfKeys.length; i += 1 ) {
  var currentKey = arrayOfKeys[i];
  var currentValue = movie[currentKey];
  var msg = "The key is " + currentKey;
  msg += " and the value is " + currentValue;
  // console.log(i, currentKey, currentValue);
  console.log(msg);
}
// The key is ____ and the value is ____

for ( var currentKey in movie ) {
  var msg = "Key: " + currentKey;
  msg += ". Value: " + movie[currentKey];
  console.log(msg);
}

console.clear();

var explorer = {
  firstName: "Jacques",
  lastName: "Cousteau",
  displayPurpose: function () {
    alert("Hello World");
  },
  travel: function () {
    console.log("I am going somewhere");
  },
  sayHi: function () {
    return "Hello";
  }
};

console.log(explorer);

var Triangle = {
  isEquilateral: function () {
    return true;
  },
  isScalene: function () {
    return false;
  }
};

// More Complicated Methods

var exp = {
  firstName: "Jacques",
  lastName: "Cousteau",
  occupation: "Explorer",
  status: "Legendary",
  displayFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
  displayOccupation: function () {
    var msg = "I am a " + this.status + " " + this.occupation;
    return msg;
  },
  introduce: function () {
    var fullName = this.displayFullName(); // call site
    var occupation = this.displayOccupation(); // call site
    var msg = "Hi there, I am " + fullName;
    msg += ". " + occupation;

    return msg;
  }
};

var introduction = exp.introduce();
console.log(introduction);
