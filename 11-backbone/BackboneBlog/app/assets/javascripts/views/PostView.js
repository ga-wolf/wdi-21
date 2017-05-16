var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",

  render: function () {

    var post = this.model;
    var templateMarkup = $("#PostViewTemplate").html();
    var actualTemplate = _.template( templateMarkup );
    // Figure out how you can pass all of the post's attributes into the actualTemplate function
    var compiledTemplate = actualTemplate( post.toJSON() );

    // Set the HTML of this.$el to be the templateMarkup
    this.$el.html( compiledTemplate );
  }
});
