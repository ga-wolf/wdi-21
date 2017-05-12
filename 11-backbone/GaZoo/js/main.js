// // class Movie
// var Movie = Backbone.Model.extend({
//   defaults: {
//     title: "N/A",
//     duration: 0,
//     director: "N/A"
//   },
//
//   initialize: function () {
//     // The keyword ` this ` refers to the current instance of the model (the one that was just created)
//
//     this.on("change", function () {
//       console.log("\tSomething changed");
//     });
//
//     this.on("change:title", function () {
//       console.log("\tThe title was changed");
//     });
//
//     this.on("change:director change:duration", function () {
//       console.log("\tThe director or duration changed");
//     });
//
//     console.log( "A movie was created" );
//   }
// });
//
// var genericMovie = new Movie();
//
// // Movie.create()
// var bestMovie = new Movie({
//   name: "Satantango",
//   duration: 532,
//   director: "Bela Tarr"
// });
//
// // Getters (Accessor Methods)
// var title = bestMovie.get("name");
// var director = bestMovie.get("director");
// var duration = bestMovie.get("duration");
//
// console.log( title, director, duration );
//
// var theGrinch = new Movie({
//   title: "The Grinch",
//   primaryColour: "Green"
// });
//
// var allGrinchAttributes = theGrinch.toJSON();
// console.log( allGrinchAttributes );
//
// var almostBestMovie = new Movie({
//   title: "Satan"
// });
//
// almostBestMovie.set("title", "Satantango");
// almostBestMovie.set({
//   duration: 532,
//   director: "Bela Tarr"
// });
//
// var allAttrs = almostBestMovie.toJSON();
// console.log( allAttrs );
//
// var m1 = new Movie();
// var m2 = new Movie({ title: "Toy Story" });
//
// console.log( m1.toJSON() );
// console.log( m2.toJSON() );
//
var BlogPost = Backbone.Model.extend({
  defaults: {
    title: "",
    content: ""
  },

  initialize: function () {
    console.log( "A new post was created" );
    this.on("change", function () {
      console.log("Something changed");
    });

    this.on("change:title", function ( blogPost ) {
      var currentTitle = blogPost.get("title");
      var previousTitle = blogPost.previousAttributes().title;
      var warning = "The title changed from " + previousTitle + " to " + currentTitle;
      console.warn( warning );
    });

    this.on("change:title change:content", function () {
      console.log("The title or the content changed");
    });
  }
});

var p = new BlogPost();
var p2 = new BlogPost();

p.set({ title: "Hello World" });
var title = p.get('title');

var allAttrs = p2.toJSON();
console.log( title, allAttrs );

var bp = new BlogPost({ title: "Hello" });
bp.set("title", "Hello World");


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
