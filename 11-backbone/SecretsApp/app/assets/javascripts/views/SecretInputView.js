var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  events: {
    'click button' : 'createSecret'
  },

  createSecret: function () {
    var userInput = $("textarea").val();
    var secret = new app.Secret({
      content: userInput
    });
    secret.save(); // POST urlRoot

    app.secrets.add( secret ); // Fire the add event

    $("textarea").val('').focus();
  },

  render: function () {
    var templateMarkup = $("#SecretInputViewTemplate").html();
    this.$el.html( templateMarkup );
  }
});
