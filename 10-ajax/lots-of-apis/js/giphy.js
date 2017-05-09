// Which API?
  // JSON
  // Necessary data?
  // Price

// How do I talk to it?
  // Base URL
  // Path
  // HTTP Method
  // Data type
  // Required parameters? (e.g. api_key)
  // Optional parameters? (e.g. tag)

// How do I display the data?

// When do I make the request?
  // Is this based on a user interaction?

var GIPHY_BASE_URL = "http://api.giphy.com/v1/gifs/random";
var API_KEY = "dc6zaTOxFJmzC";

var displayGif = function ( url ) {
  var $img = $("<img>");
  $img.attr( "src", url );

  $img.prependTo( ".giphy .content" );
};

var getGiphyInformation = function ( searchTerm ) {
  $.ajax({
    url: GIPHY_BASE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      api_key: API_KEY,
      tag: searchTerm
    }
  }).done(function (response) {
    var url = response.data.image_original_url;
    displayGif( url );
  });
};

$(document).ready(function () {

  $(".giphy button").on("click", function () {
    var searchTerm = $(".giphy input").val();

    getGiphyInformation( searchTerm );
  });

});
