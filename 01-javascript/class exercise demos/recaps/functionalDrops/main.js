var raindrops = function( targetNumber ){

  // If Loop up to our targetNumber.
  for( var i = 0; i <= targetNumber; i++ ){

    // As with our warm up, we have an empty string we push all these values to.
    var returnString = '';

    if ( i % 3 === 0 && i > 1 ) {
      returnString += "Pling"
    };
    if ( i % 5 === 0 && i > 1 ) {
      returnString += "Plang"
    };
    if ( i % 7 === 0 && i > 1 ) {
      returnString += "Plong"
    };
    if ( returnString === '' ) {
      returnString += i;
    };

    // Log out every iteration of the loop.  
    console.log( returnString );
  }
};

raindrops( 7 );