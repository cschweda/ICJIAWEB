$(document).ready(function() {



  //bump window down 50px if on iPhone
  // var width = $(window).width(),
  //   height = $(window).height();
  // if (width <= 480) {
  //   $('html, body').animate({
  //     scrollTop: $('.intro-message').offset().top - 50
  //   }, 'fast');
  //
  // }



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



  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $("#navContainer").removeClass("container");
      // $(".navbar-collapse > ul").removeClass("pull-right");

      $(".top-bar").fadeOut(100);
      $(".offCanvasButton").show();

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
      $(".offCanvasButton").hide();

    }
  });


  // slider for MVTPC info
  $('.bxslider').show().bxSlider({
    minSlides: 1,
    preloadImages: 'all',
    maxSlides: 1,
    controls: true,
    pager: false,
    easing: 'ease-in',
    auto: false,
    adaptiveHeight: true,
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: '<i class="fa fa-arrow-circle-right fa-2x"></i>',
    prevText: '<i class="fa fa-arrow-circle-left fa-2x"></i>'
  });



  //jquery-countTo
  var counterSpeed = 4000;


  $('#counter1').countTo({
    from: 0,
    to: 36710,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });


  $('#counter2').countTo({
    from: 0,
    to: 68159,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });


  $('#counter3').countTo({
    from: 0,
    to: 14373,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });


  $('#counter4').countTo({
    from: 0,
    to: 17641,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });


  $('#counter5').countTo({
    from: 0,
    to: 7072,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });


  $('#counter6').countTo({
    from: 0,
    to: 41217,
    speed: counterSpeed,
    refreshInterval: 20,
    formatter: function(value, options) {
      return value.toFixed(options.decimals).replace(
        /\B(?=(?:\d{3})+(?!\d))/g, ',');
    },
    onComplete: function(value) {
      $(this).addClass('countup-finished');
      $(this).parent().parent().addClass('complete');
    }
  });

  $('body').prepend(
    '<a href="javascript:void(0);" class="back-to-top" style="display: none">Back to Top</a>'
  );

  var amountScrolled = 550;

  var socialbar = 120;

  $(window).scroll(function() {
    if ($(window).scrollTop() > amountScrolled) {
      $('a.back-to-top').fadeIn('fast');
    } else {
      $('a.back-to-top').fadeOut('fast');
    }

    if ($(window).scrollTop() > socialbar) {
      $('.prepbootstrap-sharing-container').fadeIn('slow');
    } else {
      $('.prepbootstrap-sharing-container').fadeOut('slow');
    }


  });

  $('a.back-to-top').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 1200);
    return false;
  });



});
