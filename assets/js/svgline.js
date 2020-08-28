var  $svg = $("#svgline").drawsvg({
  stagger: 0,
  easing: 'linear'
});

$(document).on("scroll", function () {
  if ($(this).scrollTop() >= $("#svgline").position().top - $(window).height()/2) {
    var p =  ( ($(document).scrollTop() - ($("#svgline").position().top - $(window).height()/2)) / $svg.height() );
    if (p > 0.001) {
      $("#svgline").addClass("active");
    } else {
      $("#svgline").removeClass("active");
    }
    if (p > 0.99) {
      p=1;
    }
    $svg.drawsvg("progress", p);
    if (p > 0.99) {
      $(".ball01").addClass("active");
    } else {
      $(".ball01").removeClass("active");
    }
  }
});