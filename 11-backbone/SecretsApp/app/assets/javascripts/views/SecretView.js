var app = app || {};

// Create a new list item
// Set the text to be the content of the model that was provided
// Prepend it to #secrets

app.SecretView = Backbone.View.extend({
  tagName: "li",

  render: function () {
    var content = this.model.get("content");
    this.$el.html( content );
    this.$el.prependTo( "#secrets" );
  }
});
