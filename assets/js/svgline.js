var $doc = $(document),
  $win = $(window),
  $svg = $("#svgline").drawsvg(),
  max = $doc.height() - $win.height();

$(document).on("scroll", function () {
  if ($(this).scrollTop() >= $("#svgline").position().top - $win.height()) {
    var p =
      (($doc.scrollTop() - $("#svgline").position().top + $win.height()) /
        $svg.height()) *
      0.85;
    if (p < 0.282955344441662) p = 0.282955344441662;
    $svg.drawsvg("progress", p);
    console.log(p);
    console.log(p > 0.87);
    if (p > 0.87) {
      $(".ball01").addClass("active");
    } else {
      $(".ball01").removeClass("active");
    }
  }
});
