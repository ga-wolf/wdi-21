var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",
  // Target element (where the view should be loaded)
    // this.el
    // this.$el

  render: function () {
    // this.$el.html( "<h1>AppView rendered</h1>" );

    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    this.collection.each(function ( post ) {

      var plv = new app.PostListView({
        model: post
      });
      plv.render();

    });
  }
});

// $(document).ready(function () {
//
//   // Whenever we instantiate a View...
//     // What data does it need? (a model or a collection)
//     // Where is the template? Or are we trying to create elements on the fly?
//
//   var posts = new app.Posts([
//     { title: "Post 1" },
//     { title: "Post 2" },
//     { title: "Post 3" },
//   ]);
//
//   var appView = new app.AppView({
//     collection: posts
//   });
//   appView.render();
//
// });
