var RON_BASE_URL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
var RON_HTTP_METHOD = "GET";
var RON_DATA_TYPE = "JSON";

// Display a single Ron Swanson quote

var displayRonQuote = function ( quote ) {
  // I want to create a new paragraph
  var $newParagraph = $("<p></p>");

  // I want to set the text of that paragraph to be the quote
  $newParagraph.text( quote );

  // I want to put it on the page
  var $swansonContent = $(".swanson .content");
  $swansonContent.prepend( $newParagraph );
};

// Ask for a Ron Swanson quote
  // What is the URL?
  // "http://ron-swanson-quotes.herokuapp.com/v2/quotes"

  // What is the HTTP Method || Verb?
  // "GET"

  // What am I requesting in terms of the data type?
  // "JSON"

  // Do I need to provide any parameters?
  // no
var getRonQuote = function () {
  $.ajax({

    url: RON_BASE_URL,
    method: RON_HTTP_METHOD,
    dataType: RON_DATA_TYPE

  }).done(function ( data ) {
    var quote = data[0];
    displayRonQuote( quote );
  });
};


// Make sure the page has loaded

// Add event handlers / or set timers

$(document).ready(function () {

  getRonQuote();

  var RON_TIMER_ID = window.setInterval(function () {
    getRonQuote();
  }, 2000);

  $(".swanson button").on("click", function () {
    window.clearInterval( RON_TIMER_ID );
  });

});
