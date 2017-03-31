// // The Grade Assigner
// // Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for( var i = 100; i >= 60; i -= 10 ){
  if( i > 90 ){
    console.log( "A" );
  } else if ( i > 80 ){
    console.log( "B" );
  } else if ( i > 70 ){
    console.log( "C" );
  } else if ( i > 60 ){
    console.log( "D" );
  } else {
    console.log( "Failure." );
  }
}