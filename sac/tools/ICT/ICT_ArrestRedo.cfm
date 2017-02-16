<div id="cohort_arrests" class="panel"><!--The arrests results div. Numeric tabular values start at zero until the AJAX call replaces them-->
    <h2 id="ArrestPanelH2" class="ResultsHeader">Arrest statistics</h2>
	<p class="CohortDescription"></p>
	<div id="div_table_arrest" class="LeftColumn">		
		<table id="table_arrest" class="Results_Table">
				<thead>
				<tr class="CJEvents_ColumnNames">	
					<th class="TextColumn">Selected cohort grouping</th>
					<th class="TextColumn"><span class="ResultTypeFirst"></span> arrest offense type</th>
					<th>Total with any <span class="ResultType"></span> arrest</th>
					<th>Percent with any <span class="ResultType"></span> arrest</th>
					<th>Average number of <span class="ResultType"></span> arrests</th>	
				</tr>	
				</thead>
				<tbody>	
	        <!--Begin Sex grouping-->            
	            <tr class="GroupFilter_Sex FilterValue_M">    <!--Begin Male-->
	                <td class="td_filtervalue">Male</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_M">    
	                <td><div class="FilterValue_Hide">Male</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_M">    
	                <td><div class="FilterValue_Hide">Male</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_M">    
	                <td><div class="FilterValue_Hide">Male</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_M">    
	                <td><div class="FilterValue_Hide">Male</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_M">    
	                <td><div class="FilterValue_Hide">Male</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    <!--Begin Female-->
	                <td class="td_filtervalue">Female</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    
	                <td><div class="FilterValue_Hide">Female</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    
	                <td><div class="FilterValue_Hide">Female</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    
	                <td><div class="FilterValue_Hide">Female</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    
	                <td><div class="FilterValue_Hide">Female</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Sex FilterValue_F">    
	                <td><div class="FilterValue_Hide">Female</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	       <!--End Sex grouping-->    
	                
	        <!--Begin Race grouping-->            
	            <tr class="GroupFilter_Race FilterValue_WHI">    <!--Begin White-->
	                <td class="td_filtervalue">White</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_WHI">    
	                <td><div class="FilterValue_Hide">White</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_WHI">    
	                <td><div class="FilterValue_Hide">White</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_WHI">    
	                <td><div class="FilterValue_Hide">White</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_WHI">    
	                <td><div class="FilterValue_Hide">White</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_WHI">    
	                <td><div class="FilterValue_Hide">White</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    <!--Begin Black-->
	                <td class="td_filtervalue">Black</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    
	                <td><div class="FilterValue_Hide">Black</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    
	                <td><div class="FilterValue_Hide">Black</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    
	                <td><div class="FilterValue_Hide">Black</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    
	                <td><div class="FilterValue_Hide">Black</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_BLK">    
	                <td><div class="FilterValue_Hide">Black</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    <!--Begin Hispanic-->
	                <td class="td_filtervalue">Hispanic</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    
	                <td><div class="FilterValue_Hide">Hispanic</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    
	                <td><div class="FilterValue_Hide">Hispanic</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    
	                <td><div class="FilterValue_Hide">Hispanic</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    
	                <td><div class="FilterValue_Hide">Hispanic</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_HSP">    
	                <td><div class="FilterValue_Hide">Hispanic</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr  class="GroupFilter_Race FilterValue_OtU">    <!--Begin Other/unknown-->
	                <td class="td_filtervalue">Other/Unknown</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_OtU">    
	                <td><div class="FilterValue_Hide">Other/Unknown</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_OtU">    
	                <td><div class="FilterValue_Hide">Other/Unknown</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_OtU">    
	                <td><div class="FilterValue_Hide">Other/Unknown</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_OtU">    
	                <td><div class="FilterValue_Hide">Other/Unknown</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Race FilterValue_OtU">    
	                <td><div class="FilterValue_Hide">Other/Unknown</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	    <!--End Race grouping-->            
	                
		<!--Begin Offense type grouping-->            
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    <!--Begin Person-->
	                <td class="td_filtervalue">Person</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    
	                <td><div class="FilterValue_Hide">Person</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    
	                <td><div class="FilterValue_Hide">Person</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    
	                <td><div class="FilterValue_Hide">Person</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    
	                <td><div class="FilterValue_Hide">Person</div></td>
	                <td>Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Person">    
	                <td><div class="FilterValue_Hide">Person</div></td>
	                <td>Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    <!--Begin Property-->
	                <td class="td_filtervalue">Property</td>
	                <td>Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    
	                <td><div class="FilterValue_Hide">Property</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    
	                <td><div class="FilterValue_Hide">Property</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    
	                <td><div class="FilterValue_Hide">Property</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    
	                <td><div class="FilterValue_Hide">Property</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Property">    
	                <td><div class="FilterValue_Hide">Property</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    <!--Begin Drug-->
	                <td class="td_filtervalue">Drug</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    
	                <td><div class="FilterValue_Hide">Drug</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    
	                <td><div class="FilterValue_Hide">Drug</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    
	                <td><div class="FilterValue_Hide">Drug</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    
	                <td><div class="FilterValue_Hide">Drug</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Drug">    
	                <td><div class="FilterValue_Hide">Drug</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    <!--Begin Sex (violent)-->
	                <td class="td_filtervalue">Sex (violent)</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    
	                <td><div class="FilterValue_Hide">Sex (violent)</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    
	                <td><div class="FilterValue_Hide">Sex (violent)</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    
	                <td><div class="FilterValue_Hide">Sex (violent)</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    
	                <td><div class="FilterValue_Hide">Sex (violent)</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_SexV">    
	                <td><div class="FilterValue_Hide">Sex (violent)</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    <!--Begin Other/Unknown)-->
	                <td class="td_filtervalue">Other</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    
	                <td><div class="FilterValue_Hide">Other</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    
	                <td><div class="FilterValue_Hide">Other</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    
	                <td><div class="FilterValue_Hide">Other</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    
	                <td><div class="FilterValue_Hide">Other</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offensetype FilterValue_Other">    
	                <td><div class="FilterValue_Hide">Other</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	       <!--End Offense type grouping-->            
	                
	        <!--Begin Offense class grouping-->            
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    <!--Begin Class MX-->
	                <td class="td_filtervalue">Class M and X</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    
	                <td><div class="FilterValue_Hide">Class M and X</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    
	                <td><div class="FilterValue_Hide">Class M and X</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    
	                <td><div class="FilterValue_Hide">Class M and X</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    
	                <td><div class="FilterValue_Hide">Class M and X</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_ClassMX">    
	                <td><div class="FilterValue_Hide">Class M and X</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    <!--Begin Class 1-2-->
	                <td class="td_filtervalue">Class 1 and 2</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    
	                <td><div class="FilterValue_Hide">Class 1 and 2</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    
	                <td><div class="FilterValue_Hide">Class 1 and 2</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    
	                <td><div class="FilterValue_Hide">Class 1 and 2</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    
	                <td><div class="FilterValue_Hide">Class 1 and 2</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class12">    
	                <td><div class="FilterValue_Hide">Class 1 and 2</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    <!--Begin Class 34-->
	                <td class="td_filtervalue">Class 3 and 4</td>
	                <td>Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    
	                <td><div class="FilterValue_Hide">Class 3 and 4</div></td>
	                <td>Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    
	                <td><div class="FilterValue_Hide">Class 3 and 4</div></td>
	                <td>Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    
	                <td><div class="FilterValue_Hide">Class 3 and 4</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    
	                <td><div class="FilterValue_Hide">Class 3 and 4</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Class34">    
	                <td><div class="FilterValue_Hide">Class 3 and 4</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    <!--Begin Misdemeanor-->
	                <td class="td_filtervalue">Misdemeanor</td>
	                <td>Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    
	                <td><div class="FilterValue_Hide">Misdemeanor</div></td>
	                <td>Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    
	                <td><div class="FilterValue_Hide">Misdemeanor</div></td>
	                <td>Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    
	                <td><div class="FilterValue_Hide">Misdemeanor</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    
	                <td><div class="FilterValue_Hide">Misdemeanor</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Offenseclass FilterValue_Misdemeanor">    
	                <td><div class="FilterValue_Hide">Misdemeanor</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	        <!--End Offense class grouping-->            
	                                
	        <!--BeginViolent grouping-->            
	            <tr class="GroupFilter_Violent FilterValue_Violent">    <!--Begin Violent-->
	                <td class="td_filtervalue">Violent</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Violent">    
	                <td><div class="FilterValue_Hide">Violent</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Violent">    
	                <td><div class="FilterValue_Hide">Violent</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Violent">    
	                <td><div class="FilterValue_Hide">Violent</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Violent">    
	                <td><div class="FilterValue_Hide">Violent</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr  class="GroupFilter_Violent FilterValue_Violent">    
	                <td><div class="FilterValue_Hide">Violent</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    <!--Begin Non-violent-->
	                <td class="td_filtervalue">Non-violent</td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    
	                <td><div class="FilterValue_Hide">Non-violent</div></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    
	                <td><div class="FilterValue_Hide">Non-violent</div></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    
	                <td><div class="FilterValue_Hide">Non-violent</div></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    
	                <td><div class="FilterValue_Hide">Non-violent</div></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Violent FilterValue_Non-violent">    
	                <td><div class="FilterValue_Hide">Non-violent</div></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>
				 <!--End Violent grouping-->
				 <!--Begin Total grouping (no filter)-->            
	            <tr class="GroupFilter_Totalevents FilterValue_Total">  
	                <td class="td_filtervalue td_NoGrouping"></td>
	                <td class="CJ_Grouping_Offtype">Any offense type*</td>            
	                <td class="CJ_Event_Total AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Total AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Total AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Totalevents FilterValue_Total">    
	                <td class="td_NoGrouping_hide"></td>
	                <td class="CJ_Grouping_Offtype">Person</td>            
	                <td class="CJ_Event_Person AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Person AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Person AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Totalevents FilterValue_Total">    
	                <td class="td_NoGrouping_hide"></td>
	                <td class="CJ_Grouping_Offtype">Property</td>            
	                <td class="CJ_Event_Property AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Property AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Property AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Totalevents FilterValue_Total">    
	                <td class="td_NoGrouping_hide"></td>
	                <td class="CJ_Grouping_Offtype">Drug</td>            
	                <td class="CJ_Event_Drug AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Drug AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Drug AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Totalevents FilterValue_Total">    
	                <td class="td_NoGrouping_hide"></td>
	                <td class="CJ_Grouping_Offtype">Sex (violent)</td>            
	                <td class="CJ_Event_SexV AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_SexV AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_SexV AvgArrest NumericData">0.00</td>
	            </tr>    
	            <tr class="GroupFilter_Totalevents FilterValue_Total">    
	                <td class="td_NoGrouping_hide"></td>
	                <td class="CJ_Grouping_Offtype">Other</td>            
	                <td class="CJ_Event_Other AnyArrest_N NumericData">0</td>
	                <td class="CJ_Event_Other AnyArrest_P NumericData">0.00%</td>
	                <td class="CJ_Event_Other AvgArrest NumericData">0.00</td>
	            </tr>    
	            
	       <!--End Total events (no filter) grouping--> 
				
				<tr class="TableNotes"><td colspan="5">If a subgroup has fewer than 10 members, arrests are masked for the chosen grouping option.<br>The number of members in each subgroup can be found in the demographics tab.<br>*Any offense type refers to having at least one person, property, drug, violent sex, or other arrest event.</td></tr>      
			</tbody>
	    </table>
 	</div>   
	<div id="ArrestChartsDiv" class="RightColumn">
    <div id="ArrestChartContainer"></div>
    <div id="ArrestChartControlArea" class="ColumnChartControlArea">
		Cohort grouping: <select id="ArrestChartSelect_FilterValue" class="ChartSelectFV"><option></option></select><br>
		Number type: <select id="ArrestChartSelect_Number" class="ChartSelectN">
			<option value="AnyArrest_N" selected="selected">Total with any arrest</option>
			<option value="AnyArrest_P">Percent with any arrest</option>						
			<option value="AvgArrest">Average number of arrests</option>
		</select>
	</div>
	</div>	
<div class="clear"></div>


     

</div>