var app = app || {};

app.posts = new app.Posts();
app.router = new app.AppRouter();

$(document).ready(function () {

  app.posts.fetch().done(function () {

    Backbone.history.start();

  });

});
