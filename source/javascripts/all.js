$(document).ready(function() {

  var iphoneContainer = $(".app-overview")

  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 200) {
      iphoneContainer.addClass("callouts-visible");
      iphoneContainer.removeClass("callouts-hidden");
    } else {
      iphoneContainer.removeClass("callouts-visible");
      iphoneContainer.addClass("callouts-hidden");
    }
  });

});
