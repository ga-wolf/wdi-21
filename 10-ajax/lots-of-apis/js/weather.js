var BASE_WEATHER_URL = "https://api.darksky.net/forecast/";
var API_KEY = "8563ae7484b88beb694ab0dbc16e3a07";

var url = BASE_WEATHER_URL + API_KEY + "/";

var displayWeather = function(info) {
  var temp = info.currently.temperature;
  var humidity = info.currently.humidity;

  $(".temperature").text(temp);
  $(".humidity").text(humidity);
};

var getCurrentWeather = function(lat, long) {
  $.ajax({
    url: url + lat + "," + long,
    method: "GET",
    dataType: "JSONP",
    data: {
      units: "auto"
    }
  }).done(displayWeather);
};

var latitude = -33.8698544;
var longitude = 151.2062719;

getCurrentWeather(latitude, longitude);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var success = function (pos) {
  var crd = pos.coords;
  console.log('Your current position is:');
  console.log("\tLatitude : " + crd.latitude);
  console.log("\tLongitude: " + crd.longitude);
};

var error = function (err) {
  console.warn("ERROR");
  console.warn("Error Code: ", err.code);
  console.warn("Error Message: ", err.message);
};

navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);
