/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {

  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const htmlTweet = `
    <article class="tweet">
    <header>
      <div class="userAvatar">
        <img src='${tweet.user.avatars}'>
        <p id="firstName">${tweet.user.name}</p>
      </div>
      <div class="userHandle" >
        <p>${tweet.user.handle}</p>
      </div>
    </header>
    <body>
      <p class="tweetContent">${escape(tweet.content.text)}</p>
    </body>
    <footer>
      <div class="contentFooter">
        <p>${moment(tweet.created_at).fromNow()}</p>
        <div class="icons">
          <i class="fas fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>
        </div>
      </div>
    </footer>
    </article>
    `;
  return htmlTweet;
};

//===============================================================================================================================

const renderTweets = function(tweetData) {
  $('#tweets-container').empty();
  for (let tweet of tweetData) {
    
    //create the html element for tweet
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

//================================================================================================================================

$(document).ready(function() {

  //hide error message until triggered
  $('#error-message').hide();

  const loadTweets = function() {
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'GET'
    })
      .done((tweet) => {
        renderTweets(tweet);
      })
      .fail(() => console.log('Error!'))
      .always(() => console.log('Request completed'));
  };

  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();

    $('#error-message').slideUp("slow");

    const specificTweet = $('#tweet-text').val().length;
    
    if (specificTweet > 140) {
      $('#error-message').html('<p>❎ You have exceeded the words limit, please keep it below 140 characters! ❎</p>');
      $('#error-message').slideDown("slow");
      return;
    }
    
    if (specificTweet === 0) {
      $('#error-message').html('<p>❎ Hey! The field is empty! Please write write something first. ❎</p>');
      $('#error-message').slideDown("slow");
      return;
    }

    const formContent = $(this).serialize();
    
    $.ajax({
      url: 'http://localhost:8080/tweets',
      method: 'POST',
      data: formContent
    })
      .done(() => loadTweets())
      .fail(() => console.log('Error!'))
      .always(() => console.log('Request completed'));

    //After the post is complete - empty the tweet-input area by replacing it with string and reset the counter
    $('#tweet-text').val('');
    $('.counter').val(140);
  }); 
  
  loadTweets();
});
//==================================================================================================================================