/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function(){
    const tweet = {
        "user": {
            "name": "Newton",
            "avatars": {
            "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227    
    }
    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": {
              "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
              "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
              "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": 1461113796368
        }
      ];

    function createTweetElement(tweetData){
        const userName = tweetData.user.name;
        const avatar = tweetData.user.avatars["regular"];
        const handle = tweetData.user.handle;
        const content = tweetData.content.text;
        const time = moment(tweetData.created_at).fromNow();

        $article = $('<article>').addClass('tweet-container');
        $header  = $('<header>').appendTo($article);

        $avatar  = $('<img>',{src: avatar}).addClass('avatar');
        $header.append($avatar);
        $span    = $('<span>').addClass('header-text').text(userName);
        $header.append($span);
        $nametag = $('<a>').addClass('name-tag').text(handle);
        $header.append($nametag);
        $content = $('<p>').addClass('body').text(content);
        $article.append($content);
        $date  = $('<footer><p>').text(time);
        $article.append($date);
        $icons =$('<div class="social">' +
                '<i class="fas fa-retweet"></i>' + 
                '<i class="fab fa-font-awesome-flag"></i>' + 
                '<i class="fas fa-heart"></i>' +
                '</div>' );
        $date.append($icons);
        return $article;
    };
    let $tweet = createTweetElement(tweet);
    //$('section.old-tweets').append($tweet);
   
    function renderTweets(tweets){
        tweets.forEach(function(tweet){
            createTweetElement(tweet).prependTo('.old-tweets')
        });
    }
    renderTweets(data);
});
