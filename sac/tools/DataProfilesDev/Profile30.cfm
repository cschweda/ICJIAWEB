
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
<title>ICJIA Criminal Justice Data Profiles</title>


<h1>Adult Prison Admission Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>A prison sentence can be imposed, <a href="http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073000050K5-5-3" target="_blank">and in some cases is required</a>, for felonies in Illinois. An admission into the Illinois Department of Corrections (IDOC) occurs when a prison sentence is imposed for a convicted felon or, after exiting prison, a person can be returned to prison as a result of a technical violation while on their mandatory supervised release (MSR) period.
  </p>

<p>The data in this profile are from an ICJIA analysis of data provided by the IDOC planning and research unit. Admissions do not include juveniles (The Illinois Department of Juvenile Justice houses juvenile offenders in separate facilities). A person can be admitted into prison more than one time in a year. In this data profile, each admission is counted separately. User's should not confuse prison admissions with the prison population. Due to longer sentences, the prison population is older and have more violent offenders than the admissions into prison.</p>
<div id="PrisonAdmitsByAdmitTypeSection">
	<h2>Prison Admissions By Admission Type</h2>
	<p>An admission into prison can generally be grouped into two main types - new court admissions and technical violator admissions. New court admissions are due to a felony conviction and sentence to the Illinois Department of Corrections. These include those sentenced for a new offense while on MSR.
	Technical violation admissions can be the result of an arrest while on MSR or the result of a violation of a requirement in the MSR period (failing a drug test, not attending meetings with parole officers, associating with known gang members, etc.). 
	<a href="http://www.icjia.state.il.us/spac/pdf/SPAC%20Report%20MSR%20violator%209-13.pdf" target="_blank">Various parole policies, staffing levels and decisions, MSR population levels, and legislation have influenced technical violator readmission levels over time</a>.
	An offender may violate MSR by being arrested, return to prison, and be sentenced while in prison for the new offense. The data presented in this profile classifies the offender by the admission type when entering prison. Such as person would be classified as a technical violator.
	</p>
	<table id="datatable_PrisonAdmitsbyAdmitType" class="IDOC trendTable">
		<caption class="TableTitle">Prison Admissions By Admission Type</caption>
		<thead>
			<th>Admission Type</th>
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
	
	<p><span class="ListCaveats">New court admissions to prison are usually the result of sentencing for crimes commited in the county. Technical violation admissions are the result of the offender violating conditions of their parole or mandatory supervised release. A violation may be a new arrest or offense committed. At the county and judicial circuit, new court admissions are more useful to examine as they are the result of crimes committed within the county or circuit. </span>
	<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span></p>
	<ul class="PercentChangeList" id="PrisonAdmitsByAdmitTypeCountList"></ul>
		
	
	<div id="TimeSeriesContainer_PrisonAdmitsByType" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<div id="" class="HC_Pie FirstChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
</div>


<hr><hr>
<cfif #CountyCount.NumCounties# GT 1 AND #SelectedICJIANumber# GT 102><!---Only outputting this for Circuits with more than one county--->
<div id= "NewPrisonAdmitsByCountySection">
<h2>New Court Prison Admissions by County</h2>
<p>The data below show the commiting county for the new court prison admissions within the judicial circuit. Caution should be taken when comparing counties with this data. Users should instead examine the new court admission rates per 100,000 county residents further below. </p>
	<table id="datatable_NewPrisonAdmitsbyCounty" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Admissions</caption>
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

<!---output an empty list for circuits with more than one county. This will be filled in with descriptives of the table with javascript--->

	<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span>
	<ul class="PercentChangeList" id="PrisonAdmitsByCountyCountList"></ul>		


	<div id="TimeSeriesContainer_PrisonAdmitsByCounty_Circuit" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="" class="HC_Pie LastChart Population_Total" style="height: 300px; width: 400px; display: inline-block"></div>
	</cfif>
	<hr><hr>
</div>
</cfif>

<div id="NewPrisonAdmitsRateByCountySection">
<h2>New Court Prison Admission Rates by County</h2>
<p>The following new court prison admission rates per 100,000 people are calculated by using the total county population from Census estimates (population data is available at the end of this profile). </p>
	<table id="datatable_Rate" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Admission Rates</caption>
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
	
<p><span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span></p>
<ul class="PercentChangeList" id="PrisonAdmitssByCountyRateList"></ul>		
		
<div id="TimeSeriesContainer_PrisonAdmitsByCounty" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>
<hr><hr>


<div id = "PrisonAdmitsByAge">
<h2>New Court Prison Admissions By Age</h2>
<p>
The data below show the new court prison admissions by several age groups. The typical admission age into IDOC is about 32 years old statewide.
</p>
	<table id="datatable_Age" class="IDOC trendTable">
		<caption class="TableTitle">Circuitwide New Court Prison Admissions by Age</caption>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="" class="HC_Pie LastChart Population_ByAge" style="height: 300px; width: 400px; display: inline-block"></div>
</div>
<hr><hr>

<div id = "PrisonAdmitsBySex">
<h2>New Court Prison Admissions By Sex</h2>
<p>Males have a disproportionately higher involvement in most aspects of the criminal justice system compared to females, particularly for violent offenses. Statewide, males account for approximately 90 percent of all new court admissions into prison. The vast majority of violent admissions are male.
</p>
	<table id="datatable_PrisonAdmissionsBySex" class="IDOC trendTable">
		<caption class="TableTitle">New Court IDOC Admissions by Sex</caption>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="" class="HC_Pie LastChart Population_BySex" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "PrisonAdmitsByRace">
