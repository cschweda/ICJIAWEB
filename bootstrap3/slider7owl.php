<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Owl Carousel - One slide</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="jQuery Responsive Carousel - Owl Carusel">
    <meta name="author" content="Bartosz Wojciechowski">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700' rel='stylesheet' type='text/css'>
    <!-- <link href="../assets/css/bootstrapTheme.css" rel="stylesheet">
    <link href="../assets/css/custom.css" rel="stylesheet"> -->

    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Owl Carousel Assets -->
    <link href="vendor/owl.carousel.1.3.3/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="vendor/owl.carousel.1.3.3/owl-carousel/owl.theme.css" rel="stylesheet">

    <!-- <link href="../assets/js/google-code-prettify/prettify.css" rel="stylesheet"> -->

    <!-- Animate CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">


      <script src="https://use.fontawesome.com/11155de5f7.js"></script>
      <script   src="https://code.jquery.com/jquery-1.12.4.min.js"   integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="   crossorigin="anonymous"></script>

<style>
.hidden{
    display:none;
}
</style>


  </head>
  <body>



      <div id="demo">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2">
              <div class="text-center" style="margin-top: 120px">
                <a href="#quarter1" class="link-switch" data-title="Quarter 1">Quarter 1</a><br>
                <a href="#quarter2" class="link-switch" data-title="Quarter 2">Quarter 2</a><br>
                <a href="#quarter3" class="link-switch" data-title="Quarter 3">Quarter 3</a><br>
                <a href="#quarter4" class="link-switch" data-title="Quarter 4">Quarter 4</a><br>
              </div>
            </div>
            <div class="col-md-10">

              <h3>
                <div id="sliderTitle" class="text-center">Quarter 1</div>
              </h3>

              <div id="graphTitles">
               <h4>
                <div id="quarter1TitleDiv" class="text-center">Q1 - The Last of us</div>
                <div id="quarter2TitleDiv" class="hidden text-center ">Q2 - The Last of us</div>
                <div id="quarter3TitleDiv" class="hidden text-center ">Q3 - The Last of us</div>
                <div id="quarter4TitleDiv" class="hidden text-center ">Q4 - The Last of us</div>
              </h4>
            </div>



              <div id="quarter1" class="slider owl-carousel">

                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage1.jpg" alt="Q1 - The Last of us"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage2.jpg" alt="Q1 - GTA V"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage3.jpg" alt="Q1 - Mirror Edge"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage4.jpg" alt="Q1 - Misty Mountain"></div>

              </div>

              <div id="quarter2" class="slider owl-carousel hidden">

                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage1.jpg" alt="Q2 - The Last of us"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage2.jpg" alt="Q2 - GTA V"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage3.jpg" alt="Q2 - Mirror Edge"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage4.jpg" alt="Q2 - Misty Mountain"></div>

              </div>


              <div id="quarter3" class="slider owl-carousel hidden">

                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage1.jpg" alt="Q3 - The Last of us"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage2.jpg" alt="Q3 - GTA V"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage3.jpg" alt="Q3 - Mirror Edge"></div>
                  <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage4.jpg" alt="Q3 - Misty Mountain"></div>

              </div>


              <div id="quarter4" class="slider owl-carousel hidden">

                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage1.jpg" alt="Q4 - The Last of us"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage2.jpg" alt="Q4 - GTA V"></div>
                <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage3.jpg" alt="Q4 - Mirror Edge"></div>
                  <div class="item"><img src="vendor/owl.carousel.1.3.3/demos/assets/fullimage4.jpg" alt="Q4 - Misty Mountain"></div>

              </div>



            </div>
          </div>
        </div>
    </div>




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
      $(".owl-carousel").owlCarousel({

      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      //singleItem : true

      // "singleItem:true" is a shortcut for:
      items : 1,
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false,
      afterMove : function (elem) {
                      var currentSlide = this.currentItem;
                      var graphTitle = elem.find(".item").eq(currentSlide).find("img").attr('alt');
                      var targetID = elem.find(".item").eq(currentSlide).parent().parent().parent().parent().attr('id')
                      $('#' + targetID + 'TitleDiv').removeClass('hidden ').html(graphTitle);
                    }

      });
    });

    function displayTitle(title) {
      console.log('Title: ' + title)
    }

    $(function(){
      $('.link-switch').click(function(e){
        e.preventDefault();
        var sliderID = $(this).attr('href');
        var sliderTitle = $(this).data('title');
        var sliderTitleDiv = sliderID + 'TitleDiv';
        $( ".slider" ).each(function( index ) {
          $(this).addClass("hidden")
        });
        $(sliderID).removeClass("hidden");

        $('#sliderTitle').html(sliderTitle);
        $("#graphTitles > h4 > div").addClass("hidden");
        $(sliderTitleDiv).removeClass("hidden");



        });
        });





    </script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  </body>
</html>
