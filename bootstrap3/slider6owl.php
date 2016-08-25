
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



.item {height: 300px; background: #ccc; width: 1000px}
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
        <div class="text-center" style="margin-top: 120px">
          <a href="#quarter1" class="link-switch">Quarter 1</a><br>
          <a href="#quarter2" class="link-switch">Quarter 2</a><br>
          <a href="#quarter3" class="link-switch">Quarter 3</a><br>
          <a href="#quarter4" class="link-switch">Quarter 4</a><br>
        </div>
      </div>

      <div class="col-md-10">
        <h3 style="background: #ccc; padding-top: 3px; padding-bottom: 3px;">
        <div id="sliderTitle" style="margin-top: 10px; margin-bottom: 10px" class="text-center"></div>
      </h3>

      <h4 style="background: #fff; padding-top: 3px; padding-bottom: 3px;">
      <div id="graphTitle" style="margin-top: 10px;" class="text-center"></div>
    </h4>


  <div id="quarter1" class="stage" data-graph="Quarter 1">
    <div class="owl-carousel" >
        <div class="item" data-title="Graph 1 - 1"><h4>Graph 1 - 1</h4></div>
        <div class="item" data-title="Graph 1 - 2"><h4>Graph 1 - 2</h4></div>
        <div class="item" data-title="Graph 1 - 3"><h4>Graph 1 - 3</h4></div>
        <div class="item" data-title="Graph 1 - 4"><h4>Graph 1 - 4</h4></div>
        <div class="item" data-title="Graph 1 - 5"><h4>Graph 1 - 5</h4></div>
        <div class="item" data-title="Graph 1 - 6"><h4>Graph 1 - 6</h4></div>
        <div class="item" data-title="Graph 1 - 7"><h4>Graph 1 - 7</h4></div>
        <div class="item" data-title="Graph 1 - 8"><h4>Graph 1 - 8</h4></div>
        <div class="item" data-title="Graph 1 - 9"><h4>Graph 1 - 9</h4></div>
        <div class="item" data-title="Graph 1 - 10"><h4>Graph 1 - 10</h4></div>
        <div class="item" data-title="Graph 1 - 11"><h4>Graph 1 - 11</h4></div>
        <div class="item" data-title="Graph 1 - 12"><h4>Graph 1 - 12</h4></div>
    </div>
    </div>


<div id="quarter2" class="stage hidden" data-graph="Quarter 2">

  <div class="owl-carousel" >
      <div class="item" data-title="Graph 2 - 1"><h4>Graph 2 - 1</h4></div>
      <div class="item" data-title="Graph 2 - 2"><h4>Graph 2 - 2</h4></div>
      <div class="item" data-title="Graph 2 - 3"><h4>Graph 2 - 3</h4></div>
      <div class="item" data-title="Graph 2 - 4"><h4>Graph 2 - 4</h4></div>
      <div class="item" data-title="Graph 2 - 5"><h4>Graph 2 - 5</h4></div>
      <div class="item" data-title="Graph 2 - 6"><h4>Graph 2 - 6</h4></div>
      <div class="item" data-title="Graph 2 - 7"><h4>Graph 2 - 7</h4></div>
      <div class="item" data-title="Graph 2 - 8"><h4>Graph 2 - 8</h4></div>
      <div class="item" data-title="Graph 2 - 9"><h4>Graph 2 - 9</h4></div>
      <div class="item" data-title="Graph 2 - 10"><h4>Graph 2 - 10</h4></div>
      <div class="item" data-title="Graph 2 - 11"><h4>Graph 2 - 11</h4></div>
      <div class="item" data-title="Graph 2 - 12"><h4>Graph 2 - 12</h4></div>
  </div>
</div>


<div id="quarter3" class="stage hidden" data-graph="Quarter 3">

    <div class="owl-carousel" >
        <div class="item"><h4>Graph 3 - 1</h4></div>
        <div class="item"><h4>Graph 3 - 2</h4></div>
        <div class="item"><h4>Graph 3 - 3</h4></div>
        <div class="item"><h4>Graph 3 - 4</h4></div>
        <div class="item"><h4>Graph 3 - 5</h4></div>
        <div class="item"><h4>Graph 3 - 6</h4></div>
        <div class="item"><h4>Graph 3 - 7</h4></div>
        <div class="item"><h4>Graph 3 - 8</h4></div>
        <div class="item"><h4>Graph 3 - 9</h4></div>
        <div class="item"><h4>Graph 3 - 10</h4></div>
        <div class="item"><h4>Graph 3 - 11</h4></div>
        <div class="item"><h4>Graph 3 - 12</h4></div>
    </div>
</div>


<div id="quarter4" class="stage hidden" data-graph="Quarter 4">

    <div class="owl-carousel">
        <div class="item"><h4>Graph 4 - 1</h4></div>
        <div class="item"><h4>Graph 4 - 2</h4></div>
        <div class="item"><h4>Graph 4 - 3</h4></div>
        <div class="item"><h4>Graph 4 - 4</h4></div>
        <div class="item"><h4>Graph 4 - 5</h4></div>
        <div class="item"><h4>Graph 4 - 6</h4></div>
        <div class="item"><h4>Graph 4 - 7</h4></div>
        <div class="item"><h4>Graph 4 - 8</h4></div>
        <div class="item"><h4>Graph 4 - 9</h4></div>
        <div class="item"><h4>Graph 4 - 10</h4></div>
        <div class="item"><h4>Graph 4 - 11</h4></div>
        <div class="item"><h4>Graph 4 - 12</h4></div>
    </div>
</div>


</div>
</div>

<!-- <p class="trigger">trigger</p> -->



<script>

getSliderTitle ('#quarter1');
var owl = $('.owl-carousel');
//var graph = $('.stage').data('graph');
//console.log ('Graph title: ' + graph);

owl.owlCarousel({
    items: 1,
    loop:true,
    nav:true
})

owl.on('translated.owl.carousel', function(event) {
    // var comment = $(this).find('.active').find('img').attr('alt');
    // var title = $(this).find('.active').find('img').attr('title');
    // if(comment) $('.image-caption').html('<h4>'+title+'</h4><p>'+comment+'</p>');
    var graphTitle = $(this).find('.active').find('.item').data('title');
    console.log('Graph title: ' + graphTitle)


  });



function getSliderTitle (id) {
  $('#sliderTitle').html($(id).attr("data-graph"));
}


function carouselRebuild (id) {
  $( ".stage" ).each(function( index ) {
    $(this).addClass("hidden")
  });
  $(id).removeClass("hidden");

  //$(id).addClass("animated flipInX");
  //console.log($(id).attr("data-graph"));
  getSliderTitle (id);


  // Fix for off-screen/hidden chart widths.
  var carousel = $(id + ' .owl-carousel').data('owlCarousel');
  //console.log(id);
  carousel._width = $(id + ' .owl-carousel').width();
  carousel.invalidate('width');
  carousel.refresh();
  // var graphTitle = $(this).find('.active').find('.item').data('title');
  // console.log(graphTitle)


}


$(function(){
  $('.link-switch').click(function(e){
    e.preventDefault();
    //console.log($(this).attr('href'));
    var graphID = $(this).attr('href');
    carouselRebuild(graphID);
    console.log ("Rebuild complete");


    });
    });


</script>


  </body>
</html>
