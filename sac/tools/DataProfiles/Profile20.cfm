
<!---Begin conviction queries--->
<cfquery dbtype="query" name="ConvictionIncidentsCount" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=1
	AND DataGroupNumber=20
	AND GeographyType = 50
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="ConvictionIncidentsRate" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=2
	AND DataGroupNumber=20
	ORDER BY SortOrder, GeographyName;
</cfquery>

<cfquery dbtype="query" name="ConvictionsByAge" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=5
	AND DataGroupNumber=20
	AND SubCatNum<>255
	ORDER BY SortOrder;
</cfquery>


<cfquery dbtype="query" name="ConvictionsBySex" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=15
	AND DataGroupNumber=20
	AND SubCatNum<>255
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ConvictionsByRace" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=10
	AND DataGroupNumber=20
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ConvictionsByClass" >
	SELECT *
	FROM WTP
	WHERE MainCatnumber=100
	AND DataGroupNumber=20
	ORDER BY SortOrder;
</cfquery>

<cfquery dbtype="query" name="ConvictionsByWebCat">
	SELECT *
	FROm WTP
	WHERE MainCatNumber = 50
	AND DataGroupNumber=20
	ORDER BY SortOrder
</cfquery>
<!---End conviction queries--->


<h1 id="ConvictionHeading">CHRI Conviction Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>A conviction is a judgment of conviction or sentence entered upon a plea of guilty or upon a verdict or finding of guilty of an offense, rendered by a legally constituted jury or by a court of competent jurisdiction authorized to try the case without a jury (<a href="http://www.ilga.gov/legislation/ilcs/ilcs5.asp?ActID=1876&ChapterID=53" target="_blank">720 ILCS 5/2-5</a>).
Convictions are submitted by the courts into CHRI by the circuit court clerks primarily through electronic data transfers. Ninety counties currently submit their data to the Administrative Office of the Illinois Courts (AOIC) via the Automated Disposition Reporting (ADR) program. The ADR program, in turn, transmits the data to several state entities, including the State Police CHRI system. 
An arrest often will not lead to a conviction but can be closed though other non-conviction outcomes, such as a if a state's attorney declines to prosecute the arrestee, a withheld judgement, conditional discharge or supervision, and other outcomes. The data shown in this profile are specifically those with a conviction as the outcome.
</p>
<p>
The AOIC collects data on convictions that serve as the official sourse of county, circuit, and statewide convictions. Users interested in official conviction data are first encouraged to examine the <a href="http://www.illinoiscourts.gov/SupremeCourt/AnnReport.asp" target="_blank">annual reports available on their website</a>. 
However, the AOIC data have limited details into what the conviction was for and who was convicted. This profile attempts to bridge that gap using CHRI data. <i>Because the AOIC data and CHRI data are two completely different systems, caution should be taken when comparing the two data sources.</i>
</p>

<p><strong>ICJIA does not show conviction data where the count of conviction is below ten.</strong> CHRI conviction data are displayed at the county level below for overall convictions. 
	 The various breakdowns of CHRI data (age, race, sex, etc.) are instead aggregated to the judicial circuit. Additional county-level conviction data from CHRI can be requested by emailing <a href="mailto:cja.irc@illinois.gov" target="_top">cja.irc@illinois.gov</a>.
	CHRI data presented below were queried from the Illinois State Police Electronic Criminal History Records Information Systems (CHRI) by ICJIA staff. However reliable historical data suitable for this type of profile from CHRI can only be obtained after the early 2000s. 
</p>
<div id= "ConvictionCountSection">
<h2>Convictions</h2>
<p>
Convictions by county are available below. Each arrest incident that leads to a conviction is counted only once. An arrest incident containing more than one charge that leads to more than one conviction count will be counted only once.
</p>
	<table id="datatable_Convictions_Incidents" class="CHRI trendTable">
		<caption class="TableTitle">Convictions</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionIncidentsCount">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionIncidentsCount["CY" & YearLoop][ConvictionIncidentsCount.CurrentRow]>
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


	<div id="TimeSeries_Convictions_Counts" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_Convictions_Counts" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Convictions_Total" class="HC_Pie LastChart Population_Total" style="height: 300px; width: 400px; display: inline-block"></div>
	</cfif>
	
</div>


<div id="ConvictionRateSection">
<h2>Conviction Rates</h2>
<p>It is generally preferable to compare conviction trends across counties by uisng rates of convictions per 100,000 people instead of conviction counts. Rates will take into account the population of potential arrestees. 
	Rates calculated belore are per 100,000 residents in Illinois, using County Census estimates. The population data used to calculate rates is available below the arrest tables at the end of this profile. 
	This rate should not be confused with a clearance rate of any sort. Arrests can be cleared through many ways that do not lead to a conviction.</p>
	<table id="datatable_Convictions_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Conviction Rates</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionIncidentsRate">
		<tr class="DataRow"><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionIncidentsRate["CY" & YearLoop][ConvictionIncidentsRate.CurrentRow]>
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

	
<div id="TimeSeries_Convictions_Rates" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>




<hr><hr>


