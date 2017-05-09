var displayMovie = function ( movie ) {
  var title = movie.Title;
  var poster = movie.Poster;
  var plot = movie.Plot;

  $("img#poster").attr( "src", poster );
  $("h2#title").text( title );
  $("p#plot").text( plot );

  $("body").css({
    backgroundImage: "url(" + poster + ")"
  });
};

// Make an AJAX request
  // What URL or path?
  // What method?
  // What am I requesting? (Data Type)
  // Any parameters?

var searchOMDB = function ( query ) {
  $.ajax({
    url: "http://omdbapi.com",
    method: "GET",
    dataType: "JSON",
    data: {
      t: query,
      plot: "full"
    }
  }).done(function ( data ) {
    displayMovie( data );
  });
};

$(document).ready(function () {

  $("form").on("submit", function ( event ) {
    event.preventDefault();
    var title = $("#search").val();

    searchOMDB( title );
  });

});
