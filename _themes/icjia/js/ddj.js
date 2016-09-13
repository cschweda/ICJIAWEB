$(document).ready(function() {




  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 70
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    });
  });


  (function ($) {
    $(document).ready(function(){

  	// hide .navbar first
  	//$(".navbar").hide();

  	// fade in .navbar
  	$(function () {
  		$(window).scroll(function () {
              // set distance user needs to scroll before we fadeIn navbar
  			if ($(this).scrollTop() > 150) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
              $("#navContainer").removeClass("container");
              // $(".navbar-collapse > ul").removeClass("pull-right");

              //$(".top-bar").fadeOut(100);
              $(".offCanvasButton").show();

              $('.navbar-default').css({"background":"#fff"});

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

  });
    }(jQuery));



  //jQuery to collapse the navbar on scroll
  // $(window).scroll(function() {
  //   if ($(".navbar").offset().top > 50) {
  //     $(".navbar-fixed-top").addClass("top-nav-collapse");
  //     $("#navContainer").removeClass("container");
  //     // $(".navbar-collapse > ul").removeClass("pull-right");
  //
  //     $(".top-bar").fadeOut(100);
  //     $(".offCanvasButton").show();
  //
  //     $('.navbar-default').css({"background":"#fff"});
  //
  //     $(".navbar-default .navbar-nav > .active > a").css({
  //       "background-color": "#aa3c3e",
  //       "color": "#fff"
  //     });
  //
  //
  //
  //   } else {
  //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
  //
  //     $("#navContainer").addClass("container");
  //     //$(".navbar-collapse > ul").addClass("pull-right");
  //
  //     $('.navbar-default').css({"background":"transparent"});
  //     $(".navbar-default .navbar-nav > .active > a").css({
  //       "background-color": "#fff",
  //       "color": "#222"
  //     });
  //     $(".top-bar").fadeIn(100);
  //     $(".offCanvasButton").hide();
  //
  //   }
  // });

  // $(document).on('ps-scroll-x', function() {
  //   console.log('scroll down');
  // });


  $('a.back-to-top').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 1200);
    return false;
  });



});