<div id = "ConvictionsByAge">
<h2>Convictions By Age</h2>
<p>Age can be obtained by using the date of birth of the offender and the date in which the court convicted the offender. 
	In some cases, the conviction age is missing, not possible, or seems unlikely to be true, such as those where the age is above 90 years old. 
	These are excluded in the data below. <a href="http://www.nij.gov/topics/crime/Pages/delinquency-to-adult-offending.aspx" target="_blank">Research has shown that the peak offending age is typically in the late teens and early twenties.</a> 
	The age at conviction can be influenced by various things unrelated to the offense. For example, an offender with little or no criminal history may not receive a conviction at all for an offense and instead some other non-conviction outcome. The court proceedings may also take a long amount of time after the arrest.
	The pie charts display the percent by age group of convictions and the population for the latest year.</p>
	<table id="datatable_Convictions_Age" class="CHRI trendTable">
		<caption class="TableTitle">Convictions by Age</caption>
		<thead>
			<th>Age Group</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionsByAge">
		<tr><td  class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionsByAge["CY" & YearLoop][ConvictionsByAge.CurrentRow]>
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
	<div id="piecontainer_Convictions_Age" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Convictions_Age" class="HC_Pie LastChart Population_ByAge" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>



<div id = "ConvictionsBySex">
<h2>Convictions By Sex</h2>
<p>Males have a disproportionately higher involvement in most aspects of the criminal justice system compared to females, particularly for violent offenses. <a href="http://www.fbi.gov/about-us/cjis/ucr/crime-in-the-u.s/2014/crime-in-the-u.s.-2014/tables/table-42" target="_blank">Nationally, the male proportion of arrests is higher for almost all types of arrests except prostitution</a>. The gap in proportion of crimes committed between males and females is large for violent offenses, and has been closing for some property offenses in the past several decades.
</p>
	<table id="datatable_Convictions_Sex" class="CHRI trendTable">
		<caption class="TableTitle">Convictions by Sex</caption>
		<thead>
			<th>Sex</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionsBySex">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionsBySex["CY" & YearLoop][ConvictionsBySex.CurrentRow]>
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
	<div id="piecontainer_Convictions_Sex" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Convictions_Sex" class="HC_Pie LastChart Population_BySex" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "ConvictionsByRace">
<h2>Convictions By Race</h2>
<p>CHRI data can be broken down into white vs. non-white arrestees. 
	Hispanic ethnicity only became an option in CHRI in 2014. For consistency, the data below include Hispanic in the non-white category. 
	Census population estimates allow for race (white, black, etc.) to be separated from ethnicity (Hispanic). Overall, non-white people 
are disproportionately more likely to be involved in the criminal justice system in the arrest stage and onwards, and are also <a href="http://www.nij.gov/topics/victims-victimization/pages/welcome.aspx" target="_blank">more likely to be victims of crime</a>. <a href="http://www.asanet.org/images/press/docs/pdf/ASARaceCrime.pdf" target="_blank">Reasons for the disparity in the criminal justice by race include contextual and historical explanations.</a></p>
	<table id="datatable_Convictions_Race" class="CHRI trendTable">
		<caption class="TableTitle">Convictions by Race</caption>
		<thead>
			<th>Race</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionsByRace">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionsByRace["CY" & YearLoop][ConvictionsByRace.CurrentRow]>
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
	<div id="piecontainer_Convictions_Race" class="HC_Pie LaststChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Convictions_Race" class="HC_Pie LastChart Population_ByRace" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>




<div id = "ConvictionsByClass">
<h2>Convictions by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. Misdemeanors (class A, B, and C) are generally minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Felonies allow incarceration in state prison, and <a href="http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073000050K5-5-3" target="_blank">for some offenses require imprisonment</a>.</p><p>Class 3 and 4 felonies are the least severe, with typical sentences to either probation up to two and half years (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison. Common examples of class 3 and 4 offenses include theft and retail theft, controlled substance possession under 15 grams, and aggravated battery. Class 1 and 2 felonies are more severe, with typical sentences 
for probation of up to four years and prison sentences from 3-15 years. Common examples of class 1 and 2 offenses include burglary and residential burglary, manufacture and delivery of controlled substances, and robbery. With the exception of first degree murder (class M), class X offenses are the most severe felonies and have mandatory prison sentences from 6-30 years. 
Class X offenses include armed robbery, manufacture and delivery of controlled substances, criminal drug conspiracy, and home invasion.</p>
<p>A single court case that has a conviction may involve one or more counts. CHRI convictions displayed below are categorized by the most severe class in which the offender is convicted on in the incident.</p>
	<table id="datatable_Convictions_Class" class="CHRI trendTable">
		<caption class="TableTitle">Convictions by Offense Class</caption>
		<thead>
			<th>Offense Class</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionsByClass">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionsByClass["CY" & YearLoop][ConvictionsByClass	.CurrentRow]>
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
	<div id="piecontainer_Convictions_Class_First" class="HC_Pie FirstChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Convictions_Class_Last" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>




<div id = "ConvictionsByWebCat">
<h2>Convictions By Offense Type</h2>
<p>A court case may involve one or more charges that could lead to one or more convictions. It is difficult to determine what is the most severe charge by offense type in many convictions. For example, an conviction for a class 4 retail theft and a conviction for a class 4 criminal damage to property offense in the same court case may be classified as either of those two.
	Instead, the data below display how many convictions occured where there was at least one conviction charge in the following categories:</p>
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
<p>Each arrest may be represnted multiple times in the data below if there is more than one different offense type. Therefore, the total number of convictions below will sum to a larger number than the total number of convictions elsewhere in this profile.</p>
		<table id="datatable_Convictions_WebCat" class="CHRI trendTable">
		<caption class="TableTitle">Convictions by Offense Category</caption>
		<thead>
			<th>Charge Offense Type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionsByWebCat">
		<tr><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionsByWebCat["CY" & YearLoop][ConvictionsByWebCat.CurrentRow]>
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
<div id="BarContainer_Convictions_WebCat" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>

<hr><hr class="hr-split">