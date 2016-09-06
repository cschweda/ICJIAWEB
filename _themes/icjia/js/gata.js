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
        scrollTop: $($anchor.attr('href')).offset().top - 70
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



$(document).ready(function() {

    // display description from first visible slide
    var initialCompDescription = $('.compSlider li').find("div").data("description");
    $('.chart1').after('<div class="compDescription text-center animated zoomIn hidden-xs hidden-sm"></div>');
    $(".compDescription").html(initialCompDescription);

    // var initialCompDescription = $('.compSlider li #corrections').data("description");
    // console.log('Initial comp desc: ' + initialCompDescription);
    // $("#corrections .compDescription").html(initialCompDescription);

    var initialQDescription = $('.qSlider li #2015Q1').data("description");
    // console.log('Initial q desc: ' + initialQDescription);
    $(".qDescription").html(initialQDescription);


    $('.compSlider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerCustom: '#compPager',

        onSliderLoad: function(currentIndex) {
            // $(".qDescription").remove();
            // $(".qDescription").html($slideElement.find("div").data("description"));
            // console.log('SliderQload: ' + $('.qSlider li').first().find("div").data("description"));

        },

        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            $(".compDescription").remove();

        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {

            $('.chart1').after('<div id="" class="compDescription text-center animated zoomIn hidden-xs hidden-sm">test</div>');
            $(".compDescription").html($slideElement.find("div").data("description"));
            //console.log ($slideElement.find("div").data("description"));

        }
    });


    $('.qSlider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        pagerCustom: '#qPager',

        onSliderLoad: function(currentIndex) {
            // $(".qDescription").remove();
            // $(".qDescription").html($slideElement.find("div").data("description"));
            // console.log('SliderQload: ' + $('.qSlider li').first().find("div").data("description"));

        },

        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            $(".qDescription").remove();

        },
        onSlideAfter: function($slideElement, oldIndex, newIndex) {

            $('.chart2').after('<div class="text-center qDescription animated zoomIn hidden-xs hidden-sm"></div>');
            $(".qDescription").html($slideElement.find("div").data("description"));

            console.log ($slideElement.find("div").data("description"));

        }
    });


    // Adds and removes body class depending on screen width.
    function screenClass() {
        if ($(window).innerWidth() > 980) {
            $('.graphPack').addClass('leftRule');
        } else {
            $('.graphPack').removeClass('leftRule');
        }
    }

    // Fire.
    screenClass();

    // And recheck if window gets resized.
    $(window).bind('resize', function() {
        screenClass();
    });



});



Highcharts.setOptions({
    chart: {
        backgroundColor: null,
        shadow: false
    },
    tooltip: {
        pointFormat: "${point.y:,.0f}"
    },

    lang: {
        thousandsSep: ','
    },
    legend: {
            enabled: false
        },

    yAxis: {
      labels: {
          format: '${value:,.0f} '
      },
      title: ''
      }
});


$('#corrections').highcharts({
    data: {
        csv: "Corrections,Funds Designated\n2015 Q1,0\n2015 Q2,0\n2015 Q3,835749\n2015 Q4,0\n2016 Q1,331569\n2016 Q2,190081\n"
    },
    title: {
        text: 'Funds Designated to Corrections'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        }
    }

});



$('#prosecution').highcharts({
    data: {
        csv: "Prosecution,Funds Designated\n2015 Q1,81474\n2015 Q2,0\n2015 Q3,2063869\n2015 Q4,0\n2016 Q1,1249461\n2016 Q2,0"
    },
    title: {
        text: 'Funds Designated to Prosecution'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});




$('#courts').highcharts({
    data: {
        csv: "Courts,Funds Designated\n2015 Q1, 0\n2015 Q2, 281498\n2015 Q3, 606589\n2015 Q4, 0\n2016 Q1, 244170\n2016 Q2, 0"
    },
    title: {
        text: 'Funds Designated to Courts'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },

    }

});


$('#serviceProviders').highcharts({
    data: {
        csv: "Service Providers,Funds Designated\n2015 Q1,1437162\n2015 Q2,15226695\n2015 Q3,8688353.05\n2015 Q4,2253.95\n2016 Q1,902204\n2016 Q2,12136630"
    },
    title: {
        text: 'Funds Designated to Service Providers'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});



$('#defense').highcharts({
    data: {
        csv: "Defense,Funds Designated\n2015 Q1,0\n2015 Q2,0\n2015 Q3,136642\n2015 Q4,0\n2016 Q1,0\n2016 Q2,0"
    },
    title: {
        text: 'Funds Designated to Defense Programs'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});



$('#icjia').highcharts({
    data: {
        csv: "ICJIA / Internal,Funds Designated\n2015 Q1,0\n2015 Q2,0\n2015 Q3,986409\n2015 Q4,0\n2016 Q1,0\n2016 Q2,233947"
    },
    title: {
        text: 'Funds Designated to ICJIA'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});

$('#lawEnforcement').highcharts({
    data: {
        csv: "Law Enforcement,Funds Designated\n2015 Q1,0\n2015 Q2,0\n2015 Q3,2570650\n2015 Q4,0\n2016 Q1,496360\n2016 Q2,239885"
    },
    title: {
        text: 'Funds Designated to Law Enforcement'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});




$('#systemwide').highcharts({
    data: {
        csv: "Systemwide / General,Funds Designated\n2015 Q1,0\n2015 Q2,0\n2015 Q3,0\n2015 Q4,200000\n2016 Q1,200000\n2016 Q2,0"
    },
    title: {
        text: 'Funds Designated to Systemwide Programs'
    },
    chart: {
        type: "column"
    },
    yAxis: {
        labels: {
            format: '${value:,.0f} '
        },
        title: ''
    }

});


$('#2015Q1').highcharts({
    data: {
   			csv: "Component,Funds Designated\nProsecution,81474\nService Provider,1437162"
    },
    title: {
        text: 'Funds Designated in Q1 2015'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  },
  yAxis: {
    labels: {
        format: '${value:,.0f} '
    },
    title: ''
}

});


$('#2015Q2').highcharts({
    data: {
   			csv: "Component,Funds Designated\nCourts,281498\nService Provider,15226695"
    },
    title: {
        text: 'Funds Designated in Q2 2015'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  }

});


$('#2015Q3').highcharts({
    data: {
   			csv: "Component,Funds Designated\nCorrections,835749\nCourts,606589\nDefense,136642\nICJIA / Internal Programs,986409\nLaw Enforcement,2570650\nProsecution,2063869\nService Provider,8688353.05"
    },
    title: {
        text: 'Funds Designated in Q3 2015'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  }

});



$('#2015Q4').highcharts({
    data: {
   			csv: "Component,Funds Designated\nSystemwide / General,200000\nService Provider,2253.95"
    },
    title: {
        text: 'Funds Designated in Q4 2015'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  }

});



$('#2016Q1').highcharts({
    data: {
   			csv: "Component,Funds Designated\nCorrections ,331569\nCourts,244170\nLaw Enforcement,496360\nProsecution,1249461\nService Provider,902204\nSystemwide / General,200000"
    },
    title: {
        text: 'Funds Designated in Q1 2016'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  }

});


$('#2016Q2').highcharts({
    data: {
   			csv: "Component,Funds Designated\nCorrections ,190081\nICJIA / Internal Programs,233947\nLaw Enforcement,239885\nService Provider,12136630"
    },
    title: {
        text: 'Funds Designated in Q2 2016'
    },
    chart: {
    	type: "column",
      backgroundColor: '#f5f5f5'
  }

});
