var path = document.querySelector("path");
var pathLength = path.getTotalLength();

console.log( pathLength );

$("path").css({
  "stroke-dasharray": pathLength,
  "stroke-dashoffset": pathLength
});

// $("path").animate({
//   "stroke-dashoffset": 0
// }, 1000);

$(window).on("mousemove", function ( event ) {
  var x = event.clientX;

  var normalizedX = x / window.innerWidth;
  var lineX = normalizedX * pathLength;
  $("path").css({
    "stroke-dashoffset": pathLength - lineX
  });

});
