var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'initializeSecrets'
  },

  initializeSecrets: function () {
    var appView = new app.AppView();
    appView.render();
  }
});
