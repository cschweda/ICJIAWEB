
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



<h1 id="PrisonExitsHeading">Adult Prison Exits Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>A prison sentence can be imposed, and in some cases is required, for felonies in Illinois. An exit from the Illinois Department of Corrections (IDOC) occurs when a person leaves a prison or adult transition center. A person exiting on a court admission will require additional supervision in the community, known as mandatory supervised release. The length of the supervision varies by offense class and in some cases the offense. A person exiting a prison facility from a technical violation admission will either be discharged and no longer under IDOC supervision or will have additional supervision time remaining.

The data in this profile are from an ICJIA analysis of data provided by the IDOC planning and research unit. Exits do not include juveniles (The Illinois Department of Juvenile Justice houses juvenile offenders in separate facilities). A person can be exit prison more than one time in a year. In this data profile, each admission is counted separately. User's should not confuse prison exits with the prison population. Due to longer sentences, the prison population is older and have more violent offenders than the exits from prison.</p>

<div id="PrisonExitsByExitTypeSection">
	<h2>Prison Exits by Exit Type</h2>
	<p>Illinois has a determinate sentencing system. For those sentenced to prison, they will receive 1-3 years of mandatory supervised release upon exiting, unless the sentence has been discharged. Most discharge exits are exiting from a technical violation of their mandatory supervised release. Some exits also immediately return to prison as soon as the exit due to not meeting conditions of their mandatory supervised release, such as not having a host site to reside at</p>
	<table id="datatable_PrisonExitsbyExitType" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exits by Exit Type</caption>
		<thead>
			<th>Exit Type</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="PrisonExitsByExitTypeCount">
		<tr class="DataRow"><td class="Indicator">#SubCatDesc#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = PrisonExitsByExitTypeCount["FY" & YearLoop][PrisonExitsByExitTypeCount.CurrentRow]>
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
	<div id="TimeSeriesContainer_PrisonExitsByType" class="HC_TimeSeries DataTableBefore"></div>
	<div id="piecontainer_PrisonAdmits_ExitType_Count_First" class="HC_Pie FirstChart DataTableBefore"></div>
	<div id="piecontainer_PrisonAdmits_ExitType_Count_Last" class="HC_Pie LastChart DataTableBefore"></div>
</div>




<hr><hr>
<cfif #CountyCount.NumCounties# GT 1 AND #SelectedICJIANumber# GT 102><!---Only outputting this for Circuits with more than one county--->
<div id= "NewPrisonExitsByCountySection">
<h2>Prison Exits by County</h2>
<p></p>
	<table id="datatable_NewPrisonExitsbyCounty" class="IDOC trendTable">
		<caption class="TableTitle">New Court Prison Exits</caption>
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
<h2>Prison Exit Rates by County</h2>
<p>The following new court prison exit rates per 100,000 people are calculated by using the total county population from Census 
	estimates (population data is available at the end of this profile).</p>
	<table id="datatable_Rate" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exit Rates</caption>
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
<h2>Prison Exits By Age</h2>
<p>The data below show the new court prison exits by several age groups. The typical admission age into IDOC is about 33 years old statewide.</p>
	<table id="datatable_PrisonExits_Age" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exits by Age</caption>
		<thead>
			<th>Age Group</th>
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
<h2>Prison Exits By Sex</h2>
<p>Males have a disproportionately higher involvement in most aspects of the criminal justice system compared to females, particularly for violent offenses. Statewide, males account for approximately 90 percent of all exits from prison.</p>
	<table id="datatable_PrisonExitsBySex" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exits by Sex</caption>
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
<h2>Prison Exits By Race/Ethnicity</h2>
<p>Statewide, the proportion of prison exits that are black is much larger than the proportion of the general population that is black, though this can vary by county and judicial circuit. <a href="http://www.asanet.org/images/press/docs/pdf/ASARaceCrime.pdf" target="_blank">Reasons for the disparity in the criminal justice by race include contextual and historical explanations.</a></p>
	<table id="datatable_RaceEth" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exits by Race/Ethnicity</caption>
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
<h2>Prison Exits By Offense Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. 
 Felonies are for more serious offenses and allow incarceration in state prison. Class 3 and 4 felonies are the least severe, with sentences to prison from one to five years and a mandatory supervised release period of one year after exiting prison. Common examples of class 3 and 4 offenses include theft and retail theft, controlled substance possession under 15 grams, and aggravated battery. 
Class 1 and 2 felonies are more severe, with prison sentences from 3-15 years. Common examples of class 1 and 2 offenses include burglary and residential burglary, manufacture and delivery of controlled substances, and robbery. 
With the exception of first degree murder (class M), class X offenses are the most severe felonies and have mandatory prison sentences from 6-30 years. 
Class X offenses include armed robbery, manufacture and delivery of controlled substances, criminal drug conspiracy, and home invasion.</p>
<p>A person admitted into the Illinois Department of Corrections can have more than one prison sentence. These sentences can be concurrent (the sentences are served simultaneously) or consecutive. 
	The offense class for the admission is determined by the offense that will keep the person in prison for the longest amount of time, also known as the holding offense. 
	Statewide, class 3 and 4 admissions are the most common and make up a slim majority of all prison admissions. 
	However, because the sentences for class 3 and 4 sentences are much shorter than the more severe classes, the 
	class 3 and 4 offenders do not make up the majority of the prison population.
</p>
	<table id="datatable_PrisonExits_Class" class="IDOC trendTable">
		<caption class="TableTitle">Prison Exits by Offense Class</caption>
		<thead>
			<th>Offense Class</th>
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
	<div id="piecontainer_PrisonExits_Class_First" class="HC_Pie FirstChart DataTableBefore"></div>
	<div id="piecontainer_PrisonExits_Class_Last" class="HC_Pie LastChart DataTableBefore"></div>
	
</div>
<hr><hr>

<div id = "PrisonExitsByWebCat">
<h2>Prison Exits By Offense Type</h2>
<p>
A person exiting from the Illinois Department of Corrections can have more than one prison sentence. These sentences can be concurrent (the sentences are served simultaneously) or consecutive. 
The offense type for the exit is determined by the offense that will keep the person in prison for the longest amount of time, also known as the holding offense. The exits can be split up into numerous offense categories:
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
		<caption class="TableTitle">Prison Exits by Offense Category</caption>
		<thead>
			<th>Charge Offense Type</th>
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