// $ === jQuery
  // It refers to the jQuery library
  // It is the way that we select the DOM
  // It receives a CSS selector

var $mainHeading = $("#mainHeading");
var $bill = $("#bill");
var $importantParagraph = $("#important");

var $allParagraphs = $("p");
var $allImages = $("img");
var $allListItems = $("li");

var $allTodos = $(".todo");
var $lorems = $(".lorem");

var $allOrderedItems = $("ol li");

// Working with DOM Attributes

var $bill = $("#bill");
var billSource = $bill.attr("src");
console.log( billSource );

var desiredSource = "http://placecage.com/200/200";
$bill.attr( "src", desiredSource );

var $important = $("#important");
var content = $important.html();
  // .innerHTML || .innerText
console.log( content );

$important.html( 'Updated with jQuery' );
  // .innerHTML = ""
console.log( $important.html() );

var $gaLink = $(".ga");
$gaLink.html("A Link to General Assembly");
$gaLink.css("display", "block");
$gaLink.css({
  color: "hotpink",
  textDecoration: "none",
  fontSize: "30px"
});

$mainHeading.hasClass("none");
$mainHeading.addClass("none");
$mainHeading.removeClass("none");

// Create
var $newPara = $("<p></p>");
// Manipulate
$newPara.html("Created with JS");
$newPara.css({
  color: "gainsboro"
});
// Inject
// $(".dynamic").append( $newPara );
$newPara.appendTo( ".dynamic" );


var $img = $("<img>");
$img.attr("src", "http://placekitten.com/g/300/300");
$img.css({
  border: "3px solid black"
});
// $(".dynamic").prepend($img);
$img.prependTo(".dynamic");

console.clear();

var $allImages = $("img");
  // Returns a jQuery Collection
console.log( $allImages, $allImages.length );

$allImages.css("border", "10px solid red");

var firstImage = $allImages[0];
  // Returns a DOM Node
console.log( firstImage );

var $firstImage = $allImages.eq(0);
  // Returns a jQuery collection of a single DOM Node
console.log( $firstImage );

var $allTodos = $("ol li");
for ( var i = 0; i < $allTodos.length; i++ ) {
  var currentTodo = $allTodos.eq( i );
  var todoText = currentTodo.html();
  var desiredText = todoText + " - " + Math.random();
  currentTodo.html( desiredText );
}

console.clear();
var $allLorems = $(".lorem");

$allLorems.each(function (index, domNode) {
  // console.log( this === domNode );
  $(this).css( "opacity", Math.random() );
  $(this).html( "Paragraph: " + index );
    // The keyword this refers to the current DOM node. We need to select it with jQuery so that we can use fancy methods

  // var $lorem = $( domNode );
  // var currentText = $lorem.html();
  // $lorem.html( "Paragraph: " + index );
  // $lorem.css( "opacity", Math.random() );
});
