// // class Movie
var Movie = Backbone.Model.extend({
  defaults: {
    title: "N/A",
    duration: 0,
    director: "N/A"
  },

  initialize: function () {
    // The keyword ` this ` refers to the current instance of the model (the one that was just created)

    this.on("change", function () {
      console.log("\tSomething changed");
    });

    this.on("change:title", function () {
      console.log("\tThe title was changed");
    });

    this.on("change:director change:duration", function () {
      console.log("\tThe director or duration changed");
    });

    console.log( "A movie was created" );
  }
});


var genericMovie = new Movie();

// Movie.create()
var bestMovie = new Movie({
  name: "Satantango",
  duration: 532,
  director: "Bela Tarr"
});

// Getters (Accessor Methods)
var title = bestMovie.get("name");
var director = bestMovie.get("director");
var duration = bestMovie.get("duration");

console.log( title, director, duration );

var theGrinch = new Movie({
  title: "The Grinch",
  primaryColour: "Green"
});

var allGrinchAttributes = theGrinch.toJSON();
console.log( allGrinchAttributes );

var almostBestMovie = new Movie({
  title: "Satan"
});

almostBestMovie.set("title", "Satantango");
almostBestMovie.set({
  duration: 532,
  director: "Bela Tarr"
});

var allAttrs = almostBestMovie.toJSON();
console.log( allAttrs );

var m1 = new Movie();
var m2 = new Movie({ title: "Toy Story" });

console.log( m1.toJSON() );
console.log( m2.toJSON() );

var Movies = Backbone.Collection.extend({
  model: Movie,
  initialize: function () {
    console.log("A new collection of movies was created");
  }
});

var myMovies = new Movies();

var toyStory = new Movie({ title: "Toy Story" });
var myCinema = new Movies( toyStory );

var biggerCinema = new Movies([
  genericMovie,
  bestMovie,
  theGrinch
]);

var newCinema = new Movies([
  { title: "Jurassic Park" },
  { title: "Jaws" },
  { title: "I am legend" },
  { title: "Godzilla" }
]);

console.log( newCinema.length );

newCinema.add({
  title: "The Man who knew Infinity"
}); // Will convert this object into an instance of Movie

var theBigLebowski = new Movie({
  title: "The Big Lebowski"
});
newCinema.add( theBigLebowski );

console.clear();

newCinema.each(function ( movie ) {
  var title = movie.get("title");
  console.log( "The title of the current movie is " + title );
});

var ourMixedCollection = new Movies([
  { title: "Movie One", goodMovie: false, tags: [ "comedy" ] },
  { title: "Movie Two", goodMovie: true, tags: [ "horror" ] },
  { title: "Movie Three", goodMovie: false, tags: [ "action" ] },
  { title: "Movie Four", goodMovie: false, tags: [ "action" ] },
  { title: "Movie Five", goodMovie: false, tags: [ "comedy", "action" ] },
  { title: "S Movie", goodMovie: true, tags: [ "history" ] },
  { title: "T Movie", goodMovie: false, tags: [ "comedy" ] },
  { title: "A Movie", goodMovie: true, tags: [ "documentary" ] },
  { title: "B Movie", goodMovie: false, tags: [ "comedy" ] },
]);

var allBadMovies = ourMixedCollection.where({
  goodMovie: false
});

console.log( ourMixedCollection.length );
ourMixedCollection.remove( allBadMovies );
console.log( ourMixedCollection.length );

var movieOne = new Movie({ title: "Movie One" });
var movieTwo = new Movie({ title: "Movie Two" });
var movieThree = new Movie({ title: "Movie Three" });

var myMovies = new Movies();
myMovies.add( movieOne );
myMovies.add( movieTwo );
myMovies.add( movieThree, { at: 0 } );

console.log( myMovies.pluck("title") );



