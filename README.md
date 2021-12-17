# Tweeter Project

Tweeter is a Twitter clone. A Single Page App (SPA) built with HTML, CSS, JS, jQuery and AJAX.


## Dependencies
- Express
- Node 5.10.x or above


!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/1-main-page.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/2-tweet-box.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/3-write-a-tweet.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/4-word-limit-exceeded-error.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/5-empty-field-error.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/6-go-up-button.png?raw=true)

!["screenshot description"] (https://github.com/TaliaAzizKhan/Tweeter-/blob/master/docs/7-responsive-mobile-view.png?raw=true)




## Functioning:
A client-side Single Page App (SPA)
Communicates with a server via AJAX

## Display 

# Navigation Bar:
is fixed to the top
has padding on both sides
contains Compose button

# Compose Tweet box:
is displayed above the list of tweets
contains a form for submitting tweets, which itself contains:
a textarea for new tweet content
a left-aligned button for submitting new tweets
contains a Character Counter, right-aligned, which by default shows 140

# List of Tweets:
displays tweets in reverse-chronological order (that is, by creation time descending)

# Individual Tweets have a:
header, which contains the user's:
avatar, on the left
name, on the left and after the avatar
handle, on the right
body, which contains the tweet text
footer, which displays:
how long ago the tweet was created, on the left
"Flag", "Re-tweet" and "Like" action icons on the right

## Behaviour
# Individual Tweets
When the user hovers over a tweet, that tweet should display a box shadow.
# Action Icons
When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon should change colour.
# Character Counter
When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type (subtracting the number of characters they've typed from the maximum allowable character count of 140)

The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)

# Compose Tweet
When a user submits an invalid tweet (the tweet textarea is empty or contains more than 140 characters), an appropriate error message is displayed

When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140)
