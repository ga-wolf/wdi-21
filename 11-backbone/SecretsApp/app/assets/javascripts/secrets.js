var app = app || {};

app.router = new app.AppRouter();

$(document).ready(function () {

  Backbone.history.start();

  app.secrets = new app.Secrets();
  app.secrets.fetch(); // GET url

  window.setInterval(function () {
    app.secrets.fetch();
  }, 5000);

});
