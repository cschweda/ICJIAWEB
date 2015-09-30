
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


<h1>CHRI Conviction Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>Text describing conviction CHRI.</p>
<div id= "ConvictionCountSection">
<h2>Convictions</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
	<table id="datatable_Incidents" class="CHRI trendTable">
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

<!---output an empty list for circuits with more than one county. This will be filled in with descriptives of the table with javascript--->
	<cfif #CountyCount.NumCounties# GT 1>
		<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span>
		<ul class="PercentChangeList" id="ConvictionIncidentsCountList"></ul>
		<span class="ListCaveats">Large percent changes may be more indicative of changes in submitting conviction data to the Illinois State Police instead of actual arrest practices.</span>
		
	</cfif>

	<div id="TimeSeriesContainer1" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer1" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer2" class="HC_Pie LastChart Population_Total" style="height: 400px; width: 400px; display: inline-block"></div>
	</cfif>
	
</div>


<div id="ConvictionRateSection">
<h2>Conviction Rates</h2>
<p>It is generally preferable to compare conviction trends across counties by uisng rates of convictions per 100,000 people instead of conviction counts. Rates will take into account the population of potential arrestees. 
	Rates calculated belore are per 100,000 residents in Illinois, using County Census estimates. The population data used to calculate rates is available below the arrest tables at the end of this profile.</p>
	<table id="datatable_Rate" class="CHRI trendTable">
		<caption class="TableTitle">Conviction Rates</caption>
		<thead>
			<th>Geography</th>
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
			<cfoutput><th>#YearLoop#</th></cfoutput>
			</cfloop>
		</thead>
		<cfoutput query="ConvictionIncidentsRate">
		<tr><td class="Geography">#GeographyName#</td>	
			<cfloop index="YearLoop" from=#MinMaxYears.MinYear# to=#MinMaxYears.MaxYear# step="1">
				<cfset YearConcat = ConvictionIncidentsRate["CY" & YearLoop][ConvictionIncidentsRate.CurrentRow]>
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="TimeSeriesContainer2" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>




<hr><hr>


<div id = "ConvictionsByAge">
<h2>Convictions By Age</h2>
<p>Conviction by age description text</p>
	<table id="datatable_Age" class="CHRI trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer3" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer4" class="HC_Pie LastChart Population_ByAge" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>



<div id = "ConvictionsBySex">
<h2>Convictions By Sex</h2>
<p>Males are disproportionately higher in their involvement in most aspects of the criminal justice system. </p>
	<table id="datatable_Sex" class="CHRI trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer5" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer6" class="HC_Pie LastChart Population_BySex" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>


<div id = "ConvictionsByRace">
<h2>Convictions By Race</h2>
<p>CHRI data can be broken down into white vs. non-white convicted offenders. 
	Hispanic ethnicity only became an option in CHRI in 2014, so Hispanic in the data below are included in non-white. </p>
	<table id="datatable_Race" class="CHRI trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer9" class="HC_Pie LaststChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer10" class="HC_Pie LastChart Population_ByRace" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>




<div id = "ConvictionsByClass">
<h2>Convictions by Class</h2>
<p>Illinois has several offense classes that increase along with the severity of the offense and/or punishment. Misdemeanors (class A, B, and C) are minor crimes that may result in a fine, jail sentence under a year, a probation term of up to two years, or some other form of community supervision.
 Felonies are for more serious offenses. Class 3 and 4 felonies are the least severe, with typical sentences to either probation up to two and half years (possibly with a jail sentence) or a prison sentence from one to five years. 
If the sentence for a class 3 or 4 crime is prison, the offender will also have a mandatory supervised release period of one year after exiting prison.</p>

	<table id="datatable_Class" class="CHRI trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer7" class="HC_Pie FirstChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer8" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>




<div id = "ConvictionsByWebCat">
<h2>Convictions By Offense Type</h2>
<p>DescDescDesc DescDescDesc DescDescDesc DescDescDesc DescDescDesc.</p>
	<ul class="WebCategories">
		<li>WebCat1</li>
		<li>WebCat2</li>
		<li>WebCat3</li>
	</ul>
		<table id="datatable_WebCat" class="CHRI trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="BarContainer1" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>

