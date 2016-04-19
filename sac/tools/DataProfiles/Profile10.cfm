
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


<h1 id="ArrestHeading">CHRI arrest profile for <cfoutput>#GeographyName#</cfoutput></h1>

<p>These data are arrests (age 18+) gathered from the Illinois State Police Electronic Criminal History Record Information (CHRI) database.</p> 



<div id= "ArrestCountSection" class="well well-sm">
<h2>Arrest incidents</h2>
	<table id="datatable_Arrests_Incidents" class="CHRI trendTable">
		<caption class="TableTitle">Arrest incidents</caption>
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



		

	<div id="TimeSeries_Arrests_Counts" class="HC_TimeSeries DataTableBefore"></div>
	
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_Arrests_Counts" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_Arrests_Total" class="HC_Pie LastChart Population_Total"></div>
	</cfif>
	

	
	
	
	
	
		<hr>
		<hr>
</div>

<div id="ArrestRateSection" class="well">
<h2>Arrest incident rate (per 100,000 people)</h2>
<p>Population data used to calculate these rates is available in the <a href="#PopulationTables">appendix</a>.</p>
	<table id="datatable_Arrests_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Arrest incident rate</caption>
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


<div id = "ArrestsByAge" class="well well-sm">
<h2>Arrests by age</h2>
	<table id="datatable_Arrests_Age" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by age</caption>
		<thead>
			<th>Age group</th>
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

<div id = "ArrestsBySex" class="well well-sm">
<h2>Arrests by sex</h2>

	<table id="datatable_Arrests_Sex" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by sex</caption>
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

<div id = "ArrestsByRace" class="well well-sm">
<h2>Arrests by race</h2>

	<table id="datatable_Arrests_Race" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by race</caption>
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


<div id = "ArrestsByClass" class="well well-sm">
<h2>Arrests by class</h2>

	<table id="datatable_Arrests_Class" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by offense class</caption>
		<thead>
			<th>Offense class</th>
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

<div id = "ArrestsByWebCat" class="well well-sm">
<h2>Arrests by offense type</h2>
<p>Each arrest may be represented multiple times in the data below if there is more than one charge. Therefore, the total number of arrests below will sum to a larger number than the total number of arrests elsewhere in this profile. Cells with "NA" have values below ten and are masked.</p>	
		<table id="datatable_Arrests_WebCat" class="CHRI trendTable">
		<caption class="TableTitle">Arrests by offense category</caption>
		<thead>
			<th>Charge offense type</th>
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