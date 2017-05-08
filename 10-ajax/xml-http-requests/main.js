// Create the XML HTTP Request - tell the browser you are about to use AJAX

var request = new XMLHttpRequest();

console.log( request.readyState );

// Specify the HTTP Method and the URL - make the handshake

var url = "http://omdbapi.com/?t=Satantango";
var method = "GET";
request.open( method, url );

console.log( request.readyState );

// request.open( "GET", "http://omdbapi.com/?t=Satantango" );

// Send the request - actually make the request

request.send();
console.log( request.readyState );

request.onreadystatechange = function () {
  if ( request.readyState !== 4 ) {
    return false;
  }

  // console.log( "The data is finally loaded" );
  var data = request.responseText;
  var parsedData = JSON.parse( data );

  var title = parsedData["Title"];
  var plot = parsedData["Plot"];
  var poster = parsedData["Poster"];
  
  console.log( title, plot, poster );
};
