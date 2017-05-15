// What does app do?
  // Namespace (anything in our Backbone application should be stored in app)
  // Prevents conflicts (important things in Backbone won't conflict with other stuff)
  // Makes our code portable
  // Makes it easier to see the structure of the Backbone application

var app = app || {};
// The variable app should either contain the existing value of app or a new empty object
  // This guarantees that you always have the app object

// A Backbone model:
  // defaults {}
  // initialize
    // event handlers

app.Post = Backbone.Model.extend({
  urlRoot: "/posts",

  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: '...'
  },

  initialize: function () {
    // console.log( 'A new post was created' );

    this.on("change", function () {
      // console.log("Something changed in an app.Post");
    });
  }
});

// var p1 = new app.Post();
// console.log( p1.toJSON() );

// var p2 = new app.Post({
//   author: "Not Anonymous"
// });
// console.log( p2.toJSON() );

// var p3 = new app.Post({
//   author: "Backbone",
//   title: "Backbone Post",
//   content: "Backbone Post"
// });
// p3.set({
//   author: "Bill Murray"
// });
// console.log( p3.toJSON() );

// When we describe what an app.Post is, we need to add a urlRoot property
//   The urlRoot helps us work with AJAX
//
// // CRUD OPERATIONS
//
// // CREATE STEP
//
// var newPost = new app.Post();
// newPost.save();
//
// // READ STEP
//
// existingPost.fetch();
//
// // UPDATE STEP
//
// existingPost.set( ... );
// existingPost.save();
//
// // DELETE STEP
//
// existingPost.destroy()
//
//
//
//
//
//
//
//
// var newPost = new app.Post({ title: "CREATED WITH BACKBONE" });
// newPost.save();
//
// // When we run .save() on an instance of app.Post
//   // If the doesn't have an ID
//     // You can still call newPost.save();
//       // It will send a POST request to whatever urlRoot you specified
//     // To create a new Post, we would send a POST request to /posts
//       // Backbone is trying to automate that for us
//         // It does that by using the urlRoot property to figure out what URL to talk to
//   // If it does have an ID
//     // It assumes we are updating a record.
//       // To update a record we would typically send a PUT or a PATCH request to /posts/:id
//     // We have a base URL, we have an ID, let's combine them. /posts/id (urlRoot property + "/" + whatever ID is on the model)
//
// newPost.fetch();
//
// // When we run .fetch(), Backbone assumes we are trying to get details about a particular post (make a GET request to /posts/:id)
//   // It takes the urlRoot and adds the id of the model to it
//   // It makes a GET request to that URL
//
// newPost.save();
//
// // If newPost had an ID, this would update /posts/whatever ID
//
// newPost.destroy();
//
// // newPost has an ID
// // Typically, if we are trying to delete a record, we send a DELETE request to /posts/:id
//   // So take the urlRoot (/posts), add the ID to the end of it, and send a DELETE request there
