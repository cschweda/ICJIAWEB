<!---<cfif #DashboardNumberPrep#  EQ 30 OR #DashboardNumberPrep# EQ 40>
	<cfset MinAge = 17>
</cfif>--->

<cfquery dbtype="query" name="PopulationCount" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=100
	AND (GeographyID =999 OR GeographyID <=102)
	ORDER BY SortOrder, GeographyName;
</cfquery>
<cfquery dbtype="query" name="PopulationCountByAge" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=5
	AND DataGroupNumber=100
	AND GeographyType=#GeographyTypeForPopulationSubgroups#
	AND SubCatNum <>5 AND SubCatNum <>255
	AND GeographyID =#SelectedICJIANumber#
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="PopulationCountBySex" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=15
	AND DataGroupNumber=100
	AND SubCatNum <>255
	AND GeographyType=#GeographyTypeForPopulationSubgroups#
	AND GeographyID =#SelectedICJIANumber#
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="PopulationCountByRace" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=100
	AND GeographyType=#GeographyTypeForPopulationSubgroups#
	AND GeographyID =#SelectedICJIANumber#
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="PopulationCountByRaceEth" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=11
	AND DataGroupNumber=100
	AND GeographyType=#GeographyTypeForPopulationSubgroups#
	AND GeographyID =#SelectedICJIANumber#
	ORDER BY SortOrder, GeographyName;
</cfquery>


<div id="PopulationTables">
<h1 id="PopulationHeading">Population Data</h1>	
<p>Populations used in rate calculations and the various charts above are available below.</p>

	<table id="datatable_populationTotal" class="Population trendTable">
	<caption class="TableTitle">Circuit Population By County</caption>
		<thead>
			<th>County</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PopulationCount">
		<tr class="PopulationRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PopulationCount["CY" & YearLoop][PopulationCount.CurrentRow]>
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
	
	<table id="datatable_populationByAge" class="Population trendTable">
	<caption class="TableTitle">Population By Age</caption>
		<thead>
			<th>Age Group</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PopulationCountByAge">
		<tr class="PopulationRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PopulationCountByAge["CY" & YearLoop][PopulationCountByAge.CurrentRow]>
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
	
	<table id="datatable_populationBySex" class="Population trendTable">
	<caption class="TableTitle">Population By Sex</caption>
		<thead>
			<th>Sex</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PopulationCountBySex">
		<tr class="PopulationRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PopulationCountBySex["CY" & YearLoop][PopulationCountBySex.CurrentRow]>
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
	
	<table id="datatable_populationByRace" class="Population trendTable">
	<caption class="TableTitle">Population By Race</caption>
		<thead>
			<th>Race</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PopulationCountByRace">
		<tr class="PopulationRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PopulationCountByRace["CY" & YearLoop][PopulationCountByRace.CurrentRow]>
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
	<table id="datatable_populationByRaceEth" class="Population trendTable">
	<caption class="TableTitle">Population By Race/Ethnicity</caption>
		<thead>
			<th>Race/Ethnicity</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PopulationCountByRaceEth">
		<tr class="PopulationRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PopulationCountByRaceEth["CY" & YearLoop][PopulationCountByRaceEth.CurrentRow]>
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
<!---
<button  onclick="ProduceExcel()">Export to Excel</button>--->
</div>