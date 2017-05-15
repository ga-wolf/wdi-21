var User = Backbone.Model.extend({
  defaults: {
    password: "chicken",
    email: "",
    username: "aslkfnalskfnaslknlkasnlkfn"
  },
  initialize: function () {
    console.log("Someone signed up");
  }
});

var bill = new User({ id: 1, name: "Bill Murray" });
var groucho = new User({ id: 2, name: "Groucho Marx" });
var harpo = new User({ id: 3, name: "Harpo Marx" });
var zeppo = new User({ id: 4, name: "Zeppo Marx" });

var Users = Backbone.Collection.extend({
  model: User,
  initialize: function () {
    // The keyword ` this ` refers to the collection that was just created
    this.on("add", function () {
      console.log("A user has just signed up");
    });

    this.on("remove", function () {
      console.log("A user deleted their account");
    });
  }
});

var allUsers = new Users([
  bill,
  groucho,
  harpo,
  zeppo
]);

allUsers.add({
  name: "Jacques Cousteau"
});
allUsers.add({
  name: "Chad Kroeger"
}, { at: 0 });

// Find Chad, and store him in a variable
var chad = allUsers.where({
  name: "Chad Kroeger"
});
// Then I want to remove him from the collection of users
allUsers.remove( chad );

console.log( allUsers.pluck("name") );

// collection.get( ID ) - User.find_by(id: params[:id])

var firstUser = allUsers.get( 1 );
var thirdUserName = allUsers.get( 3 ).get( "name" );
var harpo = allUsers.findWhere({ name: "Harpo Marx" });

console.log( firstUser, thirdUserName );
console.log( harpo.toJSON() );
