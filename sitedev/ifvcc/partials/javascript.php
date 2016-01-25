<!-- Bootstrap Core JavaScript -->
<script src="js/bootstrap.min.js"></script>



<!-- https://silviomoreto.github.io/bootstrap-select/ -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.9.4/js/bootstrap-select.min.js"></script>

<script>
//jQuery to collapse the navbar on scroll


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



  $("#map-container-2").insertFusionCharts({
      type: "maps/illinois",
      width: "500",
      height: "750",
      dataFormat: "XMLURL",
      dataSource: "/data/ifvcc.xml",
      loadMessage: "Loading Illinois circuit data. Please wait.",
      events: {
            "entityRollover": function(evt, data) {
                circuit=data.value / 10;


                suffix = ordinal_suffix_of(circuit);
                if (circuit == '100') {
                  label = 'Cook County | Cook';
                } else {
                  label = data.label + ' County ' + ' | ' + suffix + ' Circuit';
                  // label = suffix + ' Circuit';
                }



                $('#foobar').html(label);

            },

            "entityClick": function(evt, data) {
                circuit=data.value / 10;
                displayURL='/councils/' + padToThree(circuit);
                //console.log('Circuit ' + circuit + ' Padded: ' + padToThree(circuit));
                $('#circuit-info').html('<div style="text-align: center;"><h5>Loading circuit information ...&nbsp;&nbsp;<i class="fa fa-spinner fa-spin"></i></h5></div>');
                $('#circuit-info').load(displayURL);
                $('.display-panel').show();
                $('#map-instructions').hide();
                console.log(displayURL)

            },
        }
  });



function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}


function padToThree(number) {
  if (number<=999) { number = ("00"+number).slice(-3); }
  return number;
}


    $('.carousel').carousel({
        interval: 10000 //changes the speed
    })


    $('.scrollclass').click(function() {
      $('body').scrollTo($(this).data('target'), {
        duration: 1200,
        offset: -50
      });
    });




    </script>
