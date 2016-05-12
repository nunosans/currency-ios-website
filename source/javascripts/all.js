$(document).ready(function() {

  var iphoneContainer = $(".app-overview")
  var calloutsVisible = false
  var scrollPosition = 0
  var scrollThreshold = 120

  $(window).scroll(function() {
    scrollPosition = $(window).scrollTop();
    if (scrollPosition >= scrollThreshold && !calloutsVisible) {
      iphoneContainer.addClass("callouts-visible");
      iphoneContainer.removeClass("callouts-hidden");
      calloutsVisible = true
    } else if (scrollPosition < scrollThreshold && calloutsVisible){
      iphoneContainer.removeClass("callouts-visible");
      iphoneContainer.addClass("callouts-hidden");
      calloutsVisible = false
    }
  });

});
