$(window).on("load", function () {
  $(".loader").delay(6000).fadeOut("slow");
  $("body").delay(350).css({ overflow: "visible" });
});
$(document).ready(function () {
  $(".introduce-details").hide();
  $("#aboutBtn").click(function () {
    $(".introduce").fadeOut(1200);
    $(".introduce-details").delay(1200).fadeIn(1200);
  });

  $(".close").click(function () {
    $(".introduce-details").fadeOut(1200);
    $(".introduce").delay(1200).fadeIn(1200);
  });
});
