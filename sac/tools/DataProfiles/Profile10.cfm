
<!---Begin arrest queries--->
<cfquery dbtype="query" name="ArrestIncidentsCount" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=10
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


<h1 id="ArrestHeading">CHRI Arrest Profile for <cfoutput>#GeographyName#</cfoutput></h1>

<p>Arrest data in Illinois are available from two sources: <a href="http://www.isp.state.il.us/crime/ucrhome.cfm" target="_blank">I-UCR arrests</a> and the Illinois State Police Electronic Criminal History Record Information (CHRI) database. 
UCR arrest data are collected from the Illinois implementation of the <a href="https://www.fbi.gov/about-us/cjis/ucr/ucr" target="_blank">federal UCR program</a>. UCR data have a small number of categories and not all arrests are included in those categories. There is no information in the UCR arrests about age, sex, race, or offense class. 
	CHRI data can be analyzed by race, sex, age, offense class, and offense type. However, <a href="http://www.icjia.org/research/overview#tab_research-data" target="_blank">UCR data are available for several decades outside of this profile</a>.</p> 
	<p>A CHRI arrest record is generated when an arrest incident occurs, the person arrested is fingerprinted, and the arrest data is successfully submitted to the Illinois State Police Database.
	 <strong>ICJIA does not show arrest data where the count of arrests is below ten.</strong> CHRI arrest data are displayed at the county level below for overall arrests. 
	 The various breakdowns of CHRI data (age, race, sex, etc.) are instead aggregated to the judicial circuit. Additional county-level arrest data from CHRI can be requested by emailing <a href="mailto:cja.irc@illinois.gov" target="_top">cja.irc@illinois.gov</a>.</p> 



<div id= "ArrestCountSection">
<h2>Arrest Incidents</h2>
<p>Overall arrests for <cfif #SelectedICJIANumber# EQ 999>Illinois are<cfelse>each county are available within this judicial circuit</cfif> below.
For all arrests to be included in this profile, the age of the arrestee had to be between 17 and 90 years old.</p>
	<table id="datatable_Arrests_Incidents" class="CHRI trendTable">
		<caption class="TableTitle">Arrest Incidents</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ArrestIncidentsCount">
			<cfif #GeographyType# EQ 100 OR #GeographyType# EQ 250><tr class="DataRow IgnoreChart">
			<cfelse>
			<tr class="DataRow"></cfif>
				<td class="Geography">#GeographyName#</td>	
				<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
					<cfset YearConcat = ArrestIncidentsCount["CY" & YearLoop][ArrestIncidentsCount.CurrentRow]>
					<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
					<cfif #YearLoop# EQ #MinMaxYears.MinYear#>
						<td class="FirstYear">#YearConcat#</td>
						<cfelseif #YearLoop# EQ #MinMaxYears.MaxYear#>
						<td class="LastYear">#YearConcat#</td>
						<cfelse>
							<td>#YearConcat#</td>
						</cfif>
				</cfloop>
			</tr>
		</cfoutput>
	</table>


		

	<p><span class="ListCaveats">Large percent changes may be more indicative of changes in submitting arrests to the Illinois State Police instead of actual arrest practices. 
		For example, Class C misdemeanors and lesser offenses are not required to be submitted to CHRI, but can be discretionally done so. A large increase or decrease may be a result of
	an agency increasing or decreasing the amount of discretionary submissions.</span></p>
	<div id="TimeSeries_Arrests_Counts" class="HC_TimeSeries DataTableBefore"></div>
	
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_Arrests_Counts" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_Arrests_Total" class="HC_Pie LastChart Population_Total"></div>
	</cfif>
	

	
	
	
	
	
		<hr>
		<hr>
</div>

<div id="ArrestRateSection">
<h2>Arrest Incident Rate (per 100,000 people)</h2>
<p>CHRI arrest trends across counties, circuits, or statewide can be compared by using arrest rates instead of arrest counts. Rates take into account the population of potential arrestees. 
	Rates calculated below are per 100,000 residents in Illinois, using Census estimates. The population data used to calculate rates is available in the <a href="#PopulationTables">appendix</a>.</p>
	<table id="datatable_Arrests_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Arrest Incident Rate</caption>
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

	
<div id="TimeSeriesContainer_Arrests_Counts" class="HC_TimeSeries DataTableBefore"></div>	
</div>




