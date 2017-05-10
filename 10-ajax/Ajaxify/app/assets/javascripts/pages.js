// AJAX...

// What URL or path?
// What HTTP Method, Type or Verb?
// What data type am I requesting?
// Do I need to provide parameters?

var fetchLottoNumbers = function () {
  $.ajax({
    url: "/lotto_numbers",
    method: "GET",
    dataType: "JSON"
  }).done(function ( response ) {
    var listOfNumbers = response.numbers;
    var $ul = $(".lottoNumbers ul");
    $ul.html('');
    for ( var i = 0; i < listOfNumbers.length; i += 1 ) {
      var currentNumber = listOfNumbers[i];
      var $li = $("<li></li>").text( currentNumber );
      $li.appendTo( $ul );
    }
  });
};

var fetchUptime = function () {
  $.ajax({
    url: "/uptime",
    method: "GET",
    dataType: "JSON"
  }).done(function ( response ) {
    var uptime = response.uptime;
    $(".dynamic .uptime p").text( uptime );
  });
};

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
  $(".fortune button").on( "click", fetchFortune );

  fetchUptime();
  $(".uptime button").on( "click", fetchUptime );

  fetchLottoNumbers();
  $(".lottoNumbers button").on( "click", fetchLottoNumbers );
});
