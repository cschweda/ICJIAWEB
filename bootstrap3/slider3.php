
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- head -->
    <meta charset="utf-8">
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Basic usage demo">
    <meta name="author" content="Bartosz Wojciechowski">
    <title>
      Basic Demo
    </title>

    <!-- Stylesheets -->
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,400italic,300italic' rel='stylesheet' type='text/css'>


    <!-- Owl Stylesheets -->

    <link rel="stylesheet" href="/vendor/owl.carousel.2.1.0/new/owl.carousel.css">
    <link rel="stylesheet" href="/vendor/owl.carousel.2.1.0/new/owl.theme.default.css">

    <script src="https://use.fontawesome.com/11155de5f7.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

    <!-- Favicons -->
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="shortcut icon" href="../assets/ico/favicon.png">
    <link rel="shortcut icon" href="favicon.ico">

    <!-- Yeah i know js should not be in header. Its required for demos.-->

    <!-- javascript -->
    <script   src="https://code.jquery.com/jquery-1.12.4.min.js"   integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="   crossorigin="anonymous"></script>

    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' property="stylesheet" type='text/css'>

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- Animate CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">



    <!-- bxSlider Javascript file -->
    <script src="/vendor/jquery.bxslider/jquery.bxslider.js"></script>
    <!-- bxSlider CSS file -->
  <link href="/vendor/jquery.bxslider/jquery.bxslider.css" rel="stylesheet" />


  </head>
  <body>

<div class="target" style="height: 300px">
    <?php include '_includes/bxslider1.php';?>
    <?php include '_includes/bxslider2.php';?>
</div>


    <div class="controls">
      <a class="link-switch" href="#bxslider1">Slider 1</a>
      <a class="link-switch" href="#bxslider2">Slider 2</a>
    </div>



    <script>
    $(function(){
      $('.link-switch').click(function(e){
        e.preventDefault();
        console.log($(this).attr('href'));
        var graphID = $(this).attr('href');

        if (graphID == '#bxslider1') {

          console.log (graphID);


        }

        if (graphID == '#bxslider2') {

          console.log (graphID);




            }



          });
        });
        </script>






    <script>

    var sliderName = 'bxslider1';
    function sliderInit(sliderName) {

      $('.bxslider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        adaptiveHeight: true,
        slideMargin: 2,
        onSliderLoad: function(){
          $('#' + sliderName).css("display", "block !important");
          $('#' + sliderName).css("height", "auto !important");
          $('#' + sliderName).css("overflow", "visible");

        }
      });

    }
    $(document).ready(function(){
      sliderInit(sliderName);
    });
</script>


  </body>
</html>
