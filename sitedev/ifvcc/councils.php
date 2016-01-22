<!DOCTYPE html>
<html lang="en">

<head>

    <?php include 'partials/head.php';?>



</head>

<body>





    <?php include 'partials/nav.php';?>




      <section class="breadcrumbs hidden-print">
      	<div class="container">
      		<div class="row" style="text-align: right">
            <ol class="breadcrumb" style="display: inline;">
              <li><a href="/sitedev/ifvcc">Home</a></li>



                      <li>Circuits</li>




            </ol>
          </div>
        </div>
      </section>



<section id="archive" style="margin-bottom: 50px">

  <div class="container">
    <div class="col-md-2"></div>
    <div class="col-md-9 page-left-border">
      <div class="page-left-margin">


        <h2 class="h3" style="text-transform: uppercase; font-weight: 700">IFVCC Councils</h2>
          <img src='/sitedev/ifvcc/img/logo3-purple-black-small.png' style='float: left; margin-right: 15px; margin-top: 10px'>
        <p>Family Violence Coordinating Councils, at both the state and local/circuit levels, provide a forum to improve the institutional, professional and community response to family violence including child abuse, domestic abuse, and elder abuse. Councils provide professional education and prevention; coordinate interventions and services for victims and perpetrators; and contribute to both the improvement of the legal system and the administration of justice.</p>

        <div style="margin-bottom: 50px"></div>





        <div class="archive-content">
