var app = app || {};

app.Posts = Backbone.Collection.extend({
  url: "/posts",
  // When we call .fetch(), make a GET request asking for JSON from here
  // The URL property should be pointed at the index action of whatever controller (Posts, Users, Tweets etc.)

  model: app.Post,

  initialize: function () {
    // console.log( "A new collection of posts was created" );
    this.on("add", function ( post ) {
      var title = post.get("title");
      // console.log( "A new post was added", post.toJSON(), title );
    });
  }

});

var postsCollection = new app.Posts();

// postsCollection.add({ title: "New Post 1" });
// postsCollection.add({ title: "New Post 2" });

// postsCollection.fetch();

postsCollection.fetch().done(function () {

  // console.log( postsCollection.length );

  postsCollection.each(function ( post ) {
    var title = post.get("title");
    console.log( title );
  });

});

// When we create a new instance of app.Posts, one of the things that is provided to us is an AJAX interface to a given URL
  // When I call .fetch(), it assumes that it is making a GET request asking for JSON from whatever ` url ` is provided
    // When the data comes back, it will be an array of objects. Each one of those objects will be turned into instances of ` app.Post `