//
//
//
//
//
//
//
//
// var BlogPost = Backbone.Model.extend({
//   defaults: {
//     title: "",
//     content: ""
//   },
//
//   initialize: function () {
//     console.log( "A new post was created" );
//     this.on("change", function () {
//       console.log("Something changed");
//     });
//
//     this.on("change:title", function ( blogPost ) {
//       var currentTitle = blogPost.get("title");
//       var previousTitle = blogPost.previousAttributes().title;
//       var warning = "The title changed from " + previousTitle + " to " + currentTitle;
//       console.warn( warning );
//     });
//
//     this.on("change:title change:content", function () {
//       console.log("The title or the content changed");
//     });
//   }
// });
//
// var p = new BlogPost();
// var p2 = new BlogPost();
//
// p.set({ title: "Hello World" });
// var title = p.get('title');
//
// var allAttrs = p2.toJSON();
// console.log( title, allAttrs );
//
// var bp = new BlogPost({ title: "Hello" });
// bp.set("title", "Hello World");
//
//
// // Describe what a collection of BlogPosts looks like this - Blog
//   // Add a function that will be run straight away
//   // Specify what type of data is stored
//   // Create a couple of collections:
//     // One should be empty
//     // One should have a single BlogPost
//     // One should have lots of blog posts
//       // This should be done with objects
//   // Add a bunch of blog posts
//   // Use underscore methods like .each, .where etc.
//
// var Blog = Backbone.Collection.extend({
//   model: BlogPost,
//   initialize: function () {
//     console.log("A new blog was created");
//   }
// });
//
// var newBlog = new Blog();
// var p1 = new BlogPost();
// var otherBlog = new Blog( p1 );
// var lotsOfBlogPosts = new Blog([
//   { title: "Lorem ipsum" },
//   { title: "Lorem ipsum 2" }
// ]);
//
// otherBlog.add({ title: "LOREM IPSUM" });




var Animal = Backbone.Model.extend({
  defaults: {
    stripes: 0,
    living: true,
    ecosystem: '',
    type: 'Animal'
  },

  initialize: function () {
    console.log("A new animal was born");
    this.on("change", function () {
      console.log("\tAn animal's attributes changed");
    });

    this.on("change:type", function ( animal ) {
      var currentType = animal.get("type");
      var previousType = animal.previousAttributes().type;
      var message = "\tThe type changed from " + previousType + " to " + currentType;
      console.log( message );
    });
  }
});

var a1 = new Animal();
var a2 = new Animal({ stripes: 1 });

var kangaroo = new Animal({ type: "Kangaroo" });
kangaroo.set({ type: "Giant Kangaroo" });

console.clear();

var Zoo = Backbone.Collection.extend({
  model: Animal,
  initialize: function () {
    console.log( "A new zoo was created" );

    this.on("add", function ( newAnimal ) {
      var animalName = newAnimal.get("type");
      var msg = "We just got a new " + animalName;
      console.log( msg );
    });

    this.on("remove", function (animal) {
      var lostAnimal = animal.get("type");
      console.log( lostAnimal + " just left the zoo" );
    });
  }
});

var gaZoo = new Zoo();

gaZoo.add( kangaroo );
gaZoo.add([
  { type: "Dumbo Octopus" },
  { type: "Gerenuk" },
  { type: "Japanese Spider Crab" }
]);

var animal = new Animal({
  type: "Acanthonus Armatus"
});
gaZoo.add( animal );

animal.set("type", "Bony-eared assfish");

var assfish = gaZoo.findWhere({ type: "Bony-eared assfish" });
gaZoo.remove( assfish );

console.log(
  gaZoo.pluck("type")
);

var sortedByType = gaZoo.sortBy("type");

gaZoo.add([
  { type: "Panda", incrediblyLazy: true }
]);

var panda = gaZoo.findWhere({ incrediblyLazy: true });

gaZoo.remove( panda );

console.log(
  gaZoo.pluck("type")
);















// A new model called BlogPost
  // Needs a console.log saying a new post was created as soon as it is created
  // Needs events for any change, change title, and change of content
  // Default values (title and content should both be strings)

  // Creating instances
  // Setting values
  // Getting values

// Add a new event to BlogPost that says
  // Anytime the title is changed
    // The title changed from "____" to "____"









// Creating a data type (blueprint)

  // var Movie = Backbone.Model.extend( ... );

// Creating an instance (an actual piece of data)

  // var m1 = new Movie();
  // var m2 = new Movie({ ... });

// Getting individual attributes

  // var someKey = m2.get("someKey");

// Getting all attributes

  // var allAttrs = m2.toJSON();

// Setting attributes

  // m1.set("key", "value");
  // m1.set({ key1: "value1", key2: "value2" });

// Setting default values

  // var Movie = Backbone.Model.extend({
  //   defaults: { ... }
  // });

// Listening for changes

  // In your initialize...
  // this.on("change", function () {});
  // this.on("change:key", function () {});
  // this.on("change:key1 change:key2", function () {});

