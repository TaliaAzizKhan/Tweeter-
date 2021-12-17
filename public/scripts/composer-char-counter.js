$(document).ready(function() {

  const tweet = $('textarea');

  tweet.on('input', function(event) {

    let charCount = (140 - $(this).val().length);

    let counter = $(this).closest('form').children('.buttonContainer').children('.counter');

    if (charCount < 0) {
      counter.addClass('overCharLimit');
    } else {
      counter.removeClass('overCharLimit');
    }
    counter.html(charCount);
  });
});
//=====================================================================================================================================