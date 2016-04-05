

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

<h1 id="AppendexHeading">Appendix</h1>
<div id="PopulationTables">
<h2 id="PopulationHeading">Population data</h1>	
<p>Populations used in rate calculations and the various charts above are available below.</p>

	<table id="datatable_populationTotal" class="Population trendTable">
	<caption class="TableTitle">Circuit population by county</caption>
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
	<caption class="TableTitle">Population by age</caption>
		<thead>
			<th>Age group</th>
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
	<caption class="TableTitle">Population by sex</caption>
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
	<caption class="TableTitle">Population by race</caption>
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
	<caption class="TableTitle">Population by race/ethnicity</caption>
		<thead>
			<th>Race/ethnicity</th>
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
</div>	
<div>
<h2 id="OffenseClasses">Illinois offense classes</h2>
<p>Illinois has several felony, misdemeanor, and lesser offense classes. Lesser offense classes such as local ordinances have penalties that do not involve probation, jail, or prison. Misdemeanors (class A, B, and C) are generally minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Felonies allow incarceration in state prison, and <a href="http://www.ilga.gov/legislation/ilcs/fulltext.asp?DocName=073000050K5-5-3" target="_blank">for some offenses require imprisonment</a>.</p><p>Class 3 and 4 felonies are the least severe, with typical sentences to up to two and half years of probation, (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison. Common examples of class 3 and 4 offenses include theft and retail theft, controlled substance possession under 15 grams, and aggravated battery.</p><p>Class 1 and 2 felonies are more severe, with typical sentences 
for probation of up to four years and prison sentences from 3-15 years. Common examples of class 1 and 2 offenses include burglary and residential burglary, manufacture and delivery of controlled substances, and robbery.</p> <p>With the exception of first degree murder (class M), class X offenses are the most severe felonies and have mandatory prison sentences from 6-30 years. 
Class X offenses include armed robbery, manufacture and delivery of controlled substances, criminal drug conspiracy, and home invasion. First degree murder (class M) offenses require a prison sentence.</p>
</div>

<div id="OffenseCategories">
<h2 id="OffenseCategoriesHeading">Offense categories</h2>
<p>The offense categories for CHRI data and prison data are as follows:</p>
	<ul class="WebCategories">
		<li>Homicide related, including murder, attempted or conspiracy to commit murder, manslaughter, reckless homicide, and criminal abortion.</li>
<li>Violent sex offenses, including criminal sexual assault, predatory sexual assault, and criminal sexual abuse.</li>
<li>Robbery: robbery and armed robbery, home invasion, vehicular invasion or hijacking.</li>
<li>Assault, battery, and armed violence, including aggravated discharge of a firearm, harassment and stalking, and intimidation.</li>
<li>Miscellaneous person offenses, including kidnaping and forcible detention, harboring a runaway, and inducement to suicide.</li>
<li>Driving under the influence of drugs or alcohol (DUI) or driving while intoxicated (DWI).</li>
<li>Burglary including residential burglary and possession of burglary tools.</li>
<li>Motor vehicle theft including theft from a motor vehicle and offenses related to stolen vehicle titles.</li>
<li>Theft including identity theft, retail theft, and tampering or possession of tools for the purposes of committing theft.</li>
<li>Forgery/Fraud/Deception including money laundering, false impersonation, computer and wire fraud, and deceptive practices.</li>
<li>Miscellaneous property offenses including trespassing, arson, vandalism, and destruction of property.</li>
<li>Weapons offenses including unlawful use or possession of a weapon, unlawful sales, defacing firearms, and concealed carry violations. Offenses that involved the discharge of a firearm are included in the assault, battery, and armed violence category.</li>
<li>Miscellaneous sex offenses including child pornography, obscenity, sexual exploitation of a child, and sex offender location violations.</li>
<li>Controlled substance and meth - manufacture/delivery/trafficking. Controlled substances included a large number of possible substances, but primarily involved heroin or cocaine.</li>
<li>Controlled substance and meth - possession.</li>
<li>Cannabis - manufacture/delivery/trafficking.</li>
<li>Cannabis - possession.</li>
<li>Miscellaneous drug offenses including paraphernalia and offenses related to syringes.</li>
<li>Human trafficking related offenses including prostitution, pimping, solicitation, promoting prostitution, and involuntary servitude.</li>
<li>Miscellaneous public order offenses including animal cruelty, mob action, disorderly conduct, and public nuisance offenses.</li>
<li>Registry violations including violating sex offender registries, failing to report a change of address.</li>
<li>Driving and motor vehicle offenses including driving without a license or registration, traffic offenses, and title violations.</li>
<li>Other offenses include offenses not described above.</li>
	</ul>

</div>