// Creating a collection

  // var Movies = Backbone.Collection.extend({ ... });

// Creating an instance

  // var myMovies = new Movies();
  // var myMovies = new Movies( movie );
  // var myMovies = new Movies([ movieOne, movieTwo ]);
  // var myMovies = new Movies([
  //   { title: "" },
  //   { title: "" },
  //   { title: "" }
  // ]); // It will turn these objects into instances of Movie

console.clear();

var GenericView = Backbone.View.extend({
  el: "body",
    // The target DOM node ( this.el, this.$el )
      // The events are added within this

  events: {
    'click h1' : 'headingClicked'
  },

  headingClicked: function () {
    alert("An h1 in the body tag was clicked");
    this.$el.css("background", "hotpink");
  },

  initialize: function () {
    console.log("A new GenericView was created");
  },

  render: function () {
    // The keyword ` this ` refers to a particular instance of a view
    // When you specify the ` el ` property, you get given two things:
      // this.el - the pure DOM Node
      // this.$el - the jQuery selected version of the DOM node
      // Remember that the el property specifies a target (where the view should be loaded)
    this.$el.html( "<h1>Hello World</h1>" );
  }
});

// var gv = new GenericView();
// gv.render();

var deleteAnimal = function ( animalName ) {
  var animal = gaZoo.findWhere({
    type: animalName
  });
  gaZoo.remove( animal );
};

var ZooView = Backbone.View.extend({
  el: "#app",
    // this.el - document.querySelector("#app")
    // this.$el - $("#app")

  events: {
    'click button': 'deleteAnimal',
    'click h1': 'clickedHeading',
    'click li': 'showAnimal'
  },

  deleteAnimal: function ( e ) {
    // Figure out which list item was clicked
    var $clickedButton = $( e.currentTarget );
    // Get the type of animal
    var $li = $clickedButton.parent();
    var type = $li.text();
    type = type.replace("Delete", "");
    // Use the deleteAnimal function to remove that particular animal from the collection
    deleteAnimal( type );
  },

  showAnimal: function ( event ) {
    var $clickedItem = $( event.currentTarget );
    $clickedItem.css({
      background: "hotpink"
    });
    // Eventually we are going to go to the show page
  },

  clickedHeading: function () {
    console.log("The heading was clicked");
  },

  initialize: function () {
    console.log( "A new instance of ZooView was created" );
    this.listenTo( this.collection, 'add', this.render );
    this.listenTo( this.collection, 'remove', this.render );
  },

  render: function () {
    this.$el.html( "<h1>The animals in our zoo</h1>" );

    var $animalList = $("<ul></ul>");

    this.collection.each(function ( animal ) {
      var type = animal.get("type");
      var $animalListItem = $("<li></li>");
      $animalListItem.text( type );
      $animalListItem.append("<button>Delete</button>");
      $animalList.append( $animalListItem );
    });

    this.$el.append( $animalList );
  }
});

var zv = new ZooView({
  collection: gaZoo
});
zv.render();

gaZoo.add([
  { type: "Stink Badger" },
  { type: "Horse" },
  { type: "Blue ring Octopus" }
]);

gaZoo.add({
  type: "Duck"
});

console.clear();

var AnimalView = Backbone.View.extend({
  // el, events, initialize, render, ...
  el: "#app",

  initialize: function () {
    var view = this;
    view.listenTo( this.model, 'change', this.render );
  },

  render: function () {
    var animal = this.model;
    var type = animal.get("type");

    this.$el.html("<h1>" + type + "</h1>");
  }
});

gaZoo.add({ type: "Quokka" });
var quokka = gaZoo.findWhere({ type: "Quokka" });
console.log( quokka );

var av = new AnimalView({
  model: quokka
});
// Think of the object that you pass when you instantiate a view as instance variables being passed from a controller into a view in Rails

av.render();

var horse = gaZoo.findWhere({ type: "Horse" });
var horseView = new AnimalView({
  model: horse // This will be accessible in the view as this.model
});

var ErrorView = Backbone.View.extend({
  el: "#app",

  render: function () {
    this.$el.html("<h1>Something went wrong</h1>");
  }
});

var ev = new ErrorView();
ev.render();



// Song model
// Playlist Collection

// PlaylistView
  // This should update if the collection of songs changes (add or remove)
