$(document).ready(function() {
    // --- our code goes here ---
    $('.new-tweet textarea').on('keyup', function() {
        let alphabetsLeft = (140 - ($(this).val().length));
        $(this).siblings()[1].innerText = alphabetsLeft;
        $('.counter').css('color', '#244751');
        if(alphabetsLeft < 0){
            let counter = $(this).siblings()[1].innerText;
            $('.counter').css('color','red');
        }
    });   
});
