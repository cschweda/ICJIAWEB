//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $("#navContainer").removeClass("container");
    // $(".navbar-collapse > ul").removeClass("pull-right");

    $(".top-bar").fadeOut(100);
    //$( "a.navbar-brand" ).html('<img src="img/mvtpc-logo-small.png" style="margin-top: -15px;" >');

    $(".navbar-default .navbar-nav > .active > a").css({
      "background-color": "#aa3c3e",
      "color": "#fff"
    });



  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");

    $("#navContainer").addClass("container");
    //$(".navbar-collapse > ul").addClass("pull-right");
    $(".navbar-default .navbar-nav > .active > a").css({
      "background-color": "#fff",
      "color": "#222"
    });
    $(".top-bar").fadeIn(100);
    //$( "a.navbar-brand" ).html('<img src="img/mvtpc-logo-small.png" style="margin-top: -41px">').fadeIn( 400 );

  }
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 50
    }, 1500, 'easeInOutExpo');

    event.preventDefault();
  });
});


$(document).ready(function() {
  var width = $(window).width(),
    height = $(window).height();
  if (width <= 480) {
    $('html, body').animate({
      scrollTop: $('.intro-message').offset().top - 50
    }, 'fast');

  }
});
