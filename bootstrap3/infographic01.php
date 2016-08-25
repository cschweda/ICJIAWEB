<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Owl Carousel - One slide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="jQuery Responsive Carousel - Owl Carusel">
    <meta name="author" content="Bartosz Wojciechowski">

    <!-- <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700' rel='stylesheet' type='text/css'> -->
    <!-- <link href="../assets/css/bootstrapTheme.css" rel="stylesheet">
    <link href="../assets/css/custom.css" rel="stylesheet"> -->

    <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Roboto:100,300,400,700,700i,900,900i|Special+Elite" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Owl Carousel Assets -->
    <link href="vendor/owl.carousel.1.3.3/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="vendor/owl.carousel.1.3.3/owl-carousel/owl.theme.css" rel="stylesheet">

    <!-- <link href="../assets/js/google-code-prettify/prettify.css" rel="stylesheet"> -->

    <!-- Animate CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

    <!-- Hover CSS -->
    <link rel="stylesheet" href="vendor/Hover-master/css/hover.css">







      <script src="https://use.fontawesome.com/11155de5f7.js"></script>
      <script   src="https://code.jquery.com/jquery-1.12.4.min.js"   integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="   crossorigin="anonymous"></script>

      <script src="https://code.highcharts.com/highcharts.js"></script>




<style>
a, a:hover {text-decoration: none; padding: 3px}
a.active {background: #2098d1; color: white;}
.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
  text-decoration: none;

}




body {font-family: 'Roboto', sans-serif; font-size: 18px;}
.hidden{
    display:none;
}