<hr><hr>


<div id = "ArrestsByAge">
<h2>Arrest Incidents by Age</h2>
<p>Arrest age can be obtained by using the date of birth of the arrestee and the arrest date on the record in CHRI. 
	In some cases, the arrest age is missing, not possible, or seems unlikely to be true, such as those where the age is above 90 years old. 
	These are excluded in the data in this profile. <a href="http://www.nij.gov/topics/crime/Pages/delinquency-to-adult-offending.aspx" target="_blank">Research indicates that the peak offending age is typically in the late teens and early twenties.</a>
	The pie charts display the percent by age group of arrests and the population for the latest arrest year. 
	</p>
	<table id="datatable_Arrests_Age" class="CHRI trendTable">
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
	<div id="piecontainer_Arrests_Age" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_Age" class="HC_Pie LastChart Population_ByAge"></div>
	
</div>
<hr><hr>

<div id = "ArrestsBySex">
<h2>Arrests by Sex</h2>
<p>Males have a disproportionately higher involvement in most aspects of the criminal justice system compared to females, particularly for violent offenses. <a href="http://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2014/crime-in-the-u.s.-2014/tables/table-42" target="_blank">Nationally, the male proportion of arrests is higher for almost all types of arrests except prostitution</a>. The gap in proportion of crimes committed between males and females is large for violent offenses, and has been closing for some property offenses in the past several decades.
</p>
	<table id="datatable_Arrests_Sex" class="CHRI trendTable">
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
	<div id="piecontainer_Arrests_Sex" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_Sex" class="HC_Pie LastChart Population_BySex"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByRace">
<h2>Arrests by Race</h2>
<p>CHRI data can be broken down into white vs. non-white arrestees. 
	Hispanic ethnicity only became an option in CHRI in 2014. For consistency, the data below include Hispanic in the non-white category. 
	Overall, non-white people 
are disproportionately more likely to be involved in the criminal justice system in the arrest stage and onwards, and are 
also <a href="http://www.nij.gov/topics/victims-victimization/pages/welcome.aspx" target="_blank">more likely to be victims of crime</a>. 
<a href="http://www.asanet.org/images/press/docs/pdf/ASARaceCrime.pdf" target="_blank">Reasons for the racial disparity in the criminal justice include contextual and historical explanations.</a></p>
	<table id="datatable_Arrests_Race" class="CHRI trendTable">
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
	<div id="piecontainer_Arrests_Race" class="HC_Pie LaststChart DataTableBefore"></div>
	<div id="piecontainer_Population_Race" class="HC_Pie LastChart Population_ByRace"></div>

</div>
<hr><hr>


<div id = "ArrestsByClass">
<h2>Arrests by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. An explanation of the offense classes is available in the <a href="#OffenseClasses">appendix</a>.
 A single arrest incident may involve one or more charges. CHRI arrests displayed below are categorized by the most severe charge within the incident.</p>
	<table id="datatable_Arrests_Class" class="CHRI trendTable">
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
	<!---><div id="piecontainer_Arrests_Class_First" class="HC_Pie FirstChart DataTableBefore"></div><--->
	<div id="piecontainer_Arrests_Class_Last" class="HC_Pie LastChart DataTableBefore"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByWebCat">
<h2>Arrests by Offense Type</h2>
<p>A single arrest incident may involve one or more charges. It is difficult to determine the most severe charge by offense type in many arrests. For example, an arrest with a charge for a class 4 retail theft and a charge for a class 4 criminal damage to property may be classified as either of those two.
	Instead, the data below display how many arrests occurred where there was at least one charge in each category (a description of the offenses for each category is in the <a href="#OffenseCategoriesHeading">appendix</a>).</p>

<p>Each arrest may be represented multiple times in the data below if there is more than one charge. Therefore, the total number of arrests below will sum to a larger number than the total number of arrests elsewhere in this profile. Cells with "NA" have values below ten and are masked.</p>	
		<table id="datatable_Arrests_WebCat" class="CHRI trendTable">
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
<div id="BarContainer_Arrests_WebCat" class="HC_Bar DataTableBefore"></div>
</div>


<hr><hr class="hr-split">