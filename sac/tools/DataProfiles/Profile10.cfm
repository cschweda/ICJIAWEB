
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


<h1 id="ArrestHeading">CHRI Arrest Profile for <cfoutput>#GeographyName#</cfoutput></h1>

<p>Arrest data in Illinois are available from two sources: <a href="http://www.isp.state.il.us/crime/ucrhome.cfm" target="_blank">I-UCR arrests</a> and the Illinois State Police Electronic Criminal History Record Information (CHRI) database. 
UCR arrest data are collected from the Illinois implementation of the <a href="https://www.fbi.gov/about-us/cjis/ucr/ucr" target="_blank">federal UCR program</a>. UCR data have a small number of categories and not all arrests are included in those categories. There is no information in the UCR arrests about age, sex, race, or offense class. 
	However, <a href="http://www.icjia.org/research/overview#tab_research-data" target="_blank">UCR data are available for several decades outside of this profile</a>. A CHRI arrest record is generated when an arrest incident occurs, the person arrested is fingerprinted, and the arrest data is succesfully submitted to the Illinois State Police Database.
	 CHRI data can be analyzed by race, sex, age, offense class, and offense type.  
	 <strong>ICJIA does not show arrest data where the count of arrests is below ten.</strong> CHRI arrest data are displayed at the county level below for overall arrests. 
	 The various breakdowns of CHRI data (age, race, sex, etc.) are instead aggregated to the judicial circuit. Additional county-level arrest data from CHRI can be requested by emailing <a href="mailto:cja.irc@illinois.gov" target="_top">cja.irc@illinois.gov</a>.
	CHRI data presented below were queried from the Illinois State Police Electronic Criminal History Records Information Systems (CHRI) by ICJIA staff. However reliable historical data suitable for this type of profile from CHRI can only be obtained after the early 2000s.</p> 



<div id= "ArrestCountSection">
<h2>Arrest Incidents</h2>
<p><!---May use this but probably not needed><cfif #SelectedICJIANumber# LTE 102>Your original selection was for county-level arrest data. </cfif><--->Overall arrests for each county are available within this judicial circuit below.
For all arrests to be included in this profile, the age of the arrestee had to be between 17 and 90 years old. Arrests with an age (based on the date of birth recoded in the arrest incident and the arrest date) between 17 and 90 only are included in this profile</p>
	<table id="datatable_Arrests_Incidents" class="CHRI trendTable">
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


		

	<span class="ListCaveats">Large percent changes may be more indicative of changes in submitting arrests to the Illinois State Police instead of actual arrest practices.</span>
	<div id="TimeSeries_Arrests_Counts" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer_Arrests_Counts" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Arrests_Total" class="HC_Pie LastChart Population_Total" style="height: 300px; width: 400px; display: inline-block"></div>
	</cfif>
	

	
	
	
	
	
		<hr>
		<hr>
</div>

<div id="ArrestRateSection">
<h2>Arrest Incident Rates (per 100,000 people)</h2>
<p>CHRI arrest trends across counties can be compared by using arrest rates instead of arrest counts. Rates take into account the population of potential arrestees. 
	Rates calculated belore are per 100,000 residents in Illinois, using County Census estimates. The population data used to calculate rates is available at the end of this profile.</p>
	<table id="datatable_Arrests_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Arrest Incident Rates</caption>
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

	
<div id="TimeSeriesContainer_Arrests_Counts" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>




<hr><hr>


<div id = "ArrestsByAge">
<h2>Arrest Incidents By Age</h2>
<p>Arrest age can be obtained by using the date of birth of the arrestee and the arrest date on the record in CHRI. 
	In some cases, the arrest age is missing, not possible, or seems unlikely to be true, such as those where the age is above 90 years old. 
	These are excluded in the data in this profile. <a href="http://www.nij.gov/topics/crime/Pages/delinquency-to-adult-offending.aspx" target="_blank">Research has shown that the peak offending age is typically in the late teens and early twenties.</a>
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
	<div id="piecontainer_Arrests_Age" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Age" class="HC_Pie LastChart Population_ByAge" style="height: 300px; width: 400px; display: inline-block"></div>
	
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
	<div id="piecontainer_Arrests_Sex" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Sex" class="HC_Pie LastChart Population_BySex" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByRace">
<h2>Arrests By Race</h2>
<p>CHRI data can be broken down into white vs. non-white arrestees. 
	Hispanic ethnicity only became an option in CHRI in 2014. For consistency, the data below include Hispanic in the non-white category. 
	Census population estimates allow for race (white, black, etc.) to be separated from ethnicity (Hispanic). Overall, non-white people 
are disproportionately more likely to be involved in the criminal justice system in the arrest stage and onwards, and are 
also <a href="http://www.nij.gov/topics/victims-victimization/pages/welcome.aspx" target="_blank">more likely to be victims of crime</a>. 
<a href="http://www.asanet.org/images/press/docs/pdf/ASARaceCrime.pdf" target="_blank">Reasons for the disparity in the criminal justice by race include contextual and historical explanations.</a></p>
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
	<div id="piecontainer_Arrests_Race" class="HC_Pie LaststChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Population_Race" class="HC_Pie LastChart Population_ByRace" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "ArrestsByClass">
<h2>Arrests by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. Misdemeanors (class A, B, and C) are generally minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Felonies allow incarceration in state prison, and <a href="http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073000050K5-5-3" target="_blank">for some offenses require imprisonment</a>.</p><p>Class 3 and 4 felonies are the least severe, with typical sentences to either probation up to two and half years (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison. Common examples of class 3 and 4 offenses include theft and retail theft, controlled substance possession under 15 grams, and aggravated battery. Class 1 and 2 felonies are more severe, with typical sentences 
for probation of up to four years and prison sentences from 3-15 years. Common examples of class 1 and 2 offenses include burglary and residential burglary, manufacture and delivery of controlled substances, and robbery. With the exception of first degree murder (class M), class X offenses are the most severe felonies and have mandatory prison sentences from 6-30 years. 
Class X offenses include armed robbery, manufacture and delivery of controlled substances, criminal drug conspiracy, and home invasion.</p>
<p>A single arrest incident may involve one or more charges. CHRI arrests displayed below are categorized by the most severe charge within the incident.</p>
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
	<div id="piecontainer_Arrests_Class_First" class="HC_Pie FirstChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	<div id="piecontainer_Arrests_Class_Last" class="HC_Pie LastChart DataTableBefore" style="height: 300px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "ArrestsByWebCat">
<h2>Arrests by Offense Type</h2>
<p>A single arrest incident may involve one or more charges. It is difficult to determine what is the most severe charge by offense type in many arrests. For example, an arrest with a charge for a class 4 retail theft and a charge for a class 4 criminal damage to property may be classified as either of those two.
	Instead, the data below display how many arrests occured where there was at least one charge in the following categories:</p>
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
<p>Each arrest may be reperesnted multiple times in the data below if there is more than one charge. Therefore, the total number of arrests below will sum to a larger number than the total number of arrests elsewhere in this profile. Cells with "NA" have values below ten and are masked.</p>	
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
<div id="BarContainer_Arrests_WebCat" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>


<hr><hr class="hr-split">