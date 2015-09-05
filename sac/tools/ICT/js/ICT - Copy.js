function buildChartInitial(chrt_type, chrt_title,chrt_x,chrt_numPrefix,chrt_chrtID,chrt_width,chrt_height){   
	//$('#chartContainer1').empty();
	$('#ChartSelect option').remove();
	GetChartSelectOptions ();
	var CatSelected=$('#ChartSelect_FilterValue').val();
	var NSelected = $('#ChartSelect_Number').val();
	var NumSfx = "";
	if (NSelected.substring(NSelected.length,NSelected.length - 1) == "N") {
		chrtYAxTitle = "Frequency"}
		else if (NSelected.substring(NSelected.length,NSelected.length - 1) == "P") {chrtYAxTitle = "Percent"; NumSfx="%";}
			else if (NSelected.substring(0,3)=="Avg") { 
			chrtYAxTitle = "Average"};  //change the y-axis title to percent or average	
	
	
	
	var chartArrayData = [];
		$('tr.Chart_Candidate').each(function(){   //build an array for the selected filtervalue
			if($(this).find('.FilterValue_Hide, .td_filtervalue').text() == CatSelected)
			{
				var lbl = $(this).find('.CJ_Grouping_Offtype').text();
				var vlu = $(this).find("." + NSelected).text();
				var item={ 
					"label": lbl, 
					"value": vlu
			};
				chartArrayData.push(item);
			};
		});
	var createdChrtTitle =CatSelected + " - " +$('#ChartSelect_Number :selected').text() ;
	//BEGIN Create the json for the chart to be used by FusionCharts
	var chartMeta=  '{"chart":{"numbersuffix": "' + NumSfx +'", "formatnumberscale" : "0", "caption" : "' + createdChrtTitle + '" ,"xAxisName" : "' +chrt_x + '", "yAxisName" : "' + chrtYAxTitle +'","numberPrefix" : "' + chrt_numPrefix +'"},';
	var chartJSONData_prep = JSON.stringify({data: chartArrayData});
	var chartJSONData=chartMeta + chartJSONData_prep.substring(1, chartJSONData_prep.length);
	//END Create the json for the chart to be used by FusionCharts
	var myChart = new FusionCharts(chrt_type, chrt_chrtID, chrt_width, chrt_height );
	myChart.setJSONData(chartJSONData);
	myChart.render("chartContainer1")
};


function changeChartCategory() {
	var CatSelected=$('#ChartSelect_FilterValue').val();  //Get selected filter value
	var NSelected=$('#ChartSelect_Number').val(); //Get Selected number value
	//Get chart y axis title
	var NumSfx = "";
	if (NSelected.substring(NSelected.length,NSelected.length - 1) == "N") {
		chrtYAxTitle = "Frequency"}
		else if (NSelected.substring(NSelected.length,NSelected.length - 1) == "P") {chrtYAxTitle = "Percent"; NumSfx="%";}
			else if (NSelected.substring(0,3)=="Avg") { 
			chrtYAxTitle = "Average"};  //change the y-axis title to percent or average	
	var chartArrayData = [];
	$('tr.Chart_Candidate').each(function(){   //build an array for the selected filtervalue data
		if($(this).find('.FilterValue_Hide, .td_filtervalue').text() == CatSelected) {
			var lbl = $(this).find('.CJ_Grouping_Offtype').text();
			var vlu = $(this).find("." + NSelected).text();
			var item={ 
				"label": lbl, 
				"value": vlu
				};
			chartArrayData.push(item);
			};
		});	
	var chartReference = FusionCharts("FS_Arrests"); 
	//var chartJSON = chartReference.getJSONData();	
	var createdChrtTitle =CatSelected + " - " +$('#ChartSelect_Number :selected').text() ;
	var chartMeta=  '{"chart":{"numbersuffix": "' + NumSfx +'", "formatnumberscale" : "0", "caption" : "' + createdChrtTitle + '" ,"xAxisName" : "' +"Offense type" + '", "yAxisName" : "' + chrtYAxTitle +'","numberPrefix" : "' + "" +'"},';
	var chartJSONData_prep = JSON.stringify({data: chartArrayData});
	var chartJSONData=chartMeta + chartJSONData_prep.substring(1, chartJSONData_prep.length);
	//END Create the json for the chart to be used by FusionCharts
	chartReference.setJSONData(chartJSONData);
};