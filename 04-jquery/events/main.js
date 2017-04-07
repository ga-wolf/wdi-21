// $(document).ready(function () {
  console.log("THE ELEMENTS ARE LOADED", $("img").length);
  // Find your elements
  var $btn = $("button#myButton");
  // What are you doing?
  var annoyUser = function () {
    console.log("I am annoying");
  };
  // Create your event listener
  $btn.on("click", annoyUser);

  var $appearanceButton = $("#appearance");
  var changeBackground = function () {
    $("body").css({
      background: "hotpink"
    });
  };
  $appearanceButton.on("click", changeBackground);

  // I want to listen for a click event on the element with the id of lorem
  //   When that happens
  //     I want to create a paragraph
  //       Fill it with lorem ipsum
  //         Put it at the end of the body tag
  $("#lorem").on("click", function () {
    var $paragraph = $("<p></p>");
    $paragraph.html( "lorem ipsum dolor..." );
    $paragraph.appendTo("body");
  });

  $(".temporary").on("click", function () {
    console.log("TEMPORARY");
  });
  $(".temporary").off();

  $(".temporary").one("click", function () {
    console.log("TEMPORARY");
  });

  // I want to add an event listener to the browser window
    // I care about when the mouse moves
    // In the callback, receive a single parameter which contains details of the event
      // Log out the mouse x and y position

  $("#follow").css({
    position: "absolute",
    top: "0px",
    left: "0px"
  });

  var followMeForeverBill = function ( event ) {
    var xPos = event.clientX;
    var yPos = event.clientY;
    $("#follow").css({
      left: xPos,
      top: yPos
    });
  };
  // $(window).on( "mousemove", followMeForeverBill );


  $(window).on("scroll", function (e) {
    // console.log(e);
  });

  var $allImages = $("img");

  var enlargeImage = function () {
    // The keyword this refers to the element that was being interacted with
    $(this).animate({
      width: "500px"
    }, 1000);
  };

  $allImages.on( "click", enlargeImage );

  var animateBill = function () {
  	$("#follow").animate({
      left: "924px"
    }, 1000, function () {
    		$("#follow").animate({
          left: "0px"
        }, 1000, function () {
     			animateBill();
        });
  	});
  };
  // animateBill();


  // // When I click the heading, change the text colour to salmon
  // var myHeading = document.querySelector("h1");
  // var salmonizeText = function () {
  //   myHeading.style.color = "salmon";
  // };
  // myHeading.addEventListener("click", salmonizeText);
  //
  // var onBrowserScroll = function () {
  //   console.log("Scrolled");
  // };
  // window.addEventListener( "scroll", onBrowserScroll );
  //
  //
  // var onMouseMove = function ( e ) {
  //   var xPos = e.clientX;
  //   var yPos = e.clientY;
  //   console.log("X Position:", xPos, "Y Position:", yPos);
  // };
  // // window.addEventListener('mousemove', onMouseMove);
  //
  // window.addEventListener('resize', function () {
  //   var currentWidth = window.innerWidth;
  //   console.log("Current Width:", currentWidth);
  // });
  //
  // // var bill = document.querySelector("#bill");
  // // var makeBillBigger = function () {
  // //   bill.style.width = "400px";
  // // };
  // // bill.addEventListener("click", makeBillBigger);
  // //
  // // var nick = document.querySelector("#nick");
  // // var makeNickBigger = function () {
  // //   console.log("Enlarge the photo of Nick");
  // // };
  // // nick.addEventListener("click", makeNickBigger);
  // //
  // // var steve = document.querySelector("#steve");
  // // var makeSteveBigger = function () {
  // //   console.log("Enlarge the photo of Steve");
  // // };
  // // steve.addEventListener("click", makeSteveBigger);
  //
  // var allImages = document.querySelectorAll("img");
  //
  // var makeImageBigger = function () {
  //   var currentWidth = this.style.width;
  //
  //   // What is the current width?
  //     // If it is 300px, make it 200px
  //     // If it isn't 300px, make it 300px
  //   if ( currentWidth === "300px" ) {
  //     this.style.width = "200px";
  //   } else {
  //     this.style.width = "300px";
  //   }
  //
  //   // ` this ` refers to the DOM node that was being interacted with
  //     // Or the element that the event listener was added to
  // };
  //
  // for ( var i = 0; i < allImages.length; i += 1 ) {
  //   var currentImage = allImages[i];
  //   currentImage.addEventListener(
  //     "click",
  //     makeImageBigger
  //   );
  // }
  //
  // // What element do you care about? DOM node or the window
  // // What do you want to do? Your callback function
  // // What is your event type? 'click', 'scroll'...
  // // Create an event listener that joins all of those things together
  //
  // // window.setTimeout( callback, delayInMilliseconds );
  //
  // var logUserOut = function () {
  //   console.log("You have been inactive for a while, you have been logged out");
  // };
  // // Delay the execution of logUserOut by 1 second (1000ms)
  // window.setTimeout( logUserOut, 5000 );
  //
  // var saveAtRegularIntervals = function () {
  //   console.log("We have just auto-saved your work, you can thank us later");
  // };
  // // I want to save the user's work every 1 second
  // // window.setInterval( saveAtRegularIntervals, 1000 );
  //
  // // I want to spawn an enemy every three seconds
  //   // But I also want to be able to stop this
  // var spawnEnemy = function () {
  //   console.log("A new enemy is born");
  // };
  //
  // var enemyTimerID = window.setInterval(spawnEnemy, 500);
  //
  // var stopSpawningEnemies = function () {
  //   window.clearInterval( enemyTimerID );
  // };
// });
