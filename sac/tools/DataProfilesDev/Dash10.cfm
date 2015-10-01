
<!---Begin arrest queries--->
<cfquery dbtype="query" name="ArrestIncidentsCount" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=10
	AND GeographyType = 50
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="ArrestIncidentsRate" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=2
	AND DataGroupNumber=10
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="ArrestsByAge" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=5
	AND DataGroupNumber=10
	AND SubCatNum<>255
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="ArrestsBySex" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=15
	AND DataGroupNumber=10
	AND SubCatNum<>255
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ArrestsByRace" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=10
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ArrestsByClass" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=100
	AND DataGroupNumber=10
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ArrestsByWebCat">
	SELECT *
	FROm WTP
	WHERE MainCatNumber = 50
	AND DataGroupNumber=10
	ORDER BY SortOrder
</cfquery>
<!---End arrest queries--->


<h1>CHRI Arrest Profile for <cfoutput>#GeographyName#</cfoutput></h1>

<p>Arrest data in Illinois are available from two sources: <a href="http://www.isp.state.il.us/crime/ucrhome.cfm" target="_blank">I-UCR arrests</a> and the Illinois State Police Electronic Criminal History Record Information (CHRI) database. Both have advantages and disadvantages. 
UCR arrests are based on the <a href="https://www.fbi.gov/about-us/cjis/ucr/ucr" target="_blank">federal UCR program</a>. UCR data have a small number of categories and not all arrests are included in those categories. There is no information in the UCR arrests about age, sex, race, or offense class. 
	However, UCR data are available for several decades. A CHRI arrest is when an arrest incident occurs and the person is fingerprinted, which is then submitted to the Illinois State Police Database.
	 CHRI data can be analyzed by race, sex, age, offense class, and offense type.  
	 <strong>ICJIA does not show arrest data where the count of arrests is below ten.</strong> CHRI arrest data are displayed at the county level below for overall arrests. 
	 The various breakdowns of CHRI data (age, race, sex, etc.) are instead aggregated to the judicial circuit.
	CHRI data presented below were queried from the Illinois State Police Electronic Criminal History Records Information Systems (CHRI) by ICJIA staff. However reliable historical data from CHRI can only be obtained after the early 2000s. [Add text describing how CHRI is not originally intended to be a research database.]

	

</p>
<div id= "ArrestCountSection">
<h2>Arrest Incidents</h2>
<p><cfif #SelectedICJIANumber# LTE 102>Your original selection was for county-level arrest data. </cfif>Overall arrests for each county are available within this judicial circuit below.
For all arrests to be included in this profile, the age of the arrestee had to be between 17 and 90 years old. Arrests below age 17 are excluded and arrests above age 90 are likely errors and are excluded as well.</p>
	<table id="datatable_Incidents" class="CHRI trendTable">
		<caption class="TableTitle">Arrest Incidents</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestIncidentsCount">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestIncidentsCount["CY" & YearLoop][ArrestIncidentsCount.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<cfif #YearLoop# EQ #MinMaxYears.MinYear#>
					<td class="FirstYear">#YearConcat#</td>
					<cfelseif #YearLoop# EQ #MinMaxYears.MaxYear#>
					<td class="LastYear">#YearConcat#</td>
					<cfelse><td>#YearConcat#</td>
					</cfif>
			</cfloop>
		</tr>
		</cfoutput>
	</table>

<!---output an empty list. This will be filled in with descriptives of the table with javascript--->
	

	<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span>
	<ul class="PercentChangeList" id="ArrestIncidentsCountList"></ul>
		

	<span class="ListCaveats">Large percent changes may be more indicative of changes in submitting arrests to the Illinois State Police instead of actual arrest practices.</span>
	<div id="TimeSeriesContainer1" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer1" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer2" class="HC_Pie LastChart Population_Total" style="height: 300px; width: 400px; display: inline-block"></div>
	</cfif>
	

	
	
	
	
	
		<hr>
		<hr>
</div>