<h2>Prison Admissions By Race</h2>
<p>Statewide, the proportion of prison admissions that are black is much larger than the proportion of the general population that is black, though this can vary by county and judicial circuit. <a href="http://www.asanet.org/images/press/docs/pdf/ASARaceCrime.pdf" target="_blank">Reasons for the disparity in the criminal justice by race include contextual and historical explanations.</a></p>
	<table id="datatable_Race" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Admissions by Race</caption>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="" class="HC_Pie LaststChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="" class="HC_Pie LastChart Population_ByRaceEth" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "PrisonAdmitsByClass">
<h2>New Court Prison Admissions By Offense Class</h2>
<p>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. 
 Felonies are for more serious offenses and allow incarceration in state prison. Class 3 and 4 felonies are the least severe, with sentences to prison from one to five years and a mandatory supervised release period of one year after exiting prison. Common examples of class 3 and 4 offenses include theft and retail theft, controlled substance possession under 15 grams, and aggravated battery. 
Class 1 and 2 felonies are more severe, with prison sentences from 3-15 years. Common examples of class 1 and 2 offenses include burglary and residential burglary, manufacture and delivery of controlled substances, and robbery. 
With the exception of first degree murder (class M), class X offenses are the most severe felonies and have mandatory prison sentences from 6-30 years. 
Class X offenses include armed robbery, manufacture and delivery of controlled substances, criminal drug conspiracy, and home invasion.</p>
<p>A person admitted into the Illinois Department of Corrections can have more than one prison sentence. These sentences can be concurrent (the sentences are served simultaneously) or consecutive. The offense class for the admission is determined by the offense that will keep the person in prison for the longest amount of time, also known as the holding offense. Statewide, class 3 and 4 admissions are the most common and make up a slim majority of all prison admissions. However, because the sentences for class 3 and 4 sentences are much shorter than the more severe classes, the class 3 and 4 offenders do not make up the majority of the prison population.

</p>

	<table id="datatable_Class" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Admissions by Offense Class</caption>
		<thead>
			<th>Offense Class</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByClass">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByClass["FY" & YearLoop][PrisonAdmitsByClass.CurrentRow]>
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

<div id = "PrisonAdmissionsByWebCat">
<h2>New Court Prison Admissions By Offense Type</h2>
<p>
A person admitted into the Illinois Department of Corrections can have more than one prison sentence. These sentences can be concurrent (the sentences are served simultaneously) or consecutive. 
The offense type for the admission is determined by the offense that will keep the person in prison for the longest amount of time, also known as the holding offense. The admissions shown in this profile can be split up into numerous offense categories:
</p>
	<ul class="WebCategories">
		<li>Homicide related, including murder, attempted or consipriacy to commit murder, manslaughter, reckless homicide, and criminal abortion.</li>
<li>Violent sex offenses, including criminal sexual assault, predatory sexual assault, and criminal sexual abuse</li>
<li>Robbery: robbery and armed robbery, home invasion, vehicular invasion or hijacking</li>
<li>Assault, battery, and armed violence, including aggravated discharge of a firearm, harassment and stalking, and intimidation.</li>
<li>Miscellaneous person offenses, including kidnaping and forcible detention, harboring a runaway, and inducement to suicide.</li>
<li>Driving under the influence of drugs or alcohol (DUI) or driving while intoxicated (DWI).</li>
<li>Burglary including residential burglary and possession of burglary tools.</li>
<li>Motor vehicle theft including theft from a motor vehicle and offenses related to stolen vehicle titles</li>
<li>Theft including identity theft, retail theft, and tampering or possession of tools for the purposes of commiting theft</li>
<li>Forgery/Fraud/Deception including money laundering, false impersonation, computer and wire fraud, and deceptive practices</li>
<li>Miscellaneous property offenses including trespassing, arson, vandalism, and destruction of property</li>
<li>Weapons offenses including unlawful use or possession of a weapon, unlawful sales, defacing firearms, and concealed carry violations. Offenses that involved the discharge of a firearm are included in the assault, battery, and armed violence category.</li>
<li>Miscellaneous sex offenses including child pornography, obsenity, sexual exploitation of a child, and sex offender location violations.</li>
<li>Controlled substance and meth - manufacture/delivery/trafficking. Controlled substances included a large number of possible substances, but primarily involved heroin or cocaine.</li>
<li>Controlled substance and meth - possession</li>
<li>Cannabis - manufacture/delivery/trafficking</li>
<li>Cannabis - possession</li>
<li>Miscellaneous drug offenses including paraphernalia and offenses related to syringes.</li>
<li>Human trafficking related offenses including prostitution, pimping, solicitation, promoting prositution, and involuntary servitude.</li>
<li>Miscellaneous public order offenses including animal cruelty, mob action, disorderly conduct, and public nuisance offenses.</li>
<li>Registry violations including violating sex offender registries, failing to report a change of address.</li>
<li>Driving and motor vehicle offenses including driving without a license or registration, traffic offenses, and title violations.</li>
<li>Other offenses not described above.</li>
	</ul>
		<table id="datatable_WebCat" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Admissions by Offense Category</caption>
		<thead>
			<th>Admission Offense Type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonAdmitsByWebCat">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonAdmitsByWebCat["FY" & YearLoop][PrisonAdmitsByWebCat.CurrentRow]>
				<cfif YearConcat IS NOT ''><cfSet YearConcat = Int(YearConcat)></cfif>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="BarContainer_Admits_WebCat" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>


