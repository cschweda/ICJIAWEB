
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
<title>ICJIA Criminal Justice Data Profiles</title>


<h1>Adult Prison Exits Profile for <cfoutput>#GeographyName#</cfoutput></h1>
<p>Description of what IDOC is, what prison is, cat pictures, etc.</p>

<div id="PrisonExitsByExitTypeSection">
	<h2>Prison Exits by Exit Type</h2>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
	<div id="TimeSeriesContainer_PrisonExitsByType" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<div id="piecontainer-11" class="HC_Pie FirstChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer-22" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
</div>




<hr><hr>
<cfif #CountyCount.NumCounties# GT 1 AND #SelectedICJIANumber# GT 102><!---Only outputting this for Circuits with more than one county--->
<div id= "NewPrisonExitsByCountySection">
<h2>Prison Exits by County</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
	<cfif #CountyCount.NumCounties# GT 1>
		<span class="ListIntroText">From <cfoutput>#MinMaxYears.MinYear#</cfoutput> to <cfoutput>#MinMaxYears.MaxYear#</cfoutput>, </span>
		<ul class="PercentChangeList" id="PrisonAdmissionsCountList"></ul>		
	</cfif>

	<div id="TimeSeriesContainer1" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>
	<cfif #CountyCount.NumCounties# GT 1>
	<div id="piecontainer1" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer2" class="HC_Pie LastChart Population_Total" style="height: 400px; width: 400px; display: inline-block"></div>
	</cfif>
	<hr><hr>
</div>
</cfif>



<div id="NewPrisonExitsRateByCountySection">
<h2>Prison Exit Rates by County</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="TimeSeriesContainer2" class="HC_TimeSeries DataTableBefore" style="min-width: 310px; min-height: 500px; margin: 0 auto"></div>	
</div>
<hr><hr>





<div id = "PrisonExitsByAge">
<h2>Prison Exits By Age</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
	<table id="datatable_Age" class="IDOC trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer3" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer4" class="HC_Pie LastChart Population_ByAge" style="height: 400px; width: 400px; display: inline-block"></div>
</div>
<hr><hr>





<div id = "PrisonExitsBySex">
<h2>Prison Exits By Sex</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer5" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer6" class="HC_Pie LastChart Population_BySex" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>



<div id = "PrisonExitsByRaceEth">
<h2>Prison Exits By Race/Ethnicity</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer9" class="HC_Pie LaststChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer10" class="HC_Pie LastChart Population_ByRaceEth" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>




<div id = "PrisonExitsByClass">
<h2>Prison Exits By Offense Class</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
	<table id="datatable_Class" class="IDOC trendTable">
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
	<div id="piecontainer7" class="HC_Pie FirstChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	<div id="piecontainer8" class="HC_Pie LastChart DataTableBefore" style="height: 400px; width: 400px; display: inline-block"></div>
	
</div>
<hr><hr>

<div id = "PrisonExitsByWebCat">
<h2>Prison Exits By Offense Type</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
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
				<td>#YearConcat#</td>
			</cfloop>
		</tr>
		</cfoutput>
	</table>
<div id="BarContainer1" class="HC_Bar DataTableBefore" style="height: 500px; width: 600px; display: inline-block"></div>
</div>








