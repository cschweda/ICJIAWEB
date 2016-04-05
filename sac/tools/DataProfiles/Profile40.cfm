
<!---Begin main queries--->
<cfquery dbtype="query" name="PrisonExitsByExitTypeCount" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=70
	AND DataGroupNumber=40
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="NewPrisonExitsByCounty_Count" > <!---switch maincat to 1--->
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=40
	AND NumberType='C'
	AND SUbCatNum =1
	AND CircuitCook88=#CircuitNumber#
	AND GeographyType =50
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="NewPrisonExitsByCounty_Rate" ><!---switch maincat to 1--->
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=40
	AND NumberType='R'
	AND SUbCatNum =1
	AND (GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
		OR CircuitCook88=<cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER"/>-1000)
	ORDER BY SortOrder, GeographyName;
</cfquery>


<cfquery dbtype="query" name="PrisonExitsByAge" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=5
	AND DataGroupNumber=40
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="PrisonExitsBySex" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=15
	AND DataGroupNumber=40
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonExitsByRaceEth" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=40
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonExitsByClass" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=100
	AND DataGroupNumber=40
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonExitsByWebCat">
	SELECT *
	FROm WTP
	WHERE MainCatNumber = 50
	AND DataGroupNumber=40
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder
</cfquery>

<!---End main queries--->



<h1 id="PrisonExitsHeading">Adult prison exits profile for <cfoutput>#GeographyName#</cfoutput></h1>
	 <p>The data in this profile are from an ICJIA analysis of data provided by the IDOC planning and research unit. Exits are based on the committing county. 
	 A person exiting IDOC may reside in a different county, which would only be tracked if a person exits onto MSR or parole. 
	 Exits do not include juveniles (The Illinois Department of Juvenile Justice houses juvenile offenders in separate facilities). 
	 A person can be exit prison more than one time in a year. In this data profile, each exit is counted separately. Users should not confuse prison exits with the prison population. Due to longer sentences, the prison population is older and has more violent offenders than the exits from prison.</p>
<div id="PrisonExitsByExitTypeSection">
	<h2>Prison exits by exit type</h2>
	
	<table id="datatable_PrisonExitsbyExitType" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by exit type</caption>
		<thead>
			<th>Exit type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByExitTypeCount">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByExitTypeCount["FY" & YearLoop][PrisonExitsByExitTypeCount.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = int(YearConcat)></cfif>
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
	<div id="TimeSeriesContainer_PrisonExitsByType" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_PrisonAdmits_ExitType_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>




<hr><hr>
<cfif #CountyCount.NumCounties# GT 1 AND #SelectedICJIANumber# GT 102><!---Only outputting this for Circuits with more than one county--->
<div id= "NewPrisonExitsByCountySection">
<h2>Prison exits by county</h2>
	<table id="datatable_NewPrisonExitsbyCounty" class="IDOC trendTable">
		<caption class="TableTitle">New court prison exits</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="NewPrisonExitsByCounty_Count">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = NewPrisonExitsByCounty_Count["FY" & YearLoop][NewPrisonExitsByCounty_Count.CurrentRow]>
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


	<div id="TimeSeriesContainer_PrisonExitsByCounty_Circuit" class="HC_TimeSeries DataTableBefore"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_PrisonExits_Counts" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonExits_Total" class="HC_Pie LastChart Population_Total"></div>
	</cfif>
	<hr><hr>
</div>
</cfif>



<div id="NewPrisonExitsRateByCountySection">
<h2>Prison exit rate</h2>
<p>Population data used to calculate these new court prison exit rates is available in the <a href="#PopulationTables">appendix</a>.</p>
	<table id="datatable_Rate" class="IDOC trendTable">
		<caption class="TableTitle">Prison exit rate</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="NewPrisonExitsByCounty_Rate">
		<tr><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = NewPrisonExitsByCounty_Rate["FY" & YearLoop][NewPrisonExitsByCounty_Rate.CurrentRow]>
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
<div id="TimeSeriesContainer_PrisonExitsByCounty" class="HC_TimeSeries DataTableBefore"></div>	
</div>
<hr><hr>





<div id = "PrisonExitsByAge">
<h2>Prison exits by age</h2>
	<table id="datatable_PrisonExits_Age" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by age</caption>
		<thead>
			<th>Age group</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByAge">
		<tr><td  class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByAge["FY" & YearLoop][PrisonExitsByAge.CurrentRow]>
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
	<div id="piecontainer_PrisonExits_Age" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonExits_Age" class="HC_Pie LastChart Population_ByAge"></div>
</div>
<hr><hr>





<div id = "PrisonExitsBySex">
<h2>Prison exits by sex</h2>
	<table id="datatable_PrisonExitsBySex" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by sex</caption>
		<thead>
			<th>Sex</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsBySex">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsBySex["FY" & YearLoop][PrisonExitsBySex.CurrentRow]>
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
	<div id="piecontainer_PrisonExits_Sex" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonExits_Sex" class="HC_Pie LastChart Population_BySex"></div>
	
</div>
<hr><hr>



<div id = "PrisonExitsByRaceEth">
<h2>Prison exits by race/ethnicity</h2>
	<table id="datatable_RaceEth" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by race/ethnicity</caption>
		<thead>
			<th>Race/Ethnicity</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByRaceEth">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByRaceEth["FY" & YearLoop][PrisonExitsByRaceEth.CurrentRow]>
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
	<div id="piecontainer_PrisonExits_Race" class="HC_Pie LaststChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonExits_Race" class="HC_Pie LastChart Population_ByRaceEth"></div>
	
</div>
<hr><hr>




<div id = "PrisonExitsByClass">
<h2>Prison exits by offense class</h2>
	<table id="datatable_PrisonExits_Class" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by offense class</caption>
		<thead>
			<th>Offense class</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByClass">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByClass["FY" & YearLoop][PrisonExitsByClass.CurrentRow]>
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
	<div id="piecontainer_PrisonExits_Class_Last" class="HC_Pie LastChart DataTableBefore"></div>
	
</div>
<hr><hr>

<div id = "PrisonExitsByWebCat">
<h2>Prison exits by offense type</h2>
		<table id="datatable_WebCat" class="IDOC trendTable">
		<caption class="TableTitle">Prison exits by offense category</caption>
		<thead>
			<th>Charge offense type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByWebCat">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByWebCat["FY" & YearLoop][PrisonExitsByWebCat.CurrentRow]>
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
<div id="BarContainer_PrisonExits_WebCat" class="HC_Bar DataTableBefore"></div>
</div>

<hr><hr class="hr-split">