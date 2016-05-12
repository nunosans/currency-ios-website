$(document).ready(function() {

  var iphoneContainer = $(".app-overview")
  var calloutsVisible = false
  var scrollPosition = 0

  $(window).scroll(function() {
    scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 200 && !calloutsVisible) {
      iphoneContainer.addClass("callouts-visible");
      iphoneContainer.removeClass("callouts-hidden");
      calloutsVisible = true
    } else if (scrollPosition < 200 && calloutsVisible){
      iphoneContainer.removeClass("callouts-visible");
      iphoneContainer.addClass("callouts-hidden");
      calloutsVisible = false
    }
  });

});
