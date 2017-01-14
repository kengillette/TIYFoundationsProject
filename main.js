$("button").click(buttonToggle);
function buttonToggle() {
  $("button").toggleClass("buyButtonClickedHover");
  // $(".my-div").toggle();
}

$("button").hover(buttonToggle);
function buttonToggle() {
  $("button").toggleClass("buyButtonClickedHover");
}
$("#buyButton").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
});


$("button").click(addCart);
function addCart() {
  $("#cart").html(function(i, val) {return val*1+1});
}

$("a").hover(textRollOver);
function textRollOver() {
  $("#menU").toggleClass("rollOver");
}

$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
        $("p").hide();
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
