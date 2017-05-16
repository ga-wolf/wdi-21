var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  render: function () {
    var templateMarkup = $("#AppViewTemplate").html();
    this.$el.html( templateMarkup );

    var secretInputView = new app.SecretInputView();
    secretInputView.render();
  }
});
