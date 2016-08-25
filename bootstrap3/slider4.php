
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


    <link rel="stylesheet" type="text/css" href="/vendor/slick-1.6.0/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="/vendor/slick-1.6.0/slick/slick-theme.css">
    <style type="text/css">

      .slider {
          width: 50%;
          margin: 100px auto;
      }

      .slick-slide {
        margin: 0px 2px;
      }

      .slick-slide img {
        width: 100%;
      }

      .slick-prev:before,
      .slick-next:before {
          color: black;
      }
    </style>


  </head>
  <body>


<div style="height: 0;">
    <div class="regular slider" >
      <div>
        <img src="http://placehold.it/350x300?text=1">
      </div>
      <div>
        <img src="http://placehold.it/350x300?text=2">
      </div>
      <div>
        <img src="http://placehold.it/350x300?text=3">
      </div>
      <div>
        <img src="http://placehold.it/350x300?text=4">
      </div>
      <div>
        <img src="http://placehold.it/350x300?text=5">
      </div>
      <div>
        <img src="http://placehold.it/350x300?text=6">
      </div>
    </div>
</div>




    <script src="https://code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="./slick/slick.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
      $(document).on('ready', function() {

        $(".regular").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });




      });
    </script>

<script src="/vendor/slick-1.6.0/slick/slick.js" type="text/javascript" charset="utf-8"></script>

  </body>
</html>
