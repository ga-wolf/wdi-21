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
  }
});

$(document).ready(function () {

  var appView = new app.AppView();
  appView.render();

});