<div id="ArrestRateSection">
<h2>Arrest Incident Rates (per 100,000 people)</h2>
<p>It is generally preferable to compare arrest trends across counties by using arrest rates instead of arrest counts. Rates will take into account the population of potential arrestees. 
	Rates calculated belore are per 100,000 residents in Illinois, using County Census estimates. The population data used to calculate rates is available below the arrest tables at the end of this profile.</p>
	<table id="datatable_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Arrest Incident Rates</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestIncidentsRate">
		<tr class = "DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestIncidentsRate["CY" & YearLoop][ArrestIncidentsRate.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = YearConcat></cfif>
				<cfif #YearLoop# EQ #MinMaxYears.MinYear#>
					<td class="FirstYear">#YearConcat#</td>
					<cfelseif #YearLoop# EQ #MinMaxYears.MaxYear#>
					<td class="LastYear">#YearConcat#</td>
					<cfelse><td>#YearConcat#</td>
					</cfif>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<p><span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span></p>
<ul class="PercentChangeList" id="ArrestIncidentsRateList"></ul>		
	
	
<div id="TimeSeriesContainer2" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>




<hr><hr>


<div id = "ArrestsByAge">
<h2>Arrest Incidents By Age</h2>
<p>Unlike the I-UCR arrests, age can be obtained by using the date of birth of the arrestee and the arrest date on the record in CHRI. 
	In some cases, the arrest age is missing, not possible, or seems unlikely to be true, such as those where the age is above 90 years old. 
	These are excluded in the data below. 
	The pie charts display the percent by age group of arrests and the population for the latest arrest year.</p>
	<table id="datatable_Age" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by Age</caption>
		<thead>
			<th>Age Group</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestsByAge">
		<tr><td  class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestsByAge["CY" & YearLoop][ArrestsByAge.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer3" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer4" class="HC_Pie LastChart Population_ByAge" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsBySex">
<h2>Arrests by Sex</h2>
<p>Males have a disproportionately higher involvement in most aspects of the criminal justice system. [Add something to flesh this out]</p>
	<table id="datatable_Sex" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by Sex</caption>
		<thead>
			<th>Sex</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestsBySex">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestsBySex["CY" & YearLoop][ArrestsBySex.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer5" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer6" class="HC_Pie LastChart Population_BySex" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByRace">
<h2>Arrests By Race</h2>
<p>CHRI data can be broken down into white vs. non-white arrestees. 
	Hispanic ethnicity only became an option in CHRI in 2014, so Hispanic in the data below are included in the non-white category. 
	The census population data allow for race (white, black, etc.) to be separated from ethnicity (Hispanic). [Consider redoing the population query here so they match]</p>
	<table id="datatable_Race" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by Race</caption>
		<thead>
			<th>Race</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestsByRace">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestsByRace["CY" & YearLoop][ArrestsByRace.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer9" class="HC_Pie LaststChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer10" class="HC_Pie LastChart Population_ByRace" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "ArrestsByClass">
<h2>Arrests by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. Misdemeanors (class A, B, and C) are generally minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Class 3 and 4 felonies are the least severe, with typical sentences to either probation up to two and half years (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison.[Add others...maybe make as bullet points instead]</p>
<p>A single arrest incident may involve one or more charges. CHRI arrests displayed below are categorized by the most severe charge within the incident.</p>
	<table id="datatable_Class" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by Offense Class</caption>
		<thead>
			<th>Offense Class</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestsByClass">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestsByClass["CY" & YearLoop][ArrestsByClass.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer7" class="HC_Pie FirstChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer8" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByWebCat">
<h2>Arrests by Offense Type</h2>
<p>A single arrest incident may involve one or more charges. It is difficult to determine what is the most severe charge by offense type in many arrests. For example, an arrest with a charge for a class 4 retail theft and a charge for a class 4 criminal damage to property may be classified as either of those two.
	Instead, the data below display how many arrests occured where there was at least one charge in the following categories:</p>
	<ul class="WebCategories">
		<li>WebCat1</li>
		<li>WebCat2</li>
		<li>WebCat3</li>
	</ul>
<p>Each arrest may be represnted multiple times in the data below if there is more than one charge. Therefore, the total number of arrests below will sum to a larger number than the total number of arrests elsewhere in this profile.</p>	
		<table id="datatable_WebCat" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by Offense Category</caption>
		<thead>
			<th>Charge Offense Type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestsByWebCat">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestsByWebCat["CY" & YearLoop][ArrestsByWebCat.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="BarContainer1" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>


