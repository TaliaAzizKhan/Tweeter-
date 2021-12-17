$(document).ready(function() {

  $('#tweet-form').hide();
  const button = $('.innerContent').children('span');
  $(button).on("click", function() {
    if ($('#tweet-form').is(":visible")) {
      $('#tweet-form').slideUp();
    } else {
      $('#tweet-form').slideDown();
    }
  });

  $(window).scroll(function() {
    //call scrolltop() on page to determine location and if need to slide button into view or out of view
      if ($(this).scrollTop()) {
          $('#scroll-arrow').slideDown() 
      } else {
          $('#scroll-arrow').slideUp(); 
      }
  });

  //return scrolltop value to 0 after clicking it to bring page up
  $("#scroll-arrow").on("click", function () {
      $("html, body").animate({
          scrollTop: 0 
      }, 300);
  });
});