var $allLinks = $("a");

$allLinks.each(function () {
  var href = $(this).attr("href");
  var thumbnail = youtube.generateThumbnailUrl(href);
  var $newImg = $("<img>");
  $newImg.attr("src", thumbnail);
  $newImg.appendTo( this );
  // $(this).append( $newImg );
});
