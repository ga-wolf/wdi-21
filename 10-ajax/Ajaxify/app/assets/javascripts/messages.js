var fetchAllMessages = function () {

  $.ajax({
    url: "/messages",
    method: "GET",
    dataType: "JSON"
  }).done(function ( allMessages ) {
    $("#allMessages").html('');

    for ( var i = 0; i < allMessages.length; i += 1 ) {
      var currentMessage = allMessages[i];
      var $newLi = $("<li></li>");
      var output = currentMessage.content + " - " + currentMessage.created_at;
      $newLi.text( output );
      $("#allMessages").prepend( $newLi );
    }

  });

};

fetchAllMessages();

// window.setInterval( fetchAllMessages, 2000 );
