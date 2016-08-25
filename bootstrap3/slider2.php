
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
      Basic Demo | Owl Carousel | 2.0.0-beta.2.4
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
    <script src="/vendor/owl.carousel.2.1.0/new/owl.carousel.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' property="stylesheet" type='text/css'>

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- Animate CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

    <style>

body {margin: 0}

.owl-controls {
  margin: 0;
}

.owl-controls .owl-nav [class*=owl-] {
  background: #FFF;
  color: #3F4044;
  font-size: 12px;
  padding: 7px 7px;
  border-radius: 0;
}

.owl-theme .owl-controls .owl-nav [class*=owl-] {
    color: #fff;
    font-size: 14px;
    margin: 5px;
    padding: 8px 12px;
    background: #d6d6d6;
    display: inline-block;
    cursor: pointer;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}


.owl-controls .owl-nav [class*=owl-]:hover {
  background: #FFF;
  color: #FFF;
}

.owl-controls .owl-prev,
.owl-controls .owl-next {
  position: absolute;
  top: 0;
  bottom: 0;
  height: 45px;
  margin: auto !important;
}

.owl-theme .owl-controls .owl-prev {
  left: 0;
  top: -25px;

}


.owl-theme .owl-controls .owl-next {
  right: 0;
  top: -25px;
}


.slide{ display: block;
    width: 100%;
  height:100%;
  background-position: center center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
  overflow:HIDDEN;
  height: 350px;


}

.slide .spash-headline {
}

.slide .head  {font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-align: center;
  line: height: 40px;
  padding-top: 100px;
  padding-left: 15px;
  padding-right: 15px;
  color: #fff;
font-size: 30px}



a.fpKicker { color: #fff; text-decoration: none}

.slide .overlay {
    width: 100%;
    height: 100%;
    background: rgba(11, 11, 11, 0.35);
    webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
}

.slide .overlay:hover {
    cursor: hand;
    cursor: pointer;
    background: #466c8c;
    webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
}
.active-stage {background: #ccc; padding: 5px}


</style>
  </head>
  <body>


    <?php include '_includes/stage1.php';?>

    <?php include '_includes/stage2.php';?>



    <div class="text-center" style="margin-top: 50px">
      <a href="#stage1" class="link-switch">Stage 1</a><br>
      <a href="#stage2" class="link-switch">Stage 2</a>
    </div>



          <script>


            $(document).ready(function() {





            })








            $(function(){
              $('.link-switch').click(function(e){
                e.preventDefault();
                console.log($(this).attr('href'));
                var graphID = $(this).attr('href');

                if (graphID == '#stage1') {

                    $('#stage2').hide();
                    $('#stage1').show();


                }

                if (graphID == '#stage2') {

                    $('#stage1').hide();
                    $('#stage2').show();


                    }



                  });
                });

          </script>
  </body>
</html>
