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
    <div class="col-md-9">
      <div class="">


        <h2 class="h3" style="text-transform: uppercase; font-weight: 700">IFVCC Councils</h2>
          <img src='/sitedev/ifvcc/img/logo3-purple-black-small.png' style='float: left; margin-right: 15px; margin-top: 10px'>
        <p>Family Violence Coordinating Councils, at both the state and local/circuit levels, provide a forum to improve the institutional, professional and community response to family violence including child abuse, domestic abuse, and elder abuse. Councils provide professional education and prevention; coordinate interventions and services for victims and perpetrators; and contribute to both the improvement of the legal system and the administration of justice.</p>

        <div style="margin-bottom: 50px"></div>





        <div class="council-content" style="margin-bottom: 100px">
<style>.btn {color: #000}</style>

          <div class="text-center">
          <select class="selectpicker" id="getCouncilSelect" data-dropup-auto="false" data-live-search="true">
          <option value="000">Please select a county</option>
        <option value="008">Adams</option>
        <option value="001">Alexander</option>
        <option value="003">Bond</option>
        <option value="017">Boone</option>
        <option value="008">Brown</option>
        <option value="013">Bureau</option>
        <option value="008">Calhoun</option>
        <option value="015">Carroll</option>
        <option value="008">Cass</option>
        <option value="006">Champaign</option>
        <option value="004">Christian</option>
        <option value="005">Clark</option>
        <option value="004">Clay</option>
        <option value="004">Clinton</option>
        <option value="005">Coles</option>
        <option value="500">Cook</option>
        <option value="002">Crawford</option>
        <option value="005">Cumberland</option>
        <option value="023">DeKalb</option>
        <option value="006">DeWitt</option>
        <option value="006">Douglas</option>
        <option value="018">DuPage</option>
        <option value="005">Edgar</option>
        <option value="002">Edwards</option>
        <option value="004">Effingham</option>
        <option value="004">Fayette</option>
        <option value="011">Ford</option>
        <option value="002">Franklin</option>
        <option value="009">Fulton</option>
        <option value="002">Gallatin</option>
        <option value="007">Greene</option>
        <option value="013">Grundy</option>
        <option value="002">Hamilton</option>
        <option value="009">Hancock</option>
        <option value="002">Hardin</option>
        <option value="009">Henderson</option>
        <option value="014">Henry</option>
        <option value="021">Iroquois</option>
        <option value="001">Jackson</option>
        <option value="004">Jasper</option>
        <option value="002">Jefferson</option>
        <option value="007">Jersey</option>
        <option value="015">Jo Daviess</option>
        <option value="001">Johnson</option>
        <option value="016">Kane</option>
        <option value="021">Kankakee</option>
        <option value="023">Kendall</option>
        <option value="009">Knox</option>
        <option value="019">LaSalle</option>
        <option value="013">Lake</option>
        <option value="002">Lawrence</option>
        <option value="015">Lee</option>
        <option value="011">Livingston</option>
        <option value="011">Logan</option>
        <option value="006">Macon</option>
        <option value="007">Macoupin</option>
        <option value="003">Madison</option>
        <option value="004">Marion</option>
        <option value="010">Marshall</option>
        <option value="008">Mason</option>
        <option value="001">Massac</option>
        <option value="009">McDonough</option>
        <option value="022">McHenry</option>
        <option value="011">McLean</option>
        <option value="008">Menard</option>
        <option value="014">Mercer</option>
        <option value="020">Monroe</option>
        <option value="004">Montgomery</option>
        <option value="007">Morgan</option>
        <option value="006">Moultrie</option>
        <option value="015">Ogle</option>
        <option value="010">Peoria</option>
        <option value="020">Perry</option>
        <option value="006">Piatt</option>
        <option value="008">Pike</option>
        <option value="001">Pope</option>
        <option value="001">Pulaski</option>
        <option value="010">Putnam</option>
        <option value="020">Randolph</option>
        <option value="002">Richland</option>
        <option value="014">Rock Island</option>
        <option value="020">St Clair</option>
        <option value="001">Saline</option>
        <option value="007">Sangamon</option>
        <option value="008">Schuyler</option>
        <option value="007">Scott</option>
        <option value="004">Shelby</option>
        <option value="010">Stark</option>
        <option value="015">Stephenson</option>
        <option value="010">Tazewell</option>
        <option value="001">Union</option>
        <option value="005">Vermilion</option>
        <option value="002">Wabash</option>
        <option value="009">Warren</option>
        <option value="020">Washington</option>
        <option value="002">Wayne</option>
        <option value="002">White</option>
        <option value="014">Whiteside</option>
        <option value="012">Will</option>
        <option value="001">Williamson</option>
        <option value="017">Winnebago</option>
        <option value="011">Woodford</option>
      </select>

</div>



<br/>

<div id="map-instructions" class="text-center well" style="margin-top: 60px">

  <img src='/sitedev/ifvcc/img/logo3-purple-black.png' width='150' style='margin-top: 30px; margin-bottom: 30px'>
  <!-- <h2 class="h3">Select a county to view circuit information</h2> -->
</div>


  <div id="circuit-info"></div>







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
