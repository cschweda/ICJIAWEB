<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="http://code.highcharts.com/highcharts.js"></script>
<script src="http://code.highcharts.com/modules/data.js"></script>
<script src="http://code.highcharts.com/modules/exporting.js"></script>
<script src="JS/Dashboards.js"></script>


</head>
<body>
					<form id="DashboardSelector" name="DashboardSelector" method="GET" action="scratch.cfm">
				        <p><b>Step 1 -</b> Select a profile to view:<br>  
				            <input type="radio" name="DashboardNumber" class="required" id="DashboardRadio10" value="10" checked="checked">
								<label for="DashboardRadio10">Arrests from the Illinois State Police CHRI Database*</label><br/>
							<input type="radio" name="DashboardNumber" class="required" id="DashboardRadio20" value="20" >
				            	<label for="DashboardRadio20">Convictions from the Illinois State Police CHRI Database*</label><br/>
							<input type="radio" name="DashboardNumber" class="required" id="DashboardRadio30" value="30" >
				            	<label for="DashboardRadio30">Prison Admissions</label>	<br/>
							<input type="radio" name="DashboardNumber" class="required" id="DashboardRadio40" value="40" >
				            	<label for="DashboardRadio40">Prison Exits</label>	<br/>
				            *CHRI data in these profiles have limited availability at the county level. If you select a county, you will see a mix of of data at the county level and the judicial circuit in which the county resides in.  	
				        </p>
						
											
						<div id="CountySelector"><p><b>Step 2 -</b> Select a county, judicial circuit, or Illinois: 
				        	<select id="CountySelector" name="ICJIANumber">
								<option value="1">Adams</option>
								<option value="2">Alexander</option>
								<option value="3">Bond</option>
								<option value="4">Boone</option>
								<option value="5">Brown</option>
								<option value="6">Bureau</option>
								<option value="7">Calhoun</option>
								<option value="8">Carroll</option>
								<option value="9">Cass</option>
								<option value="10">Champaign</option>
								<option value="11">Christian</option>
								<option value="12">Clark</option>
								<option value="13">Clay</option>
								<option value="14">Clinton</option>
								<option value="15">Coles</option>
								<option value="16">Cook</option>
								<option value="17">Crawford</option>
								<option value="18">Cumberland</option>
								<option value="19">DeKalb</option>
								<option value="20">De Witt</option>
								<option value="21">Douglas</option>
								<option value="22">DuPage</option>
								<option value="23">Edgar</option>
								<option value="24">Edwards</option>
								<option value="25">Effingham</option>
								<option value="26">Fayette</option>
								<option value="27">Ford</option>
								<option value="28">Franklin</option>
								<option value="29">Fulton</option>
								<option value="30">Gallatin</option>
								<option value="31">Greene</option>
								<option value="32">Grundy</option>
								<option value="33">Hamilton</option>
								<option value="34">Hancock</option>
								<option value="35">Hardin</option>
								<option value="36">Henderson</option>
								<option value="37">Henry</option>
								<option value="38">Iroquois</option>
								<option value="39">Jackson</option>
								<option value="40">Jasper</option>
								<option value="41">Jefferson</option>
								<option value="42">Jersey</option>
								<option value="43">Jo Daviess</option>
								<option value="44">Johnson</option>
								<option value="45">Kane</option>
								<option value="46">Kankakee</option>
								<option value="47">Kendall</option>
								<option value="48">Knox</option>
								<option value="49">Lake</option>
								<option value="50">LaSalle</option>
								<option value="51">Lawrence</option>
								<option value="52">Lee</option>
								<option value="53">Livingston</option>
								<option value="54">Logan</option>
								<option value="55">McDonough</option>
								<option value="56">McHenry</option>
								<option value="57">McLean</option>
								<option value="58">Macon</option>
								<option value="59">Macoupin</option>
								<option value="60">Madison</option>
								<option value="61">Marion</option>
								<option value="62">Marshall</option>
								<option value="63">Mason</option>
								<option value="64">Massac</option>
								<option value="65">Menard</option>
								<option value="66">Mercer</option>
								<option value="67">Monroe</option>
								<option value="68">Montgomery</option>
								<option value="69">Morgan</option>
								<option value="70">Moultrie</option>
								<option value="71">Ogle</option>
								<option value="72">Peoria</option>
								<option value="73">Perry</option>
								<option value="74">Piatt</option>
								<option value="75">Pike</option>
								<option value="76">Pope</option>
								<option value="77">Pulaski</option>
								<option value="78">Putnam</option>
								<option value="79">Randolph</option>
								<option value="80">Richland</option>
								<option value="81">Rock Island</option>
								<option value="82">St. Clair</option>
								<option value="83">Saline</option>
								<option value="84">Sangamon</option>
								<option value="85">Schuyler</option>
								<option value="86">Scott</option>
								<option value="87">Shelby</option>
								<option value="88">Stark</option>
								<option value="89">Stephenson</option>
								<option value="90">Tazewell</option>
								<option value="91">Union</option>
								<option value="92">Vermilion</option>
								<option value="93">Wabash</option>
								<option value="94">Warren</option>
								<option value="95">Washington</option>
								<option value="96">Wayne</option>
								<option value="97">White</option>
								<option value="98">Whiteside</option>
								<option value="99">Will</option>
								<option value="100">Williamson</option>
								<option value="101">Winnebago</option>
								<option value="102">Woodford</option>
								<option value="1001">1st Circuit</option>
								<option value="1002">2nd Circuit</option>
								<option value="1003">3rd Circuit</option>
								<option value="1004">4th Circuit</option>
								<option value="1005">5th Circuit</option>
								<option value="1006">6th Circuit</option>
								<option value="1007">7th Circuit</option>
								<option value="1008">8th Circuit</option>
								<option value="1009">9th Circuit</option>
								<option value="1010">10th Circuit</option>
								<option value="1011">11th Circuit</option>
								<option value="1012">12th Circuit</option>
								<option value="1013">13th Circuit</option>
								<option value="1014">14th Circuit</option>
								<option value="1015">15th Circuit</option>
								<option value="1016">16th Circuit</option>
								<option value="1017">17th Circuit</option>
								<option value="1018">18th Circuit</option>
								<option value="1019">19th Circuit</option>
								<option value="1020">20th Circuit</option>
								<option value="1021">21st Circuit</option>
								<option value="1022">22nd Circuit</option>
								<option value="1088">Cook County (Circuit)</option>
							</select>
						</p></div>
							
						<p><input type="submit" id="getDashboard" value="Retrieve dashboard">
						<span id="ToolStatus"></span></p>
					</form>	
</body>
</html>