var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",

  model: app.Secret,

  initialize: function () {
    this.on("add", function ( secret ) {

      var secretView = new app.SecretView({
        model: secret
      });
      secretView.render();

    });
  }
});

// var secrets = new app.Secrets();

// READ Step - GET /secrets
// secrets.fetch();
