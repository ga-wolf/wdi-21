var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets",

  defaults: {
    content: "I put bleach in your coffee"
  },

  initialize: function () {
    console.log("A new secret was created");
  }
});

// var s = new app.Secret();

// CRUD Operations
  // CREATE (will only happen when the secret has no ID)
    // secret.save(); POST /secrets
    //

  // READ (will need an ID)
    // secret.fetch();
    // GET /secrets/:id

  // UPDATE (will need an ID)
    // secret.set( ... );
    // secret.save();
    // PUT /secrets/:id

  // DELETE (will need an ID)
    // secret.destroy();
    // DELETE /secrets/:id
