$(document).ready(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        $('.jump').click(function () {
            $('html,body').stop().animate({
                'scrollTop': 0
            });
        });
    });
    
    
});
