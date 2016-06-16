$(document).ready(function() {

  // TVPP JS


  //bump window down 50px if on iPhone
  var width = $(window).width(),
    height = $(window).height();
  if (width <= 480) {
    $('html, body').animate({
      scrollTop: $('.intro-message').offset().top - 50
    }, 'fast');

  }



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



  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 40) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $("#navContainer").removeClass("container");
      // $(".navbar-collapse > ul").removeClass("pull-right");

      $(".top-bar").fadeOut(100);
      $(".offCanvasButton").show();

      // $(".navbar-default .navbar-nav > .active > a").css({
      //
      //   "color": "#e28642"
      // });

      $(".navbar-brand-tvpp").css({
        "font-size": "14px"
      });

      $(".navbar-brand-illinois").css({
        "font-size": "14px",
        "margin-left": "0px"
      });


    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");

      $("#navContainer").addClass("container");
      //$(".navbar-collapse > ul").addClass("pull-right");
      // $(".navbar-default .navbar-nav > .active > a").css({
      //
      //   "color": "#e28642"
      // });
      $(".top-bar").fadeIn(100);
      $(".offCanvasButton").hide();

      $(".navbar-brand-tvpp").css({
        "font-size": "18px"
      });

      $(".navbar-brand-illinois").css({
        "font-size": "18px",
        "margin-left": "-20px"
      });

    }
  });


  // slider for MVTPC info
  // $('.bxslider').show().bxSlider({
  //   minSlides: 1,
  //   preloadImages: 'all',
  //   maxSlides: 1,
  //   controls: true,
  //   pager: false,
  //   easing: 'ease-in',
  //   auto: false,
  //   adaptiveHeight: true,
  //   nextSelector: '#slider-next',
  //   prevSelector: '#slider-prev',
  //   nextText: '<i class="fa fa-arrow-circle-right fa-2x"></i>',
  //   prevText: '<i class="fa fa-arrow-circle-left fa-2x"></i>'
  // });



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



$(document).ready(function() {


  progressBarInit();



});


$(document).ready(function() {

  $('#flat').addClass("active");
  $('#progressBar').addClass('flat');

  $('#flat').on('click', function() {
    $('#progressBar').removeClass().addClass('flat');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
  });

  $('#single').on('click', function() {
    $('#progressBar').removeClass().addClass('single');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
  });

  $('#multiple').on('click', function() {
    $('#progressBar').removeClass().addClass('multiple');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
  });

  $('#semantic').on('click', function() {
    $('#progressBar').removeClass().addClass('semantic');
    $('a').removeClass();
    $(this).addClass('active');
    $(this).preventDefault();
    alert('hello');
  });

  $(document).on('scroll', function() {

    maxAttr = $('#progressBar').attr('max');
    valueAttr = $('#progressBar').attr('value');
    percentage = (valueAttr / maxAttr) * 100;

    // if (percentage < 49) {
    // 	document.styleSheets[0].addRule('.semantic', 'color: red');
    // 	document.styleSheets[0].addRule(
    // 		'.semantic::-webkit-progress-value',
    // 		'background-color: red');
    // 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
    // 		'background-color: red');
    // } else if (percentage < 98) {
    // 	document.styleSheets[0].addRule('.semantic', 'color: orange');
    // 	document.styleSheets[0].addRule(
    // 		'.semantic::-webkit-progress-value',
    // 		'background-color: orange');
    // 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
    // 		'background-color: orange');
    // } else {
    // 	document.styleSheets[0].addRule('.semantic', 'color: green');
    // 	document.styleSheets[0].addRule(
    // 		'.semantic::-webkit-progress-value',
    // 		'background-color: green');
    // 	document.styleSheets[0].addRule('.semantic::-moz-progress-bar',
    // 		'background-color: green');
    // }
  });

});


/*
Function to (re)initialize the progress bar.
This is called if elements on the page are expanded (e.g., the bios on the 'Commission' page)
*/


function progressBarInit() {
  var getMax = function() {
    return $(document).height() - $(window).height();
  }

  var getValue = function() {
    return $(window).scrollTop();
  }

  if ('max' in document.createElement('progress')) {
    // Browser supports progress element
    var progressBar = $('progress');

    // Set the Max attr for the first time
    progressBar.attr({
      max: getMax()
    });

    $(document).on('scroll', function() {
      // On scroll only Value attr needs to be calculated
      progressBar.attr({
        value: getValue()
      });
    });

    $(window).resize(function() {
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({
        max: getMax(),
        value: getValue()
      });
    });
  } else {
    var progressBar = $('.progress-bar'),
      max = getMax(),
      value, width;

    var getWidth = function() {
      // Calculate width in percentage
      value = getValue();
      width = (value / max) * 100;
      width = width + '%';
      return width;
    }

    var setWidth = function() {
      progressBar.css({
        width: getWidth()
      });
    }

    $(document).on('scroll', setWidth);
    $(window).on('resize', function() {
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
}
