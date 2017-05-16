var app = app || {};

// config/routes.rb + all controllers

app.AppRouter = Backbone.Router.extend({
  routes: {
    'posts' : 'index',
    'posts/:id' : 'showPost'
  },

  index: function () {
    var appView = new app.AppView({
      collection: app.posts
    });
    appView.render();
  },

  showPost: function () {
    var postView = new app.PostView();
    postView.render();
  }
});
