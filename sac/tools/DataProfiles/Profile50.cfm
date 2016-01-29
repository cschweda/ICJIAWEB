

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



<h1 id="CourtsHeading">Adult Court Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>Official court data are collected by the <a href="http://www.illinoiscourts.gov/" target="_blank">Administrative Office of Illinois' Courts</a> (AOIC)
and published in their <a href="http://www.illinoiscourts.gov/SupremeCourt/AnnReport.asp" target="_blank">annual reports</a>. The data below on filings, felony convictions, felony sentences, and probation caseloads 
are from those reports collected over time. <cfif #SelectedICJIANumber# GT 102 AND #SelectedICJIANumber# NEQ 999>The counties within judicial circuits rarely change, but this profile will include counties that were within the judicial circuit as of the last AOIC annual report published. </cfif> 
</p>


<div id="CourtFilingsCountSection">
	<h2>Criminal Filings</h2>
	<p>
	A criminal court filing may occur after an arrest incident.  After screening a case and determining that it warrants
further action, the state’s attorney must file formal charges in court. The circumstances of the offense will determine if a misdemeanor or felony charge is filed.
 Misdemeanor cases are less serious than felonies and are punishable by probation sentence of two years or less and less than
one year of incarceration. Felony cases, on the other hand, are more serious. Sentences may
include a probation term of up to four years and incarceration for more than one year. Reporting
practices may differ across time and across counties by number of filings. For example, when two or
more defendants are involved in a single case, some state’s attorneys file a single case charging
all suspects, while others file a separate case for each individual. Felonies are more serious than misdemeanors. A DUI filing can be either
	a felony or misdemeanor. The AOIC began separating DUI filings from felony and misdemeanor filings in 2014.
	As a result, misdemeanor and felony filings may be lower beginning in 2014 compared to previous years.
	</p>
	<table id="datatable_CourtFilings_Count" class="AOIC trendTable">
		<caption class="TableTitle">Criminal Filings</caption>
		<thead>
			<th>Criminal Filing Type</th>
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



<div id="CourtFilingsRateSection">
<h2>Criminal Filings Rate per 100,000 people</h2>
<p>Criminal filings rates per 100,000 people take into account the population changes that occur over time. Rates are calculated using the total population within your selected geography.</p>
	<table id="datatable_CourtFilings_Rate" class="AOIC trendTable">
		<caption class="TableTitle">Criminal Filings Rate per 100,000 People</caption>
		<thead>
			<th>Criminal Filing Type</th>
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




<div id="CourtFelonyConvictionSentenceSection">
<h2>Felony Convictions and Sentences</h2>
<p>The AOIC collects counts of how many individuals are convicted of a felony and their sentencing outcomes. The vast majority of 
convictions occur as a result of a plea bargain. It is possible for a person to have a felony charge initially filed but during the plea
process the prosecution and defense agree to a misdemeanor offense. Possible penalties for a felony offense include prison incarceration, probation, and conditional
discharge, the latter two of which may include periodic imprisonment or home confinement. A
number of factors influence the type and length of sentence imposed on convicted felons,
including the severity of the crime, the offender’s criminal and social history, safety of the
community, and legislation affecting certain types of offenses. <a href="http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073000050K5-5-3" target="_blank">Some types of felony convictions require
a prison sentence by state statute.</a></p>
	<table id="datatable_FelonySentences_Count" class="AOIC trendTable">
		<caption class="TableTitle">Felony Sentences</caption>
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
	<div id="piecontainer_FelonySentences_Count_First" class="HC_Pie FirstChart DataTableBefore"></div>
	<div id="piecontainer_FelonySentences_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>



<div id="CourtProbationCaseloadsSection">
<h2>Probation Caseloads</h2>
<p>The Illinois probation system is operated by the courts—the judicial branch. Probation
supervision is administered locally by individual departments. The Administrative Office of the
Illinois Courts Probation Division oversees provision of statewide probation services.
The administration of each probation department in Illinois varies according to the needs and
resources of each county or circuit. Most Illinois counties have a single probation department
that oversees all criminal supervision caseloads, including probation, conditional discharge, and
court supervision.</p>
	<table id="datatable_ProbationCaseloads_Count" class="AOIC trendTable">
		<caption class="TableTitle">Probation Caseloads</caption>
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
	<div id="piecontainer_ProbationCaseloads_Count_First" class="HC_Pie FirstChart DataTableBefore"></div>
	<div id="piecontainer_ProbationCaseloads_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>


