// AJAX...

// What URL or path?
// What HTTP Method, Type or Verb?
// What data type am I requesting?
// Do I need to provide parameters?

var fetchFortune = function () {
  $.ajax({
    url: "/fortune",
    method: "GET",
    dataType: "TEXT"
  }).done(function ( quote ) {
    $(".dynamic .fortune p").text( quote );
  });
};

$(document).ready(function () {
  fetchFortune();

  // Add an event handler to the button in the fortune div
    // If it is clicked, call fetchFortune
});
