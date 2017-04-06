
var allLinks = document.querySelectorAll("a");

for (var i = 0; i < allLinks.length; i += 1) {
  var currentLink = allLinks[i];
  var href = currentLink.getAttribute("href");
  var thumbnail = youtube.generateThumbnailUrl(href);
  var newImg = document.createElement("img");
  newImg.setAttribute("src", thumbnail);
  currentLink.appendChild( newImg );
}
