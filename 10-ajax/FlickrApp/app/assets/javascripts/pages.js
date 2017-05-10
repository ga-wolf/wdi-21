// Read these...

// Flickr API Overview: https://www.flickr.com/services/api/misc.overview.html
// flickr.photos.search Overview:  https://www.flickr.com/services/api/flickr.photos.search.html
// Flickr and JSON: https://www.flickr.com/services/api/response.json.html
// Sample Response: https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=Watermelon+Fail&format=json&nojsoncallback=1

// Broad Overview
  // We need functions to:

  // Make an AJAX request to Flickr API
  // Iterate through a large amount of photos
  // Create an Image URL using a single photo
  // Display a single photo
  // Handle user inputs

// Set up the important variables
  // UPPER_SNAKE_CASE to illustrate that these variables shouldn't change
  // Base URLs
  // API Keys
  // Important Elements
  // Timers
  // Anything that you want to be global

var API_KEY = "2f5ac274ecfac5a455f38745704ad084";
var FLICKR_BASE_URL = "https://api.flickr.com/services/rest";

var generateImageURL = function ( photo ) {
  // "https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg";
  var url = "https://farm" + photo.farm;
  url += ".staticflickr.com/";
  url += photo.server;
  url += "/";
  url += photo.id;
  url += "_";
  url += photo.secret;
  url += ".jpg";

  return url;
};

var displayPhoto = function ( photo ) {
  var url = generateImageURL( photo );

  var $newImg = $("<img>");
  $newImg.attr( "src", url );
  $newImg.appendTo( ".results" );
};

var handleSearchData = function ( photos ) {
  for ( var i = 0; i < photos.length; i += 1 ) {
    var currentPhoto = photos[i];
    displayPhoto( currentPhoto );
  }
};

var searchFlickr = function ( query ) {
  $.ajax({
    url: FLICKR_BASE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      method: "flickr.photos.search",
      api_key: API_KEY,
      text: query,
      format: "json",
      nojsoncallback: 1
    }
  }).done(function ( response ) {
    var allImages = response.photos.photo;
    handleSearchData( allImages );
  });
};

$(document).ready(function () {

  $("form").on("submit", function ( event ) {
    event.preventDefault();
    // Get the current text out of the input with the ID of searchFlickr
    var searchQuery = $("#searchFlickr").val();

    if ( searchQuery.length === 0 ) {
      $("#searchFlickr").css({
        border: "1px solid red"
      });
      alert("You need to type something!");
      return false;
    }

    // Make an AJAX request using that text as the query
    searchFlickr( searchQuery );
  });

});


// HOMEWORK

// 1. A button for next page (show more images)
  // Parameters: page and per_page
// 2. Add some validations to the page
  // Show an error if there are no more photos to display
  // Only show photos related to the current search
// 3. Infinite Scroll
  // var howFarIHaveScrolled = $(window).scrollTop();
  // var browserWindowHeight = $(window).height();
  // var entireDocumentHeight = $(document).height();
  // $(window).on("scroll", function () { ... });
// 4. Slider or a Lightbox
  // DON'T CREATE THIS, USE SOMETHING THAT ALREADY EXISTS
// 5. Throttling or Debouncing
  // Stop the AJAX function from happening so regularly
