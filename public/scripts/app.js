
$(document).ready(function(){

    function loadTweets(){
        $.ajax({
            type: 'GET',
            url: ('/tweets'),
            // data: tweetSubmit.serialize(),
            success: function (data) {
                console.log('extraction was successful.');
                console.log(data);
                $('.old-tweets').empty();
                renderTweets(data);
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            }
        });
    }     
    loadTweets();
    
    function createTweetElement(tweetData){
        const userName = tweetData.user.name;
        const avatar = tweetData.user.avatars["large"];
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
    function renderTweets(tweets){
        tweets.forEach(function(tweet){
            createTweetElement(tweet).prependTo('.old-tweets')
        });
    }    
    //------------ajax call
    const tweetSubmit = $('#tweetsubmit');
    
    tweetSubmit.submit(function(event){
        event.preventDefault();
        const theTweet = tweetSubmit.find('textarea').val();
        console.log(theTweet);
        console.log("the button was clicked");
        $('.error').slideUp();
        if(theTweet === "" ){
            $('.error').text("Error: Cannot leave the tweet empty").slideDown();
            return;
        }
         if(theTweet.length > 140){
            $('.error').text("Too many Characters").slideDown();
            return;
        }
            $.ajax({
                type: ('POST'),
                url: ('/tweets'),
                data: tweetSubmit.serialize(),
                success: function (data) {
                    console.log('Submission was successful.');
                    // console.log(data);
                    loadTweets(data);
                },
                error: function (data) {
                    console.log('An error occurred.');
                    // console.log(data);
                }
            }).then(() => {
                $('textarea[name=text]').val('');
                $('.counter').text(140);
            });   
    });
    $('button').click(function(){
        $('.new-tweet').slideToggle();
        $('textarea').focus();
    })
});