#graphTitles h4 {font-family: 'Oswald', sans-serif; font-size: 28px; text-transform: uppercase; margin-bottom: 20px; font-weight: 900}
.white {color: #fff;}
.source-text {font-weight: 300}


h1 {font-family: 'Special Elite', cursive; font-size: 85px; text-transform: uppercase;}
.title {border-top: 3px solid #fff; padding-top: 10px; margin-top: 0px; font-family: 'Oswald', sans-serif; font-size: 36px; text-transform: uppercase; margin-bottom: 20px; font-weight: 900}

/*.title {border-top: 3px solid #fff; padding-top: 10px; margin-top: 0px; font-family: 'Special Elite', san-serif; font-size: 40px; text-transform: uppercase; margin-bottom: 20px; font-weight: 900}*/



.text {font-family: 'Roboto', sans-serif; font-weight: 100;}

#graphContexts h4 {font-family: 'Roboto', sans-serif; font-size: 18px; margin-bottom: 20px; font-weight: 100}
.white {color: #fff;}
.offWhite {color: #ddd}

#section0 {background: #152b5d }
#section1 {background: #2f2f2d }
#section2 {background: #4397A5 }
#section3 {background: #2f2f2d}
#section4 {background: #ad005b }


#section0, #section1, #section2, #section3, #section4 {padding-top: 80px; padding-bottom: 80px}
#section0 {padding-top: 30px}

.chart-item {width: 100%; height: 350px}


</style>



  </head>
  <body>
    <section id="section0">
      <div class="container">
        <div class="col-md-12">
      <h1 class="white">Eget facilisis neque</h1>
      <div class="col-md-6">
        <div class="white title">

        </div>

        <blockquote class="white animated zoomIn">
      “Phasellus risus urna,
     <strong>dignissim at nibh sit</strong>, etus et malesuada fames ac turpis egestas elementum sapien ac, rhoncus libero. Nam vel odio viverra, porta dui ac, luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas”
    </blockquote>
    <span class="offWhite"><strong>- John Doe</strong>, Research Analyst</span><br>
    <small class="source-text white">Source: Acme Research</small>
    <br>
    <img src="img/placeholder-225.jpg" style="margin-top: 25px;" class="animated zoomIn">

      </div>
      <div class="col-md-6">
        <p class="white text">Aliquam velit nibh, imperdiet eu tristique vel, aliquet nec eros. Maecenas lacinia diam vitae ex ultricies lacinia. Quisque at urna cursus, elementum sapien ac, rhoncus libero. Vestibulum tristique purus vel nulla vehicula, ut condimentum turpis consequat. Phasellus risus urna, dignissim at nibh sit amet, fermentum porta mi. Nam vel odio viverra, porta dui ac, luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

        <p class="white text">Aliquam velit nibh, imperdiet eu tristique vel, aliquet nec eros. Maecenas lacinia diam vitae ex ultricies lacinia. Quisque at urna cursus, elementum sapien ac, rhoncus libero. Vestibulum tristique purus vel nulla vehicula, ut condimentum turpis consequat. Phasellus risus urna, dignissim at nibh sit amet, fermentum porta mi. Nam vel odio viverra, porta dui ac, luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>


        <p class="white text">Aliquam velit nibh, imperdiet eu tristique vel, aliquet nec eros. Maecenas lacinia diam vitae ex ultricies lacinia. Quisque at urna cursus, elementum sapien ac, rhoncus libero. Vestibulum tristique purus vel nulla vehicula.</p>

      </div>
    </div>


    </section>


      <section id="section1">
        <div class="container">
          <div class="row">
            <div class="col-md-2">
              <div class="text-center" style="margin-top: 120px">
                <a href="#quarter1" class="active link-switch hvr-sweep-to-right" data-title="Quarter 1">Slider 1</a><br>
                <a href="#quarter2" class="link-switch hvr-sweep-to-right" data-title="Quarter 2">Slider 2</a><br>
                <a href="#quarter3" class="link-switch hvr-sweep-to-right" data-title="Quarter 3">Slider 3</a><br>

              </div>
            </div>
            <div class="col-md-10">

              <!-- <h3>
                <div id="sliderTitle" class="text-center">Quarter 1</div>
              </h3> -->

              <div id="graphTitles">
               <h4 class="white">
                <div id="quarter1TitleDiv" class="">Slider Q1 - Slide 1</div>
                <div id="quarter2TitleDiv" class="hidden">Slider Q2 - Slide 1</div>
                <div id="quarter3TitleDiv" class="hidden">Slider Q3 - Slide 1</div>

              </h4>
            </div>

          <div id="graphContexts">
             <h4 class="white">
              <div id="quarter1ContextDiv" >1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque.</div>
                <div id="quarter2ContextDiv" class="hidden">1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque.</div>
              <div id="quarter3ContextDiv" class="hidden">1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque.</div>
              <div id="quarter4ContextDiv" class="hidden">1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque.</div>
            </h4>
          </div>



              <div id="quarter1" class="slider owl-carousel1 hidden">

                <div class="item" data-title="Slider Q1 - Slide 1" data-context="Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero.">
                  <div id="hc1" style="float: left; max-width: 225px; height: 300px; margin-right: 45px;">
                  </div>
                  <div id="hc2" style="float: left; max-width: 225px; height: 300px; margin-right: 45px;"></div>

                </div>
                <div class="item" data-title="Slider Q1 - Slide 2" data-context="Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque. Nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque.">
                  <span id="hc4" style="float: left; max-width: 225px; height: 300px; margin-right: 45px;" class=""></span>
                  <span id="hc5" style="float: left; max-width: 225px; height: 300px; margin-right: 45px;"></span>
                  <span id="hc6" style="float: left; max-width: 225px; height: 300px"></span>
                </div>


              </div>

              <div id="quarter2" class="slider owl-carousel1 hidden">

                <div class="item" data-title="Slider Q2 - Slide 1" data-context="1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="" ></div>
                <div class="item" data-title="Slider Q2 - Slide 2"  data-context="2 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 2" ></div>
                <div class="item" data-title="Slider Q2 - Slide 3"  data-context="3 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 3" ></div>
                <div class="item" data-title="Slider Q2 - Slide 4"  data-context="4 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 4" ></div>

              </div>





              <div id="quarter3" class="slider owl-carousel1 hidden">

                <div class="item" data-title="Slider Q3 - Slide 1" data-context="1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="" ></div>
                <div class="item" data-title="Slider Q3 - Slide 2"  data-context="2 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 2" ></div>
                <div class="item" data-title="Slider Q3 - Slide 3"  data-context="3 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 3" ></div>
                <div class="item" data-title="Slider Q3 - Slide 4"  data-context="4 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."><img src="img/placeholder-960.jpg" alt="Slider Q2 - Slide 4" ></div>




              </div>



            </div>
          </div>
        </div>
    </section>


    <section id="section2">


      <div class="container">

        <div class="col-md-6">
          <img data-src="img/placeholder-450.jpg" class="lazy asset1 animated flipInX">
        </div>

          <div class="col-md-6">

            <div class="white title">
              Lorem ipsum dolor sit amet
            </div>

            <p class="white text">Aliquam velit nibh, imperdiet eu tristique vel, aliquet nec eros. Maecenas lacinia diam vitae ex ultricies lacinia. Quisque at urna cursus, elementum sapien ac, rhoncus libero. Vestibulum tristique purus vel nulla vehicula, ut condimentum turpis consequat. Phasellus risus urna, dignissim at nibh sit amet, fermentum porta mi. Nam vel odio viverra, porta dui ac, luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

            <blockquote class="white">
          “Phasellus risus urna,
         <strong>dignissim at nibh sit</strong>, etus et malesuada fames ac turpis egestas.”
        </blockquote>
        <span class="offWhite"><strong>- John Doe</strong>, Research Analyst</span><br>
        <small class="source-text white">Source: Acme Research</small>

          </div>


      </div>


    </section>


    <section id="section3">


      <div class="container">
        <div class="col-md-2"></div>
        <div class="col-md-10">

      <div id="test2" class="slider2 owl-carousel2">

        <div class="item"><img src="img/placeholder-960.jpg" alt="Slider Q1 - Slide 1" data-context="1 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."></div>
        <div class="item"><img src="img/placeholder-960.jpg" alt="Slider Q1 - Slide 2" data-context="2 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."></div>
        <div class="item"><img src="img/placeholder-960.jpg" alt="Slider Q1 - Slide 3" data-context="3 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."></div>
        <div class="item"><img src="img/placeholder-960.jpg" alt="Slider Q1 - Slide 4" data-context="4 Nam nec mollis velit. Quisque rutrum urna mi, non gravida nisl posuere nec. Integer eu neque quis nisi vulputate gravida vel eget libero. Maecenas et rutrum arcu, eget facilisis neque."></div>

      </div>
    </div>
  </div>


    </section>


    <section id="section4">


      <div class="container">


          <div class="col-md-6">

            <div class="white title">
              Lorem ipsum dolor sit amet
            </div>

            <p class="white text">Aliquam velit nibh, imperdiet eu tristique vel, aliquet nec eros. Maecenas lacinia diam vitae ex ultricies lacinia. Quisque at urna cursus, elementum sapien ac, rhoncus libero. Vestibulum tristique purus vel nulla vehicula, ut condimentum turpis consequat. Phasellus risus urna, dignissim at nibh sit amet, fermentum porta mi. Nam vel odio viverra, porta dui ac, luctus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

            <blockquote class="white">
          “Phasellus risus urna,
         <strong>dignissim at nibh sit</strong>, etus et malesuada fames ac turpis egestas.”
        </blockquote>
        <span class="offWhite"><strong>- John Doe</strong>, Research Analyst</span><br>
        <small class="source-text white">Source: Acme Research</small>

          </div>

          <div class="col-md-6">

          <img data-src="img/placeholder-450.jpg" class="lazy asset1 animated flipInY">

          </div>


      </div>


    </section>



    <script src="vendor/owl.carousel.1.3.3/owl-carousel/owl.carousel.js"></script>


    <!-- Demo -->

    <style>
    #owl-demo .item img{
        display: block;
        width: 100%;
        height: auto;
    }
    </style>


    <script>
    $(document).ready(function() {

      $("#quarter1").removeClass('hidden');



      owlVars={

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      //singleItem : true

      // "singleItem:true" is a shortcut for:
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
       pagination : true,
      itemsTablet: false,
      itemsMobile : false,

      afterMove : function (elem) {
                      var currentSlide = this.currentItem;
                      var graphTitle = elem.find(".item").eq(currentSlide).data('title');
                      console.log(graphTitle);
                      var graphContext = elem.find(".item").eq(currentSlide).data('context');
                      console.log(graphContext);
                      var targetID = elem.find(".item").eq(currentSlide).parent().parent().parent().parent().attr('id');
                      console.log('Target ID: ' + targetID);
                      // clone element, remove it in order to restart animation
                      // https://css-tricks.com/restart-css-animation/
                      // $('#' + targetID + 'ContextDiv').addClass('hidden ')
                      // var el=$('#' + targetID + 'ContextDiv');
                      // var newone = el.clone(true);
                      // el.before(newone);
                      // $("." + el.attr("class") + ":first").remove();


                      $('#' + targetID + 'ContextDiv').replaceWith($('#' + targetID + 'ContextDiv').clone(true));


                      $('#' + targetID + 'TitleDiv').removeClass('hidden ').html(graphTitle);
                      $('#' + targetID + 'ContextDiv').removeClass('hidden ').addClass("animated flipInX").html(graphContext);
                    }

      };
      $(".owl-carousel1").owlCarousel(owlVars);
      $(".owl-carousel2").owlCarousel(owlVars);







    });

    function displayTitle(title) {
      console.log('Title: ' + title)
    }

    $(function(){
      $('.link-switch').click(function(e){
        e.preventDefault();
        $('.active').removeClass('active');
        $(this).addClass('active');
        var sliderID = $(this).attr('href');
        var sliderTitle = $(this).data('title');
        var sliderTitleDiv = sliderID + 'TitleDiv';
        var sliderContextDiv = sliderID + 'ContextDiv';
        $( ".slider" ).each(function( index ) {
          $(this).addClass("hidden")
        });
        $(sliderID).removeClass("hidden");

        $('#sliderTitle').html(sliderTitle);
        $("#graphTitles > h4 > div").addClass("hidden animated fadeIn");
        $("#graphContexts > h4 > div").addClass("hidden animated flipInX");
        $(sliderTitleDiv).removeClass("hidden").addClass("animated fadeIn");
        $(sliderContextDiv).removeClass("hidden").addClass("animated flipInX");



        });
        });





    </script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <!-- jquery lazy: http://jquery.eisbehr.de/lazy/ -->

  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.3/jquery.lazy.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.lazy/1.7.3/jquery.lazy.plugins.min.js"></script>

<script>
$(function() {
  $('.lazy').Lazy();
});









</script>

<script type="text/javascript" src="js/highchartsData.js"></script>

  </body>
</html>
