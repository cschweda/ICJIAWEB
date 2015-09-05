<div id="cohort_demographics" class="panel"><!--The demographic results div. Numeric tabular values start at zero until the AJAX call data replaces them-->
	<h2 class="ResultsHeader">Cohort Demographics</h2>
	<p class="CohortDescription"></p>
	<div id="div_table_demographics" class="LeftColumn">
	<table id="table_demographics">
		<thead>
		<tr>
			<th>Demographic grouping</th>
			<th>Frequency</th>
			<th>Percent</th>
		</tr>
		</thead>
		<tbody>
		<!--Total events (admits or exits) in the cohort-->
		<tr id="Demo_TotalEvents">
			<td id="total_events_desc"><!--Have AJAX call populate this--></td>
			<td class="NumericData" id="CJ_Event_Total">0</td>
			<td class="NumericData">100.00%</td>	
		</tr>
		<tr id="Demo_total_match_SID">
			<td>Total matched to ISP database</td>
			<td id="Demo_N_SID" class="NumericData Demo_N">0</td>
			<td id="Demo_P_SID" class="NumericData Demo_P">0.00%</td>
		</tr>
		<!--Sex demographics rows-->
		<tr>
			<td class="GroupTitle" colspan="3">Sex</td>
		</tr>
		<tr class="Demo_Sex">
			<td class="Demo_Group">Male</td>
			<td id="Demo_N_male" class="NumericData Demo_N">0</td>
			<td id="Demo_P_male" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_Sex">
			<td class="Demo_Group">Female</td>
			<td id="Demo_N_female" class="NumericData Demo_N">0</td>
			<td id="Demo_P_female" class="NumericData Demo_P">0.00%</td>
		</tr>
		<!--Race ethnicity demographics rows-->
		<tr>
			<td class="GroupTitle" colspan="3">Race/ethnicity</td>
		</tr>
		<tr class="Demo_Race">
			<td class="Demo_Group">White</td>
			<td id="Demo_N_white" class="NumericData Demo_N">0</td>
			<td id="Demo_P_white" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_Race">
			<td class="Demo_Group">Black</td>
			<td id="Demo_N_black" class="NumericData Demo_N">0</td>
			<td id="Demo_P_black" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_Race">
			<td class="Demo_Group">Hispanic</td>
			<td id="Demo_N_hispanic" class="NumericData Demo_N">0</td>
			<td id="Demo_P_hispanic" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_Race">
			<td class="Demo_Group">Other/unknown</td>
			<td id="Demo_N_RaceOthUnk" class="NumericData Demo_N">0</td>
			<td id="Demo_P_RaceOthUnk" class="NumericData Demo_P">0.00%</td>
		</tr>
		<!--Offense type demographics rows-->
		<tr>
			<td class="GroupTitle" colspan="3">Admitting offense type </td>
		</tr>
		<tr class="Demo_OffenseType">
			<td class="Demo_Group">Person</td>
			<td id="Demo_N_person" class="NumericData Demo_N">0</td>
			<td id="Demo_P_person" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseType">
			<td class="Demo_Group">Property</td>
			<td id="Demo_N_property" class="NumericData Demo_N">0</td>
			<td id="Demo_P_property" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseType">
			<td class="Demo_Group">Drug</td>
			<td id="Demo_N_drug" class="NumericData Demo_N">0</td>
			<td id="Demo_P_drug" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseType">
			<td class="Demo_Group">Violent sex</td>
			<td id="Demo_N_ViolSex" class="NumericData Demo_N">0</td>
			<td id="Demo_P_ViolSex" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseType">
			<td class="Demo_Group">Other</td>
			<td id="Demo_N_OfftypeOthUnk" class="NumericData Demo_N">0</td>
			<td id="Demo_P_offtypeOthUnk" class="NumericData Demo_P">0.00%</td>
		</tr>
		<!--Offense class demographics rows-->
		<tr>
			<td class="GroupTitle" colspan="3">Admitting offense class </td>
		</tr>
		<tr class="Demo_OffenseClass">
			<td class="Demo_Group">Class M and X</td>
			<td id="Demo_N_ClassMX" class="NumericData Demo_N">0</td>
			<td id="Demo_P_ClassMX" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseClass">
			<td class="Demo_Group">Class 1 and 2</td>
			<td id="Demo_N_Class12" class="NumericData Demo_N">0</td>
			<td id="Demo_P_Class12" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseClass">
			<td class="Demo_Group">Class 3 and 4</td>
			<td id="Demo_N_Class34" class="NumericData Demo_N">0</td>
			<td id="Demo_P_Class34" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseClass">
			<td class="Demo_Group">Misdemeanor</td>
			<td id="Demo_N_ClassMisd" class="NumericData Demo_N">0</td>
			<td id="Demo_P_ClassMisd" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_OffenseClass">
			<td class="Demo_Group">Other/unknown</td>
			<td id="Demo_N_ClassOthU" class="NumericData Demo_N">0</td>
			<td id="Demo_P_ClassOthU" class="NumericData Demo_P">0.00%</td>
		</tr>
		<!--Violent vs nonviolent offense demographics rows-->
		<tr>
			<td class="GroupTitle" colspan="3">Violent/non-violent offense </td>
		</tr>
		<tr class="Demo_Violent">
			<td class="Demo_Group">Violent</td>
			<td id="Demo_N_Viol" class="NumericData Demo_N">0</td>
			<td id="Demo_P_Viol" class="NumericData Demo_P">0.00%</td>
		</tr>
		<tr class="Demo_Violent">
			<td class="Demo_Group">Non-violent</td>
			<td id="Demo_N_NonViol" class="NumericData Demo_N">0</td>
			<td id="Demo_P_NonViol" class="NumericData Demo_P">0.00%</td>
		</tr>
		
		<!--Average age row-->
		<tr id="avg_age_row">
			<td id="Demo_GrpAge" colspan="2"><!--determine with JS--></td>
			<td id="Demo_AvgAge" class="NumericData Demo_Avg">0</td>
		</tr>
		</tbody>
	</table>
	</div>
	<div id="DemographicsChartsDiv"> 
 	   <div id="DemographicsChartContainer"></div>
	  	 <div id="DemographicsChartControlArea">
			<p>Demographics Chart Control: <br>  
	            <input type="radio" name="DemographicsChartControl" class="DemographicsChartControl" id="rd_Demo_Sex" checked="checked" value="Demo_Sex" >
				<label for="rd_Demo_Sex">Sex</label><br>
	            <input type="radio" name="DemographicsChartControl" class="DemographicsChartControl" id="rd_Demo_Race" value="Demo_Race" >
				<label for="rd_Demo_Race">Race/Ethnicity</label><br>
				<input type="radio" name="DemographicsChartControl" class="DemographicsChartControl" id="rd_Demo_OffenseType " value="Demo_OffenseType" >
				<label for="rd_Demo_OffenseType">Admitting offense type</label><br>
				<input type="radio" name="DemographicsChartControl" class="DemographicsChartControl" id="rd_Demo_OffenseClass" value="Demo_OffenseClass">
				<label for="rd_Demo_OffenseClass">Admitting offense class</label><br>
				<input type="radio" name="DemographicsChartControl" class="DemographicsChartControl" id="rd_Demo_Violent" value="Demo_Violent">
				<label for="rd_Demo_Violent">Violent/non-violent offense</label>
			</p>
			</div>	
		</div>	
		<div class="clear"></div>
</div>
