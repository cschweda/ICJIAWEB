
<!---Begin main queries--->
<cfquery dbtype="query" name="PrisonAdmitsByAdmitType_Count" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=60
	AND DataGroupNumber=30
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="NewPrisonAdmitsByCounty_Count" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=60
	AND DataGroupNumber=30
	AND NumberType='C'
	AND SUbCatNum =10
	AND CircuitCook88=#CircuitNumber#
	AND GeographyType =50
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="NewPrisonAdmitsByCounty_Rate" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=60
	AND DataGroupNumber=30
	AND NumberType='R'
	AND SUbCatNum =10
	AND (GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
		OR CircuitCook88=<cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER"/>-1000)
	ORDER BY SortOrder, GeographyName;
</cfquery>


<cfquery dbtype="query" name="PrisonAdmitsByAge" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=5
	AND DataGroupNumber=30
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="PrisonAdmitsBySex" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=15
	AND DataGroupNumber=30
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonAdmitsByRace" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=30
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonAdmitsByClass" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=100
	AND DataGroupNumber=30
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="PrisonAdmitsByWebCat">
	SELECT *
	FROm WTP
	WHERE MainCatNumber = 50
	AND DataGroupNumber=30
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder
</cfquery>

<!---End main queries--->


<hr class="hr-split">
<h1 id="PrisonAdmitsHeading">Adult prison admission profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>The data in this profile are from an ICJIA analysis of data provided by the IDOC planning and research unit. Admissions do not include juveniles (The Illinois Department of Juvenile Justice houses juvenile offenders in separate facilities). A person can be admitted into prison more than one time in a year. In this data profile, each admission is counted separately. Users should not confuse prison admissions with the prison population. Due to longer sentences, the prison population is older and has more violent offenders than the admissions into prison.</p>
<div id="PrisonAdmitsByAdmitTypeSection" class="well well-sm">
	<h2>Prison admissions by admission type</h2>
	<table id="datatable_PrisonAdmitsbyAdmitType" class="IDOC trendTable">
		<caption class="TableTitle">Prison admissions by admission type</caption>
		<thead>
			<th>Admission type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByAdmitType_Count">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByAdmitType_Count["FY" & YearLoop][PrisonAdmitsByAdmitType_Count.CurrentRow]>
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
	
	
	<div id="TimeSeriesContainer_PrisonAdmitsByType" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_PrisonAdmits_AdmitType_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>



<cfif #CountyCount.NumCounties# GT 1 AND #SelectedICJIANumber# GT 102 AND #SelectedICJIANumber# NEQ 999><!---Only outputting this for Circuits with more than one county--->
<div id= "NewPrisonAdmitsByCountySection" class="well well-sm">
<h2>New court prison admissions by county</h2>
<p>The data below show the commiting county for the new court prison admissions within the judicial circuit. Caution should be taken when 
	comparing counties with this data. Users should instead examine the new court admission rates per 100,000 county residents further below. </p>
	<table id="datatable_NewPrisonAdmitsbyCounty" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admissions</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="NewPrisonAdmitsByCounty_Count">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = NewPrisonAdmitsByCounty_Count["FY" & YearLoop][NewPrisonAdmitsByCounty_Count.CurrentRow]>
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


	<div id="TimeSeriesContainer_PrisonAdmitsByCounty_Circuit" class="HC_TimeSeries DataTableBefore"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_PrisonAdmits_Counts" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonAdmits_Total" class="HC_Pie LastChart Population_Total"></div>
	</cfif>
	
</div>
</cfif>

<div id="NewPrisonAdmitsRateByCountySection" class="well well-sm">
<h2>New court prison admission rate</h2>
<p>Population data used to calculate these rates is available in the <a href="#PopulationTables">appendix</a>.</p>
	<table id="datatable_PrisonAdmits_Rate" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admission rate</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="NewPrisonAdmitsByCounty_Rate">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = NewPrisonAdmitsByCounty_Rate["FY" & YearLoop][NewPrisonAdmitsByCounty_Rate.CurrentRow]>
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
	

<div id="TimeSeriesContainer_PrisonAdmitsByCounty" class="HC_TimeSeries DataTableBefore"></div>	
</div>



<div id = "PrisonAdmitsByAge" class="well well-sm">
<h2>New court prison admissions by age</h2>
	<table id="datatable_PrisonAdmits_Age" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admissions by age</caption>
		<thead>
			<th>Age Group</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByAge">
		<tr><td  class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByAge["FY" & YearLoop][PrisonAdmitsByAge.CurrentRow]>
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
	<div id="piecontainer_PrisonAdmits_Age" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonAdmits_Age" class="HC_Pie LastChart Population_ByAge"></div>
</div>


<div id = "PrisonAdmitsBySex" class="well well-sm">
<h2>New court prison admissions by sex</h2>
	<table id="datatable_PrisonAdmissionsBySex" class="IDOC trendTable">
		<caption class="TableTitle">New court IDOC admissions by sex</caption>
		<thead>
			<th>Sex</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsBySex">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsBySex["FY" & YearLoop][PrisonAdmitsBySex.CurrentRow]>
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
	<div id="piecontainer_PrisonAdmits_Sex" class="HC_Pie LastChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonAdmits_Sex" class="HC_Pie LastChart Population_BySex"></div>
	
</div>


<div id = "PrisonAdmitsByRace" class="well well-sm">
<h2>Prison admissions by race</h2>
	<table id="datatable_Race" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admissions by race</caption>
		<thead>
			<th>Race</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByRace">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByRace["FY" & YearLoop][PrisonAdmitsByRace.CurrentRow]>
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
	<div id="piecontainer_PrisonAdmits_Race" class="HC_Pie LaststChart DataTableBefore"></div>
	<div id="piecontainer_Population_PrisonAdmits_Race" class="HC_Pie LastChart Population_ByRaceEth"></div>
	
</div>



<div id = "PrisonAdmitsByClass" class="well well-sm">
<h2>New court prison admissions by offense class</h2>
	<table id="datatable_PrisonAdmits_Class" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admissions by offense class</caption>
		<thead>
			<th>Offense class</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByClass">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByClass["FY" & YearLoop][PrisonAdmitsByClass.CurrentRow]>
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
	<div id="piecontainer_PrisonAdmits_Class_Last" class="HC_Pie LastChart DataTableBefore"></div>
	
</div>


<div id = "PrisonAdmissionsByWebCat" class="well well-sm">
<h2>New court prison admissions by offense type</h2>
		<table id="datatable_PrisonAdmits_WebCat" class="IDOC trendTable">
		<caption class="TableTitle">New court prison admissions by offense category</caption>
		<thead>
			<th>Admission offense type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByWebCat">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByWebCat["FY" & YearLoop][PrisonAdmitsByWebCat.CurrentRow]>
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
<div id="BarContainer_PrisonAdmits_WebCat" class="HC_Bar DataTableBefore"></div>
</div>