<style>.btn {color: #000}</style>

          <div class="text-center">
          <select class="selectpicker" id="getCouncilSelect" data-dropup-auto="false" data-live-search="true">
          <option value="000">Please select a county</option>
        <option value="001">Adams</option>
        <option value="001">Alexander</option>
        <option value="Bond">Bond</option>
        <option value="Boone">Boone</option>
        <option value="Brown">Brown</option>
        <option value="Bureau">Bureau</option>
        <option value="Calhoun">Calhoun</option>
        <option value="Carroll">Carroll</option>
        <option value="Cass">Cass</option>
        <option value="Champaign">Champaign</option>
        <option value="Christian">Christian</option>
        <option value="Clark">Clark</option>
        <option value="Clay">Clay</option>
        <option value="Clinton">Clinton</option>
        <option value="Coles">Coles</option>
        <option value="Cook">Cook</option>
        <option value="Crawford">Crawford</option>
        <option value="Cumberland">Cumberland</option>
        <option value="DeKalb">DeKalb</option>
        <option value="DeWitt">DeWitt</option>
        <option value="Douglas">Douglas</option>
        <option value="DuPage">DuPage</option>
        <option value="Edgar">Edgar</option>
        <option value="Edwards">Edwards</option>
        <option value="Effingham">Effingham</option>
        <option value="Fayette">Fayette</option>
        <option value="Ford">Ford</option>
        <option value="Franklin">Franklin</option>
        <option value="Fulton">Fulton</option>
        <option value="Gallatin">Gallatin</option>
        <option value="Greene">Greene</option>
        <option value="Grundy">Grundy</option>
        <option value="Hamilton">Hamilton</option>
        <option value="Hancock">Hancock</option>
        <option value="Hardin">Hardin</option>
        <option value="Henderson">Henderson</option>
        <option value="Henry">Henry</option>
        <option value="Iroquois">Iroquois</option>
        <option value="Jackson">Jackson</option>
        <option value="Jasper">Jasper</option>
        <option value="Jefferson">Jefferson</option>
        <option value="Jersey">Jersey</option>
        <option value="Jo Daviess">Jo Daviess</option>
        <option value="Johnson">Johnson</option>
        <option value="Kane">Kane</option>
        <option value="Kankakee">Kankakee</option>
        <option value="Kendall">Kendall</option>
        <option value="Knox">Knox</option>
        <option value="LaSalle">LaSalle</option>
        <option value="Lake">Lake</option>
        <option value="Lawrence">Lawrence</option>
        <option value="Lee">Lee</option>
        <option value="Livingston">Livingston</option>
        <option value="Logan">Logan</option>
        <option value="Macon">Macon</option>
        <option value="Macoupin">Macoupin</option>
        <option value="Madison">Madison</option>
        <option value="Marion">Marion</option>
        <option value="Marshall">Marshall</option>
        <option value="Mason">Mason</option>
        <option value="Massac">Massac</option>
        <option value="McDonough">McDonough</option>
        <option value="McHenry">McHenry</option>
        <option value="McLean">McLean</option>
        <option value="Menard">Menard</option>
        <option value="Mercer">Mercer</option>
        <option value="Monroe">Monroe</option>
        <option value="Montgomery">Montgomery</option>
        <option value="Morgan">Morgan</option>
        <option value="Moultrie">Moultrie</option>
        <option value="Ogle">Ogle</option>
        <option value="Peoria">Peoria</option>
        <option value="Perry">Perry</option>
        <option value="Piatt">Piatt</option>
        <option value="Pike">Pike</option>
        <option value="Pope">Pope</option>
        <option value="Pulaski">Pulaski</option>
        <option value="Putnam">Putnam</option>
        <option value="Randolph">Randolph</option>
        <option value="Richland">Richland</option>
        <option value="Rock Island">Rock Island</option>
        <option value="St Clair">St Clair</option>
        <option value="Saline">Saline</option>
        <option value="Sangamon">Sangamon</option>
        <option value="Schuyler">Schuyler</option>
        <option value="Scott">Scott</option>
        <option value="Shelby">Shelby</option>
        <option value="Stark">Stark</option>
        <option value="Stephenson">Stephenson</option>
        <option value="Tazewell">Tazewell</option>
        <option value="Union">Union</option>
        <option value="Vermilion">Vermilion</option>
        <option value="Wabash">Wabash</option>
        <option value="Warren">Warren</option>
        <option value="Washington">Washington</option>
        <option value="Wayne">Wayne</option>
        <option value="White">White</option>
        <option value="Whiteside">Whiteside</option>
        <option value="Will">Will</option>
        <option value="Williamson">Williamson</option>
        <option value="Winnebago">Winnebago</option>
        <option value="Woodford">Woodford</option>
      </select>

</div>



<br/>

<div id="map-instructions" class="text-center well" style="margin-top: 60px">

  <img src='/sitedev/ifvcc/img/logo3-purple-black.png' width='150' style='margin-top: 30px; margin-bottom: 30px'>
  <h2 class="h3">Select a county to view circuit information</h2>
</div>


  <div id="circuit-info"></div>
<!--
<div class="panel panel-default display-panel">
  <div class="panel-heading" style="font-weight: 900; font-size: 20px">
    CIRCUIT HEADING HERE
  </div>
  <div class="panel=body" style="padding-left: 15px; padding-right: 15px; font-size: 14px">
    <div id="circuit-info"></div>
  </div>
</div> -->







        </div>







    </div>

    </div>
  </div>
</div>
</div>

</section>








<script>

$('#getCouncilSelect').on('changed.bs.select', function (e) {


  var circuit = $('#getCouncilSelect option:selected').val();
  if (circuit != '000') {
    console.log(circuit);
    displayURL='/councils/' + circuit;
    console.log(displayURL);
    $('#circuit-info').html('<div style="text-align: center;"><h5>Loading circuit information ...&nbsp;&nbsp;<i class="fa fa-spinner fa-spin"></i></h5></div>');
    $('#circuit-info').load(displayURL).show();
    $('.display-panel').show();
    $('#map-instructions').hide();
    
} else {

  $('#circuit-info').hide();
  $('.display-panel').hide();
  $('#map-instructions').show();

}
});





</script>








  <?php include 'partials/footer.php';?>


<?php include 'partials/javascript.php';?>




</body>

</html>
