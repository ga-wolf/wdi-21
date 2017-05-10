// Important Links:

// API Overview
  // https://tech.yandex.com/translate/
// Get an API Key
  // https://passport.yandex.com/registration?mode=register&from=tech&retpath=https%3A%2F%2Ftech.yandex.com%2Fkeys%2Fget%2F%3Fservice%3Dtrnsl
// Yandex Translate Documentation
  // https://tech.yandex.com/translate/doc/dg/concepts/About-docpage/
// Requirements to use the API
  // https://tech.yandex.com/translate/doc/dg/concepts/design-requirements-docpage/
// How to translate text?
  // https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/

// AJAX

// URL
  // "https://translate.yandex.net/api/v1.5/tr.json/translate"
// Method
  // "GET"
// Data Type
  // "JSON"
// Parameters (Data)
  // Required
    // key = API KEY
    // text = What I need to translate
    // lang
      // from-to (e.g. "en-fr")
      // to (e.g. "fr")

// Create important variables
var API_KEY = "trnsl.1.1.20170510T063751Z.829d222bead0db9c.660316f2f180c9f92a2c3b304d5a9b5bfe1fa3d5";
var YANDEX_TRANSLATE_API_URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";

var translateText = function ( text ) {
  $.ajax({
    url: YANDEX_TRANSLATE_API_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      key: API_KEY,
      text: text,
      lang: "fr"
    }
  }).done(function ( response ) {
    var translatedText = response.text[0];
    $(".result p").text( translatedText );
  });
};

$(document).ready(function () {

  $("button").on("click", function () {
    var text = $("textarea").val();
    translateText( text );
  });

});
