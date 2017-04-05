
var body = document.body;
body.style.fontFamily = "Arial, sans-serif";
// document.body.style.fontFamily = "Arial, sans-serif";

var nickname = document.querySelector("#nickname");
nickname.innerHTML = "Wolf";

var favourites = document.querySelector("#favorites");
favourites.innerHTML = "Satantango";

var hometown = document.querySelector("#hometown");
hometown.innerHTML = "Margaret River";

var listItems = document.querySelectorAll("li");
for (var i = 0; i < listItems.length; i++) {
  var item = listItems[i];
  item.classList.add("listitem");
}

var newImage = document.createElement("img");
newImage.src = "http://fillmurray.com/200/200";
document.body.appendChild( newImage );
