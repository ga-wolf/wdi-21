var $bill = $("#bill");

// TweenMax.to(elementOrSelector, timeInSeconds, propertiesToAnimate);
var billAnimation = TweenMax.to( $bill, 1, {
  left: "90vw",
  ease: Power2.easeInOut,
  rotation: 360,
  // scaleX: 2,
  // scaleY: 2,
  // xPercent: 100,
  // yPercent: 1000,
  // rotation: 360,
  delay: 1,
  yoyo: true,
  repeat: -1,
  repeatDelay: 1,
  onStart: function () {
    // console.log("The animation has started");
  },
  onComplete: function () {
    // console.log("The animation has finished");
  },
  onUpdate: function () {
    // console.log("Bill is moving");
  }
});

$(".play").on("click", function () {
  billAnimation.play();
});

$(".pause").on("click", function () {
  billAnimation.pause();
});

$(".doubleSpeed").on("click", function () {
  billAnimation.timeScale( 2 );
});

$(".halfSpeed").on("click", function () {
  billAnimation.timeScale( 0.5 );
});

$(".speed").on("input", function () {
  var desiredSpeed = $(".speed").val();
  desiredSpeed = parseFloat( desiredSpeed );
  billAnimation.timeScale( desiredSpeed );
});

$(".progress").on("input", function () {
  var desiredProgress = parseFloat( $(this).val() );
  billAnimation.pause();
  billAnimation.progress( desiredProgress );
});

var staggerAnimations = function () {
  TweenMax.staggerTo(".box", 1, {
    rotation: 360,
    opacity: 0,
    yPercent: 150,
    scaleX: 0.5,
    scaleY: 0.5
  }, 0.5);
};

$(".box").on( "click", staggerAnimations );
