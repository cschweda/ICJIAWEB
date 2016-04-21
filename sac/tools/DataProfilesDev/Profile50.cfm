

<cfquery dbtype="query" name="AOIC_CriminalFilings_Count" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=50
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="AOIC_CriminalFilings_Rate" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=50
	AND NumberType='R'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="AOIC_FelonyFilings_Rate_Regional" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=50
	AND SubCatNum=20
	AND NumberType='R'
	AND (GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" /> OR GeographyID IN (500,510,520,530,999))
	ORDER BY SortOrder;
</cfquery>



<cfquery dbtype="query" name="AOIC_FelonySentences_Count" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=30
	AND DataGroupNumber=50
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="AOIC_ProbationCaseloads_Count" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=50
	AND DataGroupNumber=50
	AND NumberType='C'
	AND GeographyID = <cfqueryparam value="#url.ICJIANumber#" cfsqltype="CF_SQL_INTEGER" />
	ORDER BY SortOrder;
</cfquery>


<hr class="hr-split">
<h1 id="CourtsHeading">Adult court profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>These data are official court data collected by the <a href="http://www.illinoiscourts.gov/" target="_blank">Administrative Office of Illinois' Courts</a> (AOIC)
and published in their <a href="http://www.illinoiscourts.gov/SupremeCourt/AnnReport.asp" target="_blank">annual reports</a>. <cfif #SelectedICJIANumber# GT 102 AND #SelectedICJIANumber# NEQ 999>The counties within judicial circuits rarely change, but this profile will include counties that were within the judicial circuit as of the last AOIC annual report published. </cfif> 
</p>


<div id="CourtFilingsCountSection" class="well well-sm">
	<h2>Criminal filings</h2>
	<p>The AOIC began separating DUI filings from felony and misdemeanor filings in 2014. As a result, misdemeanor and felony filings may be lower beginning in 2014 compared to previous years.  A DUI filing can be either
	a felony or misdemeanor. 
	</p>
	<table id="datatable_CourtFilings_Count" class="AOIC trendTable">
		<caption class="TableTitle">Criminal Filings</caption>
		<thead>
			<th>Criminal filing type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="AOIC_CriminalFilings_Count">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = AOIC_CriminalFilings_Count["CY" & YearLoop][AOIC_CriminalFilings_Count.CurrentRow]>
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

	<div id="TimeSeriesContainer_CourtFilings_Count" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_CourtFilings_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>



<div id="CourtFilingsRateSection" class="well well-sm">
<h2>Criminal filings rate per 100,000 people</h2>
<p>Population data used to calculate these rates is available in the <a href="#PopulationTables">appendix</a>.</p>
	<table id="datatable_CourtFilings_Rate" class="AOIC trendTable">
		<caption class="TableTitle">Criminal filings rate per 100,000 people</caption>
		<thead>
			<th>Criminal filing type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="AOIC_CriminalFilings_Rate">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = AOIC_CriminalFilings_Rate["CY" & YearLoop][AOIC_CriminalFilings_Rate.CurrentRow]>
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

	<div id="TimeSeriesContainer_CourtFilings_Rate" class="HC_TimeSeries DataTableBefore"></div>
</div>



<!--->
<div id="FelonyFilingsRegionalSection">
<h2>Regional Comparison of Felony Filings Rate</h2>
<p>Regional comparison</p>
	<table id="datatable_FelonyFilingsRegional_Rate" class="AOIC trendTable">
		<caption class="TableTitle">Felony Filings Rate (per 100,000 people) - Regional Comparison</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="AOIC_FelonyFilings_Rate_Regional">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = AOIC_FelonyFilings_Rate_Regional["CY" & YearLoop][AOIC_FelonyFilings_Rate_Regional.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = (YearConcat)></cfif>
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
	<div id="TimeSeriesContainer_FelonyFilingsRegional_Rate" class="HC_TimeSeries DataTableBefore"></div>
</div>
<--->



<div id="CourtFelonyConvictionSentenceSection" class="well well-sm">
<h2>Felony convictions and sentences</h2>
	<table id="datatable_FelonySentences_Count" class="AOIC trendTable">
		<caption class="TableTitle">Felony sentences</caption>
		<thead>
			<th>Sentence</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="AOIC_FelonySentences_Count">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = AOIC_FelonySentences_Count["CY" & YearLoop][AOIC_FelonySentences_Count.CurrentRow]>
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

	<div id="TimeSeriesContainer_FelonySentences_Count" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_FelonySentences_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>



<div id="CourtProbationCaseloadsSection" class="well well-sm">
<h2>Probation caseloads</h2>
	<table id="datatable_ProbationCaseloads_Count" class="AOIC trendTable">
		<caption class="TableTitle">Probation caseloads</caption>
		<thead>
			<th>Type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="AOIC_ProbationCaseloads_Count">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = AOIC_ProbationCaseloads_Count["CY" & YearLoop][AOIC_ProbationCaseloads_Count.CurrentRow]>
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

	<div id="TimeSeriesContainer_ProbationCaseloads_Count" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_ProbationCaseloads_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>


