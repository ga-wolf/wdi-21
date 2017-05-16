var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",

  render: function () {
    // Store all of the HTML from #PostViewTemplate in a variable called templateMarkup
    var templateMarkup = $("#PostViewTemplate").html();
    // Set the HTML of this.$el to be the templateMarkup
    this.$el.html( templateMarkup );
  }
});
