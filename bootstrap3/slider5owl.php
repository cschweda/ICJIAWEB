
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

    <link rel="stylesheet" href="vendor/owl.carousel.2.1.0/new/owl.carousel.css">
    <link rel="stylesheet" href="vendor/owl.carousel.2.1.0/new/owl.theme.default.css">

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
    <script src="vendor/owl.carousel.2.1.0/new/owl.carousel.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' property="stylesheet" type='text/css'>

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- Animate CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

    <style>



.item {height: 300px; background: #ccc; width: 2200px}
.hidden{
    display:none;
}
/* fix for overflow margin */
.owl-stage-outer {max-height: 280px; overflow: hidden}
</style>
  </head>
  <body>

    <div class="container-fluid">
      <div class="col-md-2">
        <div class="text-center" style="margin-top: 50px">
          <a href="#target1" class="link-switch">Target 1</a><br>
          <a href="#target2" class="link-switch">Target 2</a><br>
          <a href="#target3" class="link-switch">Target 3</a><br>
        </div>
      </div>

      <div class="col-md-10">

    <div id="target1" class="stage">
    <div class="owl-carousel">
        <div class="item slide" data-title="test 1"><h4>1</h4></div>
        <div class="item slide" data-title="test 2" ><h4>2</h4></div>
        <div class="item slide" data-title="test 3"><h4>3</h4></div>
        <div class="item slide" data-title="test 4"><h4>4</h4></div>
        <div class="item slide" data-title="test 5"><h4>5</h4></div>
        <div class="item slide" data-title="test 6"><h4>6</h4></div>
        <div class="item slide" data-title="test 7"><h4>7</h4></div>
        <div class="item slide" data-title="test 8"><h4>8</h4></div>

    </div>
    </div>


<div id="target2" class="stage hidden">

    <div class="owl-carousel">
        <div class="item"><h4>1</h4></div>
        <div class="item"><h4>2</h4></div>
        <div class="item"><h4>3</h4></div>
        <div class="item"><h4>4</h4></div>
        <div class="item"><h4>5</h4></div>
        <div class="item"><h4>6</h4></div>
        <div class="item"><h4>7</h4></div>
        <div class="item"><h4>8</h4></div>
        <div class="item"><h4>9</h4></div>
        <div class="item"><h4>10</h4></div>
        <div class="item"><h4>11</h4></div>
        <div class="item"><h4>12</h4></div>
    </div>
</div>


<div id="target3" class="stage hidden">

    <div class="owl-carousel">
        <div class="item"><h4>1</h4></div>
        <div class="item"><h4>2</h4></div>
        <div class="item"><h4>3</h4></div>
        <div class="item"><h4>4</h4></div>
        <div class="item"><h4>5</h4></div>
        <div class="item"><h4>6</h4></div>
        <div class="item"><h4>7</h4></div>
        <div class="item"><h4>8</h4></div>
        <div class="item"><h4>9</h4></div>
        <div class="item"><h4>10</h4></div>
        <div class="item"><h4>11</h4></div>
        <div class="item"><h4>12</h4></div>
    </div>
</div>

</div>
</div>

<!-- <p class="trigger">trigger</p> -->



<script>

var owl = $('.owl-carousel');

owl.on('initialized.owl.carousel', function(event) {
    // var comment = $(this).find('.active').find('img').attr('alt');
    // var title = $(this).find('.active').find('img').attr('title');
    // if(comment) $('.image-caption').html('<h4>'+title+'</h4><p>'+comment+'</p>');
    var title = $(this).find('.active').find('.slide').data('title');
    console.log ('Stage initialized -- Title ' + title);
  });

owl.owlCarousel({
    items: 1,
    loop:true,
    nav:true,
})


owl.on('translated.owl.carousel', function(event) {
    // var comment = $(this).find('.active').find('img').attr('alt');
    // var title = $(this).find('.active').find('img').attr('title');
    // if(comment) $('.image-caption').html('<h4>'+title+'</h4><p>'+comment+'</p>');
    var title = $(this).find('.active').find('.slide').data('title');
    console.log ('Stage transform -- Title ' + title);
  });

// $(".trigger").click(function(){
//     $("#target1").toggleClass("hidden");
//     $("#target2").toggleClass("hidden");
//     $("#target3").toggleClass("hidden");
//
//
//     var carousel = $('#target1 .owl-carousel').data('owlCarousel');
//     //console.log(carousel);
//     carousel._width = $('#target1 .owl-carousel').width();
//     carousel.invalidate('width');
//     carousel.refresh();
//
//     var carousel = $('#target2 .owl-carousel').data('owlCarousel');
//     //console.log(carousel);
//     carousel._width = $('#target2 .owl-carousel').width();
//     carousel.invalidate('width');
//     carousel.refresh();
//
//     var carousel = $('#target3 .owl-carousel').data('owlCarousel');
//     //console.log(carousel);
//     carousel._width = $('#target3 .owl-carousel').width();
//     carousel.invalidate('width');
//     carousel.refresh();
//
// });

function carouselRebuild (id) {
  $( ".stage" ).each(function( index ) {
    $(this).addClass("hidden")
  });
  $(id).removeClass("hidden");

  var carousel = $(id + ' .owl-carousel').data('owlCarousel');
  //console.log(id);
  // fix for determining width when hidden
  carousel._width = $(id + ' .owl-carousel').width();
  carousel.invalidate('width');
  carousel.refresh();

}


$(function(){
  $('.link-switch').click(function(e){
    e.preventDefault();
    //console.log($(this).attr('href'));
    var graphID = $(this).attr('href');
    carouselRebuild(graphID);
      });
    });


</script>


  </body>
</html>
