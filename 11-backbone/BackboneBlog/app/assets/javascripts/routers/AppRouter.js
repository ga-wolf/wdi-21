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

  showPost: function ( id ) {
    // Post.find_by(id: params[:id])
    var post = app.posts.get( id );
    var postView = new app.PostView({
      model: post
    });
    postView.render();
  }
});
