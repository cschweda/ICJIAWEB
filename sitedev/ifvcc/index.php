<!DOCTYPE html>
<html lang="en">

<head>

  <?php include 'partials/head.php';?>


</head>

<body>



    <?php include 'partials/nav.php';?>




    <header id="myCarousel" class="carousel slide" style="border-top: 2px solid #666">
        <!-- Indicators -->
        <!-- <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>

        </ol> -->

        <!-- Wrapper for Slides -->
        <div class="carousel-inner">
            <div class="item active">
                <!-- Set the first background image using inline CSS below. -->
                <div class="fill" style="background-image:url('img/slider3a.jpg');"></div>
                <div class="carousel-caption">

                    <h2><span class="heavy spaced" style="color: #aaa">ILLINOIS</span>&nbsp;|&nbsp;<span class="thin" style="text-transform: uppercase; color: #fff">Family Violence Coordinating Councils</span></h2>
                    <h5 style="margin-top: 15px; color: #bbb;">Sponsored by the Illinois Criminal Justice Information Authority</h5>
                      <img src='/sitedev/ifvcc/img/logo3-white-slider.png' style='margin-top: 15px'>

                </div>
            </div>
            <div class="item">
                <!-- Set the second background image using inline CSS below. -->
                <div class="fill" style="background-image:url('img/slider1.jpg');"></div>
                <div class="carousel-caption">

                    <h2><span class="heavy spaced" style="color: #aaa">ILLINOIS</span>&nbsp;|&nbsp;<span class="thin" style="text-transform: uppercase; color: #fff">Family Violence Coordinating Councils</span></h2>
                    <h5 style="margin-top: 15px; color: #aaa;">Sponsored by the Illinois Criminal Justice Information Authority</h5>
                    <img src='/sitedev/ifvcc/img/logo3-white-slider.png' style='margin-top: 15px'>

                </div>
            </div>

        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>

    </header>






<section id="flex-section" class="hidden-xs">
      <div class="equalHWrap eqWrap">
        <div class="equalHW eq col-hero1">

          <div class="flex-content">
            <h2 class="h3 text-center" style="text-transform: uppercase; font-weight: 900; margin-bottom: 8px">Find a Council</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.</p>
          <div class="text-center">
          <a class="btn btn-default heavy scrollclass" data-target="#find-a-council" style="pointer" role="button">Find out More&nbsp;&nbsp;<i class="fa fa-angle-double-down" style="font-weight: 900"></i></a>
        </div>

        </div>

        </div>

        <div class="equalHW eq col-hero2">

          <div class="flex-content">
            <h2 class="h3 text-center" style="text-transform: uppercase; font-weight: 900; margin-bottom: 8px">About the IFVCC</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.</p>
          <div class="text-center">
          <a class="btn btn-default heavy scrollclass" data-target="#about-the-ifvcc" style="pointer" role="button">Find out More&nbsp;&nbsp;<i class="fa fa-angle-double-down" style="font-weight: 900"></i></a>
        </div>

        </div>

        </div>
        <div class="equalHW eq col-hero3">

          <div class="flex-content">
            <h2 class="h3 text-center" style="text-transform: uppercase; font-weight: 900; margin-bottom: 8px">News & Events</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo.</p>
          <div class="text-center">
          <a class="btn btn-default heavy scrollclass" data-target="#about-the-ifvcc" style="pointer" role="button">Find out More&nbsp;&nbsp;<i class="fa fa-angle-double-down" style="font-weight: 900"></i></a>
          </div>
        </div>

        </div>
      </div>
    </section>




<section id="find-a-council" class="hidden-xs">
  <div class="container section-content">

    <div class="col-md-12">
        <h2 class="h3" style="text-transform: uppercase; font-weight: 900; border-bottom: 1px solid #ccc; padding-bottom: 8px; margin-bottom: 40px">Find a Council</h2>
    </div>

    <div class="col-md-6 text-center">


      <div id="foobar">&nbsp;</div>
      <div id="map-container-2"></div>
    </div>

    <div class="col-md-6" >


      <div id="map-instructions" class="text-center well" style="margin-top: 60px">

        <img src='/sitedev/ifvcc/img/logo3-purple-black.png' width='150' style='margin-top: 30px; margin-bottom: 30px'>
        <h2 class="h3">Select a county to view circuit information</h2>
      </div>



      <div class="panel panel-default display-panel">
        <div class="panel-heading" style="font-weight: 900; font-size: 20px">
          CIRCUIT HEADING HERE
        </div>
        <div class="panel=body" style="padding-left: 15px; padding-right: 15px; font-size: 14px">
          <div id="circuit-info"></div>
        </div>
      </div>
    </div>

  </div>
</section>







    <section id="about-the-ifvcc">
      <div class="container section-content">

        <div class="col-md-7">
          <h2 class="h3" style="text-transform: uppercase; font-weight: 900; border-bottom: 1px solid #fff; padding-bottom: 8px; margin-bottom: 20px">About the IFVCC</h2>

          <!-- <img src='/sitedev/ifvcc/img/logo-placeholder-large.jpg' width='200' style="float: left; padding-right: 20px; margin-top: 10px; padding-bottom: 0px">
 -->

          <p>
            <p><span class="firstcharacter">F</span>amily Violence Coordinating Councils, at both the state and local/circuit levels, provide a forum to improve the institutional, professional and community response to family violence including child abuse, domestic abuse, and elder abuse. Councils provide professional education and prevention; coordinate interventions and services for victims and perpetrators; and contribute to both the improvement of the legal system and the administration of justice.</p>
            <p>Initiated under the auspices of the Illinois Supreme Court in 1990, Illinois is one of the few states that has a systematically organized, statewide infrastructure that operates at both the state and local levels.  Since the 1970's, a comprehensive, coordinated approach to preventing family violence has been promoted as the most efficient and effective way to penetrate systems and mobilize them for the greatest change.</p>

            <p>Annually, up to 15,000 professionals from across Illinois participate in trainings and council projects. These include family violence training and education of criminal justice and community professionals; development of criminal justice procedures, protocols, and services related to family violence; and the facilitation of coordinated community response to family violence in local areas. These Local Councils provide opportunities for communication between criminal justice professionals and community service providers as well as encourage the sharing of information and resources, thereby providing for development of a network of safety and assistance for family violence victims. </p>
            <p>
              Chief and circuit judges convene and chair the 23 local councils in all 102 counties in Illinois which are composed of policy-level decision makers who represent agencies and services to help intervene and prevent family violence.
            </p>

        </div>

        <div class="col-md-5">
          <h2 class="h3" style="text-transform: uppercase; font-weight: 900; border-bottom: 1px solid #fff; padding-bottom: 8px; margin-bottom: 20px">News & Events</h2>
        </div>

      </div>
    </section>




  <?php include 'partials/footer.php';?>


<?php include 'partials/javascript.php';?>











</body>

</html>
