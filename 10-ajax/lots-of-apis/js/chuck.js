// IMPORTANT VARIABLES
  // URLs
  // Methods
  // Data Types

var CHUCK_URL = 'http://api.icndb.com/jokes/random';
var CHUCK_METHOD = 'GET';
var CHUCK_TYPE = 'JSON';

// A function to display a single piece of data

var displayChuckJoke = function ( joke ) {
  var actualJoke = joke.value.joke;

  var $newParagraph = $("<p></p>");
  $newParagraph.text( actualJoke );

  $newParagraph.prependTo( ".chuck .content" );
  // $(".chuck .content").prepend( $newParagraph );
};

// How to get a Chuck Joke (makes the AJAX request)

var getChuckJoke = function () {
  $.ajax({
    url: CHUCK_URL,
    method: CHUCK_METHOD,
    dataType: CHUCK_TYPE,
    data: {
      limitTo: "[nerdy]"
    }
  }).done(function (response) {
    displayChuckJoke( response );
  });
};

$(document).ready(function () {

  getChuckJoke();

  var CHUCK_TIMER = window.setInterval(function () {
    getChuckJoke();
  }, 3000);

  $(".chuck button").on("click", function () {
    window.clearInterval( CHUCK_TIMER );
  });

});
