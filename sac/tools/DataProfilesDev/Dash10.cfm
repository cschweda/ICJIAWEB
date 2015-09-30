
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

<p>Arrest data in Illinois are available from two sources: I-UCR arrests and the Illinois State Police Electronic Criminal History Record Information (CHRI) database. Both have advantages and disadvantages. UCR arrests are based on the federal UCR program. UCR data have a small number of categories and not all arrests are included in those categories. There is no information in the UCR arrests about age, sex, race, or offense class. 
	However, UCR data are available for several decades. A CHRI arrest is when an arrest incident occurs and the person is fingerprinted, which is then submitted to the Illinois State Police Database.
	 CHRI data can be analyzed by race, sex, age, offense class, and offense type.  
	 ICJIA does not show arrest data where the count of arrests is below ten. CHRI arrest data are displayed at the county level below for overall arrests. 
	 The various breakdowns of CHRI data (age, race, sex, etc.) are instead aggregated to the judicial circuit.
	CHRI data presented below were queried from the Illinois State Police Electronic Criminal History Records Information Systems (CHRI) by ICJIA staff. However reliable historical data from CHRI can only be obtained after the early 2000s.

	

</p>
<div id= "ArrestCountSection">
<h2>Arrest Incidents</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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

<!---output an empty list for circuits with more than one county. This will be filled in with descriptives of the table with javascript--->
	<cfif #CountyCount.NumCounties# GT 1>
		<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span>
		<ul class="PercentChangeList" id="ArrestIncidentsCountList"></ul>
		<span class="ListCaveats">Large percent changes may be more indicative of changes in submitting arrests to the Illinois State Police instead of actual arrest practices.</span>
		
	</cfif>

	<div id="TimeSeriesContainer1" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer1" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer2" class="HC_Pie LastChart Population_Total" style="height: 400px; width: 400px; display: inline-block"></div>
	</cfif>
	

	
	
	
	
	
		<hr>
		<hr>
</div>

<div id="ArrestRateSection">
<h2>Arrest Incident Rates</h2>
<p>It is generally preferable to compare arrest trends across counties by uisng arrest rates instead of arrest counts. Rates will take into account the population of potential arrestees. 
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
		<tr><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ArrestIncidentsRate["CY" & YearLoop][ArrestIncidentsRate.CurrentRow]>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="TimeSeriesContainer2" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>




<hr><hr>


<div id = "ArrestsByAge">
<h2>Arrest Incidents By Age</h2>
<p>Unlike the I-UCR arrests, age can be obtained by using the date of birth of the arrestee and the arrest date on the record in CHRI. 
	In some cases, the arrest age is missing, not possible, or seems unlikely to be true, such as those where the age is above 90 years old. 
	These are coded to "other/unknown" in the data below. 
	The two pie charts display the percent by age group of arrests and the population for the latest arrest year.</p>
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
	<div id="piecontainer3" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer4" class="HC_Pie LastChart Population_ByAge" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsBySex">
<h2>Arrests by Sex</h2>
<p>Males are disproportionately higher in their involvement in most aspects of the criminal justice system. 
	Males typically are more likely to be arrested than females.</p>
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
	<div id="piecontainer5" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer6" class="HC_Pie LastChart Population_BySex" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByRace">
<h2>Arrests By Race</h2>
<p>CHRI data can be broken down into white vs. non-white arrestees. 
	Hispanic ethnicity only became an option in CHRI in 2014, so Hispanic in the data below are included in non-white. </p>
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
	<div id="piecontainer9" class="HC_Pie LaststChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer10" class="HC_Pie LastChart Population_ByRace" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "ArrestsByClass">
<h2>Arrests by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. Misdemeanors (class A, B, and C) are minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Class 3 and 4 felonies are the least severe, with typical sentences to either probation up to two and half years (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison.</p>
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
	<div id="piecontainer7" class="HC_Pie FirstChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer8" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByWebCat">
<h2>Arrests by Offense Type</h2>
<p>A single arrest incident may involve one or more charges. It is difficult to determine what is the most severe charge by offense type in some arrests. 
	Instead, the data below display how many arrests occured where there was at least one charge in the following categories:</p>
	<ul class="WebCategories">
		<li>WebCat1</li>
		<li>WebCat2</li>
		<li>WebCat3</li>
	</ul>
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


