var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: "li",
  // tagName will create a new element - $("<li></li>")
    // Assigns the new element to:
      // this.el - the pure DOM node
      // this.$el - the jQuery selected version
  // tagName creates something, el references something

  events: {
    'click' : 'showPost'
  },

  showPost: function () {
    var id = this.model.get("id");
    app.router.navigate( "/posts/" + id, true );
  },

  render: function () {
    // Create a list item (this has been done for us - Backbone used the tagName property)
    var title = this.model.get("title");
    // Set the text
    this.$el.html( title );
    // Put it on the page (at the end of #posts)
    this.$el.appendTo( "#posts" );
  }
});

// var post = new app.Post({
//   title: "Dynamic Post"
// });
//
// var plv = new app.PostListView({
//   model: post
// });
