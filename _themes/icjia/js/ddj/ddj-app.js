(function($) {
    $(document).ready(function() {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top + 10
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });


        // hide .navbar first
        //$(".navbar").hide();
        // fade in .navbar

        $('.expandText').readmore({
            speed: 1000,
            collapsedHeight: 430,
            moreLink: '<a href="#" class="readMore">MORE&nbsp;&raquo;</a>',
            lessLink: '<a href="#" class="readMore">&laquo&nbsp;LESS</a>'
          });

        $(function() {
            $(window).scroll(function() {
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 75) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                    $("#navContainer").removeClass("container");
                    // $(".navbar-collapse > ul").removeClass("pull-right");
                    //$(".top-bar").fadeOut(100);
                    $(".offCanvasButton").show();
                    $('.navbar-default').css({
                        "background": "#fff"
                    });
                    $(".navbar-default .navbar-nav > .active > a").css({
                        "background-color": "#aa3c3e",
                        "color": "#fff"
                    });
                    $('.navbar').fadeIn();
                } else {
                    $('.navbar').fadeOut();
                }
            });
        });
        $('a.back-to-top').click(function() {
            $('body, html').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
    });
}(jQuery));
