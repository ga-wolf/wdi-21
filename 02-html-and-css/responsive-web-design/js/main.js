// Make sure that all of the elements have loaded
// Find the range input
// Everytime that input changes values
  // We want to get the current value
  // We want to change the base font size for the page

window.onload = function () {

  var rangeSlider = document.querySelector("input");
  var htmlEl = document.querySelector("html");

  var onSlide = function () {

    var currentValue = rangeSlider.value;
    htmlEl.style.fontSize = currentValue + "px";

  };

  rangeSlider.addEventListener( "input", onSlide );

};
