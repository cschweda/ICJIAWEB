

$(document).ready(function() {  //BEGIN DOCUMENT READY
//BEGIN initial form values to disable some option
	$('#OutTypeTime_Recid').prop('disabled',true); //available when exits or probation selected
	$('#ThreeYearRecid').prop('disabled',true);  //available when exits or probation selected


	//BEGIN form validation click handler checks
	$('input[name=CJType]').change(function(){
		if ($('#CJType_IDOCAdmits').prop('checked')) {
			$('#OutTypeTime_Crimhist').prop('checked',true);
			$('#OutTypeTime_Recid').prop('checked',false).prop('disabled',true);
			$('#ThreeYearRecid').prop('checked',false).prop('disabled',true);
			$('#IDOCAdmType_TV').prop('disabled',false);
			$('#WarningRecid').remove();
		}
		if ($('#CJType_IDOCExits').prop('checked')) {
			$('#OutTypeTime_Recid').prop('disabled',false);
			$('#IDOCAdmType_TV').prop('disabled',false);
			$('#WarningRecid').remove();
			$('#CohortYearSelect').append('<span id="WarningRecid" style="color:red;"><b> Note: If you are interested in three year recidivism outcomes, not all cohorts will have the full three years to recidivate due to the data ending in June of 2013. Therefore, the latest cohorts you should select for three year recidivism outcomes are the <u>2008-2010 cohorts for IDOC exits</u> and the <u>2007-2009 cohorts for probationers</u>.</b></span>');
		}
		if ($('#CJType_ProbSent').prop('checked')) {
			$('#OutTypeTime_Recid').prop('disabled',false);
			$('#IDOCAdmType_New').prop('checked',true);
			$('#IDOCAdmType_TV').prop('disabled',true);
			$('#WarningRecid').remove();
			$('#CohortYearSelect').append('<span id="WarningRecid" style="color:red;"><b> Note: If you are interested in three year recidivism outcomes, not all cohorts will have the full three years to recidivate due to the data ending in June of 2013. Therefore, the latest cohorts you should select for three year recidivism outcomes are the <u>2008-2010 cohorts for IDOC exits</u> and the <u>2007-2009 cohorts for probationers</u>.</b></span>');
		}
	});

	$('input[name=OutTypePeriod]').change(function(){
		if($('#OutTypeTime_Recid').prop('checked')) {
			$('#ThreeYearRecid').prop('checked',false).prop('disabled',false);
		}
		else {
		$('#ThreeYearRecid').attr('checked',false).attr('disabled',true);
		}
	});

	$('#GroupFilter, input[name=CJType]').change(function(){
		if($('#GroupFilter').val() == "Race" && $('#CJType_ProbSent').attr('checked')) {
			$('#CohortGroupAlert').html('-note: Hispanic not available for probation sentenced population. See "About" tab for more information.');
		}
		else{
			$('#CohortGroupAlert').text("");
		}
	});
	
	//END form validation click handler checks

	


  $('#getData').click(function() {  //BEGIN AJAX CALL TO GET DATA	   
	var cfcName = 'getCohortData';
	if ($('#ThreeYearRecid').attr('checked')) {
		var cfcName = cfcName + '3Yrs' +'.cfc';
		}
	else {
		var cfcName = cfcName +'.cfc';
	};
	
	$('#getData').attr("disabled", true);
		$('#ToolStatus').html("Retrieving data....");
		$.getJSON(cfcName,{
     	method: 'GetCJdata', 
			OutTypePeriod: $('input[name=OutTypePeriod]:checked').val(),
			Cohort: $('#CohortYearStart').val(), 
			CountyFIPS: $('#County').val(), 
			CJType: $('input[name=CJType]:checked').val() ,
			GroupFilter: $('#GroupFilter').val(),
			AdmitType:	$('input[name=AdmitType]:checked').val(),	
			returnformat:'json'},
  	  function(data) {				// begin function to handle data returned from cfc
				data = queryToObject(data);			//converts CF-JSON into standard JSON
				resetTables();			//resets table values to zero
				populateDataTables(data);				//copies data over to tables
				$('.tabs a').css("background-color","rgb(110,138,195)")
							.css("color","white");				//styles tabs to appear active
				$('#ToolStatus').html("Retrieving data....Complete. Choose a tab above or change your cohort selection.");			//output message stating the data are ready
				$('#getData').attr("disabled", false);   //enables submit button
				//BEGIN write cohort description 
				var AE = $('input[name=CJType]:checked + label').text();		//Admit or exit
				var AT = $('input[name=AdmitType]:checked + label').text();		//admission type
				var CH = parseInt($('#CohortYearStart').val());			//Cohort start year
				var CH = CH + "-" + (CH+2);			//add a hyphen and 2 to the cohort (cohorts stored in database by first year)
				var county = $('#County').find(":selected").text();   //county
				var outType = $('input[name=OutTypePeriod]:checked + label').text();  //output type (recid or crim hist)
				$('.CohortDescription').html("Criminal Justice Population Type: " + AE +"<br>Cohort Admission Type: " + AT+ "<br>Cohort Years: " + CH + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  County/State: " + county +"<br>");			//writes some descriptive terms about the current selection
				$('#cohort_arrests p.CohortDescription, #cohort_convictions p.CohortDescription,#cohort_probation p.CohortDescription').append('<br><i>Percentages and averages in the table and chart below are calculated using the number of people matched to the Illinois State Police Database in the denominator, which is not necessarily equal to the number of people in the cohort or cohort grouping on the demographics tab. The number or people matched between the two data sources is available in the "selected cohort grouping" column below.</i>'); //add divisor disclaimer
				if ($('input[name=OutTypePeriod]:checked').val()==101) {
					$('#ArrestPanelH2').html("Arrest Statistics - Criminal History");
					$('#ConvictionPanelH2').html("Conviction Statistics - Criminal History");
					$('#PrisonPanelH2').html("Prison Statistics - Criminal History");
					$('#ProbationPanelH2').html("Probation Statistics - Criminal History");
					$('.ResultTypeFirst').text("Prior");
					$('.ResultType').text("prior");
				} else if ($('input[name=OutTypePeriod]:checked').val()==201) {
					$('.ResultType').text("recidivism");
					$('.ResultTypeFirst').text("Recidivism");
					if($('#ThreeYearRecid').attr('checked')) {
						if ($('input[name=CJType]:checked').val()=='E') {
							$('#ArrestPanelH2').html("Arrest Statistics - Recidivism up to three years after exit");
							$('#ConvictionPanelH2').html("Conviction Statistics - Recidivism up to three years after exit");
							$('#PrisonPanelH2').html("Prison Statistics - Recidivism up to three years after exit");
							$('#ProbationPanelH2').html("Probation Statistics - Recidivism up to three years after exit");
							}
						else {
							$('#ArrestPanelH2').html("Arrest Statistics - Recidivism up to three years after probation sentence date");
							$('#ConvictionPanelH2').html("Conviction Statistics - Recidivism up to three years after probation sentence date");
							$('#PrisonPanelH2').html("Prison Statistics - Recidivism up to three years after probation sentence date");
							$('#ProbationPanelH2').html("Probation Statistics - Recidivism up to three years after probation sentence date");
						}
					}
					else {
						$('#ArrestPanelH2').html("Arrest Statistics - Recidivism through June, 2013");
						$('#ConvictionPanelH2').html("Conviction Statistics - Recidivism through June, 2013");
						$('#PrisonPanelH2').html("Prison Statistics - Recidivism through June, 2013");
						$('#ProbationPanelH2').html("Probation Statistics - Recidivism through June, 2013");
					}
				};  //writes more descriptive terms for the current selection
				//END write cohort description
			});
	
		//Reassign the click handler, see version outside of this function for comments
		$('.tabs a').unbind('click');
		$('.tabs a').click(function() {
		var $this = $(this);
		$('.panel').hide();
		$('.tabs a.active').removeClass('active');
		$this.addClass('active').blur();	
		var panel = $this.attr('href');
		$(panel).fadeIn(150);
		$('html, body').animate({
			scrollTop: $(panel).position().top-35
		},0);
		return(false);
		}); // end Reassign click
		$('.ResultsTab').css("display","block");
  });  //END getdata click handler

	//add handlers for chart controls
	$('#ArrestChartSelect_FilterValue, #ArrestChartSelect_Number, #ConvictionChartSelect_FilterValue, #ConvictionChartSelect_Number, #PrisonChartSelect_FilterValue, #PrisonChartSelect_Number, #ProbationChartSelect_FilterValue, #ProbationChartSelect_Number').change(function(){ 
		changeCJEventChartCategory(this.id);
	});

	$('.DemographicsChartControl').change(function(){
		changeDemographicsPieChart($(this).val());
	});


	//handler for tab clicking
	$('.tabs a').click(function() {
		// save $(this) in a variable for efficiency
		var $this = $(this);
		// hide panels
		$('.panel').hide();
		$('.tabs a.active').removeClass('active');
		// add active state to new tab
		$this.addClass('active').blur();	
		// retrieve href from link (id of panel to display)
		var panel = $this.attr('href');
		// show panel
		$(panel).fadeIn(150);
		$('html, body').animate({
			scrollTop: $(panel).position().top-35
		},0);
		return(false);
	}); // end tabs click handler
	 

	 

	$('.tabs li:first a').click(); 	// open first tab
	$('.tabs .TabLink_O').unbind("click");  //deactivate results tabs until AJAX call
	$("#accordion").accordion({    //accordian settings for the About tab
		active: false,
		autoHeight: false,
    clearStyle: true
	});
	$('html').scrollTop();

	
	
});  //END DOCUMENT READY




/*
queryToObject function...copied from http://blog.tcs.de/coldfusion-query-to-javascript-object/
Transforms the CF JSON to the standard JSON
*/
var queryToObject = function(q) {
	var col, i, r, _i, _len, _ref, _ref2, _results;
  _results = [];
  for (i = 0, _ref = q.ROWCOUNT; 0 <= _ref ? i < _ref : i > _ref; 0 <= _ref ? i++ : i--) {
		r = {};
    _ref2 = q.COLUMNS;
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
     	col = _ref2[_i];
     	r[col.toLowerCase()] = q.DATA[col][i];
		}
    _results.push(r);
  }
  return _results;
};  //END queryToObject




//function to caclulate percentages for table to two decimal places
function calcPercents(PctClass,DenomID) {   //two arguments for selectors for the numerator and denominaotr
	$("." + PctClass).each(function(){
		var numerator = parseInt($(this).prev('td').text());  //class of table cells with numerator data
		var denominator = parseInt($("#" + DenomID).text());  //id of denominator cell
		if (denominator == 0 || isNaN(numerator))   {   //Use string NA if divide by zero
			$(this).text("NA");
		} else {
			var pct = (100 * numerator / denominator).toFixed(2);
			$(this).text(pct+ "%");
			}
		});
	//return false;
};	

//function to calculate a percent based on the number matched to the State police database
function pctBasedOnMatchedSID(numerator,denominator) {
	var outcome ="";
	if (denominator == 0 || isNaN(denominator) || isNaN(numerator)) {   //Use string NA if divide by zero or NaN
		outcome="NA";
	} else {
	outcome= (100 * numerator / denominator).toFixed(2);
	outcome=(outcome + "%");
	};
			
		return outcome;
};

//Function to append the selected group filter values to the chart control
function GetChartSelectOptions (Control_ClassOrID){
		if(Control_ClassOrID="#GroupFilter") {  //BEGIN IF #GroupFilter is parameter
		switch ($(Control_ClassOrID).val())  //BEGIN Switch to create chart grouping select input....can I create this using SelectedGroup class?
		{
			case "Total events":
				var EventType = $('input[name=CJType]:checked').val();
				if (EventType == "A") {
					var chartControlOptions = {"Total admissions":"Total admissions"} }
				else if (EventType == "E") {var chartControlOptions = { "Total exits":"Total exits"}}
				else if (EventType == "P") {var chartControlOptions = {"Probation sentenced" : "Probation sentenced"}};
				break;
			case "Race":
				var chartControlOptions = {
				"White" : "White",
				"Black" : "Black",
				"Hispanic" : "Hispanic",
				"Other/Unknown" : "Other/Unknown"
				};
				break;
			case "Sex":			
				var chartControlOptions = {
				"Male" : "Male",
				"Female" : "Female"
				};
				break;
			case "Offense type":
				var chartControlOptions = {
				"Person" : "Person",
				"Property" : "Property",
				"Drug" : "Drug",
				"Sex (violent)" : "Sex (violent)",
				"Other" : "Other"
				};
				break;
			case "Offense class":
				var chartControlOptions = {
				"Class M and X" : "Class M and X",
				"Class 1 and 2" : "Class 1 and 2",
				"Class 3 and 4" : "Class 3 and 4",
				"Misdemeanor" : "Misdemeanor"
				};
				break;
			case "Violent":
				var chartControlOptions = {
				"Violent" : "Violent",
				"Non-violent" : "Non-violent"
				};
		}	;  //END Switch to create chart grouping select input		

		$.each(chartControlOptions, function (val,text) {
			if(Control_ClassOrID="#GroupFilter") {
				$('.ChartSelectFV').append("<option value='" + val + "'>" + text + "</option>");  //WORKS IN IE8
			};
		});

	}; //END IF #GroupFilter or .DemographicsChartControl is parameter

};

function getChartGroupingByOfftype(cat) {  //Get group filter value for chart manipulation
	var CatSelected=$('#' + cat +'ChartSelect_FilterValue').val();
	return CatSelected;
};

function getChartNumberType(cat) {   //Get type of number (anyN,percent, average) for the chart
	var NSelected = $('#' + cat +'ChartSelect_Number').val();
	return NSelected;
};

function getYAxisValueLabel(NSelected){   //not working
	if (NSelected.substring(NSelected.length,NSelected.length - 1) == "N") {
	chrtYAxTitle = "Frequency"}
		else if (NSelected.substring(NSelected.length,NSelected.length - 1) == "P") {chrtYAxTitle = "Percent";}
			else if (NSelected.substring(0,3)=="Avg") { 
			chrtYAxTitle = "Average"};  //change the y-axis title to percent or average
	return (chrtYAxTitle)
};


function getNumSfx(NSelected) {  //returns empty string unless the number type is percent
	var NumSfx = "";
	if(NSelected.substring(NSelected.length,NSelected.length - 1) == "P") NumSfx="%";
	return NumSfx;
};


function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildArrayFromChartCandidates(CatSelected,NSelected) {
	var chartArrayData = [];
		$('tr.Chart_Candidate').each(function(){   //build an array for the selected filtervalue
			if($(this).find('.FilterValue_Hide, .td_filtervalue .TextFilterValue').text() == CatSelected)
			{
				//ADD IN SOMETHING TO GET THE CJ TYPE
				var CJEventPrep = $(this).closest("table").attr("id");
				var CJEvent = CJEventPrep.substring(6);
				var CJEventCap=capitaliseFirstLetter(CJEvent);
				var lbl = $(this).find('.CJ_Grouping_Offtype').text();
				//BEGIN value finder based on the CJEvent and the initial NSelected
				var vlu="";
				var NSelectedSuffix = NSelected.substring(NSelected.length-2,NSelected.length);
				if (NSelectedSuffix=="_N") vlu = $(this).find(".Any" +CJEventCap+"_N").text()
				else if (NSelectedSuffix=="_P") vlu = $(this).find(".Any" +CJEventCap+"_P").text()
				else vlu=$(this).find(".Avg"+CJEventCap).text();
				//END value finder
				var item={ 
					"CJEvent" : CJEvent,
					"label": lbl, 
					"value": vlu
			};
				chartArrayData.push(item);
			};
		});
	return chartArrayData;
};


function changeDemographicsPieChart(controlValue) {
	if ( FusionCharts( "FS_Demographics" ) ) { 
		FusionCharts( "FS_Demographics" ).dispose();
	};   
	var CaptionTitle = $('input[name=DemographicsChartControl]:checked + label').text(); ;
	//build array from table data
	DemoArray=[];
	var DemoRows = $('#table_demographics tr');
	DemoRows.each(function(){
		if ($(this).hasClass(controlValue)) {
			
			key=$(this).children('td.Demo_Group').text()
			key = key.replace("/"," / ");
			value= $(this).children('td.Demo_N').text();
			var item={ 
				"value" : value ,
				"label" : key				
			};
			DemoArray.push(item);
		};
	});
	
	var chartMeta = '{ "chart":{"showvalues":"1","caption":"' + CaptionTitle+ '","numberprefix":"","showlegend":"1","enablesmartlabels":"0","showlabels":"0","showpercentvalues":"1"},';
	var chartJSONData_prep = JSON.stringify({data: DemoArray});
	var chartJSONData=chartMeta + chartJSONData_prep.substring(1, chartJSONData_prep.length);
	var NewChartID = "FS_Demographics";
	var myChart = new FusionCharts("Pie2D",NewChartID , 300, 300 );
	myChart.setJSONData(chartJSONData);
		myChart.render(DemographicsChartContainer);	
};	
//based on selected demographic type, drop/create pie chart




function buildCJEventChartInitial(chrt_type, chrt_title,chrt_x,chrt_numPrefix,chrt_width,chrt_height){/*Reset the chart controls*/		   
	$('.ChartSelectFV option').remove(); 
	GetChartSelectOptions('#GroupFilter');
	var initialCatSelected = $('#ArrestChartSelect_FilterValue').val(); //arbitrary
	var initialNSelected = 	$('#ArrestChartSelect_Number').val(); //arbitrary
	chartArrayData=buildArrayFromChartCandidates(initialCatSelected,initialNSelected);
	var ResultTypes = ["Arrest", "Conviction", "Prison", "Probation"];
	var ArrestArray = [];
	var ConvictionArray = [];
	var PrisonArray=[];
	var ProbationArray=[];
	$.each(chartArrayData,function(i,item){
		if (item.CJEvent =="arrest") {
			ArrestArray.push(item);
		}
		else if (item.CJEvent =="conviction") {
			ConvictionArray.push(item);
		} 
		else if (item.CJEvent =="prison") {
			PrisonArray.push(item);
		}
		else if (item.CJEvent =="probation") {
			ProbationArray.push(item);
		};	
	});
	$.each(ResultTypes, function (index,resultType){  //BEGIN build initial chart for each Result Type
		CatSelected = getChartGroupingByOfftype(resultType);
		NSelected = getChartNumberType(resultType);
		var NumSfx = getNumSfx(NSelected);
		var ChartSelectNumInput = "#" + resultType + "ChartSelect_Number :selected"; 
		var createdChrtTitle =CatSelected + " - " +$(ChartSelectNumInput).text() ;
		chrtYAxTitle = getYAxisValueLabel(NSelected);
		//BEGIN Create the json for the chart to be used by FusionCharts
		var chartMeta=  '{"chart":{"numbersuffix": "' + NumSfx +'", "formatnumberscale" : "0", "caption" : "' + createdChrtTitle + '" ,"xAxisName" : "' +chrt_x + '", "yAxisName" : "' + chrtYAxTitle +'","numberPrefix" : "' + chrt_numPrefix +'"},';
		var arrayName = eval(resultType + "Array");
		var chartJSONData_prep = JSON.stringify({data: arrayName});
		var chartJSONData=chartMeta + chartJSONData_prep.substring(1, chartJSONData_prep.length);
		//END Create the json for the chart to be used by FusionCharts
		var NewChartID = "FS_"+resultType
		var myChart = new FusionCharts(chrt_type,NewChartID , chrt_width, chrt_height );
		myChart.setJSONData(chartJSONData);
		var RenderDiv = ""+resultType + "ChartContainer";
		myChart.render(RenderDiv);	
	});  //END build initial chart for each Result Type

};


function changeCJEventChartCategory(id) {   //also used to initialize
	$('#rd_Demo_Sex').attr('checked',true);   //reset the demographics chart control
	
	var resultType = id.substr(0,id.indexOf("Chart"));
	var CatSelected=getChartGroupingByOfftype(resultType);	//Get selected filter value
	var NSelected=getChartNumberType(resultType); //Get Selected number value
	//Get chart y axis title
	var NumSfx = getNumSfx(NSelected);
	var chrtYAxTitle = getYAxisValueLabel(NSelected);
	var chartArrayData=buildArrayFromChartCandidates(CatSelected,NSelected);

	//Create update array from  chartDataArray
	var UpdateArray=[];
	
	$.each(chartArrayData,function(i,item){
		
		if (capitaliseFirstLetter(item.CJEvent) ==resultType) UpdateArray.push(item);	
	});

	var ChartRefString = "FS_" + resultType;
	var chartReference = FusionCharts(ChartRefString); 
	//var chartJSON = chartReference.getJSONData();	
	var createdChrtTitle =CatSelected + " - " +$("#" +resultType +"ChartSelect_Number :selected").text() ;
	
	var chartMeta=  '{"chart":{"numbersuffix": "' + NumSfx +'", "formatnumberscale" : "0","caption" : "' + createdChrtTitle + '" ,"xAxisName" : "' +"Offense type" + '", "yAxisName" : "' + chrtYAxTitle +'","numberPrefix" : "' + "" +'"},';
	var chartJSONData_prep = JSON.stringify({data: UpdateArray}); 
	var chartJSONData=chartMeta + chartJSONData_prep.substring(1, chartJSONData_prep.length);
	//END Create the json for the chart to be used by FusionCharts
	chartReference.setJSONData(chartJSONData);
};


//Function to reset the data tables to 0s. Everything starts at zero to avoid taking up space in the database.
function resetTables() {
	$('.Demo_Avg, .Demo_N, .AnyArrest_N, .AnyConviction_N, .AnyPrison_N, .AnyProbation_N').text("0");
	$('.Demo_P, .AnyArrest_P, .AnyConviction_P, .AnyPrison_P, .AnyProbation_P').text("0.00%");
	$('.AvgArrest, .AvgConviction, .AvgPrison, .AvgProbation').text("0.00");
}

//function to populate the 5 data tables (demographics and four criminal justice events)
//all table rows visibility and candidacy for being charted are handled by their class		 
function populateDataTables(data) {
  $('tr.Chart_Candidate').removeClass("Chart_Candidate");  //remove chart candidate class
  $('.ChartSelectFV').empty();    //empty the filter value select input
  
	var EventType = $('input[name=CJType]:checked').val();  //get the event (IDOC admit, exit, prob)
	var SelectedFilter = ("GroupFilter_" + $('#GroupFilter').val()).replace(/\s+/g, ''); //creates a string GroupFilter_selection
	//remove the present table rows and return only the demographics and the selected and column names
	$('#table_demographics').css("display","table");
	$('.Results_Table tr').css("display","none"); 
	$('.Results_Table .CJEvents_ColumnNames, .TableNotes').css("display","table-row"); 
	$("."+SelectedFilter).addClass("Chart_Candidate").css("display","table-row"); 	//if the JSON is selected based on SelectedFilter_ then add a 'Chart_Candidate' class to be used in charts

	//use the radiobutton value to determine total event description and add these to table
	//the description will be added to cells with class td_NoGrouping_hide but hidden and still used by the chart
	if (EventType =='A') {
		$('#total_events_desc, .td_NoGrouping .TextFilterValue').html('Total admissions');
		$('.td_NoGrouping_hide').html('<span class="FilterValue_Hide">Total admissions</span>');
		$('#Demo_GrpAge').html('Average admission age');
		$('.FilterValue_Misdemeanor').css("display","none");
	}
		else if (EventType =='E') {
			$('#total_events_desc, .td_NoGrouping .TextFilterValue').html('Total exits');
			$('.td_NoGrouping_hide').html('<span class="FilterValue_Hide">Total exits</span>');
			$('#Demo_GrpAge').html('Average exit age');
			$('.FilterValue_Misdemeanor').css("display","none");
		}
			else if (EventType =='P') {
			$('#total_events_desc, .td_NoGrouping .TextFilterValue').html('Probation sentenced');
			$('.td_NoGrouping_hide').html('<span class="FilterValue_Hide">Probation sentenced</span>');
			$('#Demo_GrpAge').html('Average age on sentencing date');
			$('.FilterValue_ClassMX, .FilterValue_HSP').css("display","none");
			};	
			
			//END TOTAL EVENT DESC


	$.each(data,function(idx,obj){  //BEGIN returned json data manipulation

		$.each(obj, function(k,v){
			if (k=="reccat" && v=="1") {  //Begin demographics fillin, value of 1 on reccat means demographics 
				$('#'+obj.css_id_prep).html(obj.totevents);
				if (obj.css_id_prep == "CJ_Event_Total") {
					$('#Demo_N_SID').html(obj.totmatchsid);
					$('.td_NoGrouping .ResultsMatchTotal').html("<br>(" + obj.totmatchsid + " matched)");
					var SIDmatchPct = parseFloat(obj.pctmatchsid);
					SIDmatchPct = SIDmatchPct +"%";
					$('#Demo_P_SID').html(SIDmatchPct);
					if (EventType=='P') {
						$('#Demo_N_ClassMX, #Demo_N_hispanic').html("NA");
						
					};
				};
			}//End demographics fillin
			else if (k=="reccat" && v !="1") {  //Begin CJ events fillin (maybe generalize later)
				  /*
					For all td that are children of rows that have the class equal to the SelectedFilter variable,
					match on the CJ_Event_filtervalue class and the event measure(avg, percent, any)
					*/

					var CJEF = CJEventsFieldsObject();//get CJ events array

					$.each(CJEF, function (selcSubStr,field) {  //used to pull the data out of the json into the appropriate cell
						var anyEvent= eval('obj.totany' + field);
						if (field=="arrests" && anyEvent == null) {	//all arrests <10 and related are null in the db and NA replaces the null in the table
							$('.AvgArrest, .AnyArrest_N').html("NA");
							$('.AnyArrest_P').html("NA");
						} else {
							var avgEvent = eval('obj.avgnum' + field);
							$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .Any' + selcSubStr + '_N.CJ_Event_' + obj.eventcatindic).html(anyEvent);  //total with any outcome[i]
							$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .Avg' + selcSubStr + '.CJ_Event_' + obj.eventcatindic).html(avgEvent); 	//average outcome[i]
						};
						
						var pctArrest=pctBasedOnMatchedSID(parseInt(obj.totanyarrests),parseInt(obj.totmatchsid));
						$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .AnyArrest_P.CJ_Event_' + obj.eventcatindic).html(pctArrest);  //percent with any arrest

						var pctConv=pctBasedOnMatchedSID(parseInt(obj.totanyconv),parseInt(obj.totmatchsid));
						$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .AnyConviction_P.CJ_Event_' + obj.eventcatindic).html(pctConv);  //percent with any conviction
						
						var pctPrison=pctBasedOnMatchedSID(parseInt(obj.totanyprison),parseInt(obj.totevents));
						$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .AnyPrison_P.CJ_Event_' + obj.eventcatindic).html(pctPrison);  //percent with any prison
						
						var pctProbation=pctBasedOnMatchedSID(parseInt(obj.totanyprob),parseInt(obj.totmatchsid));
						$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' > .AnyProbation_P.CJ_Event_' + obj.eventcatindic).html(pctProbation);  //percent with any probation
						
						//BEGIN SID MATCH
						$('.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' .ResultsMatchTotal').html("<br>(" + obj.totmatchsid + " matched)");  
						$('#table_prison ' + '.' + SelectedFilter + '.FilterValue_'+obj.filtervalue + ' .ResultsMatchTotal').html("<br>(" + obj.totevents + " matched)");    //Have IDOC results have the correct match number 
						//END SID MATCH
						
					});

					$('.FilterValue_Hide').hide();  //hide each FilterValue_Hide table cell. These are cells not chosen to be shown by the group filter		
			};	//End CJ Events fillin
		});	//END object within JSON manipulation
	});  //END returned JSON Data  manipulation
	calcPercents('Demo_P','CJ_Event_Total');  //adds percentages to the demographics table

	
	if ( FusionCharts( "FS_Arrest" ) ) {  //BEGIN remove the existing fusion charts and build new
		FusionCharts( "FS_Arrest" ).dispose();
		FusionCharts( "FS_Conviction" ).dispose();
		FusionCharts( "FS_Prison" ).dispose();
		FusionCharts( "FS_Probation" ).dispose();
	};
	buildCJEventChartInitial("Column2D","fake title","Offense type", "",550,300);
	
	$('#rd_Demo_Sex').prop('checked',true);//reset demographics radio to sex
	
	changeDemographicsPieChart($(".DemographicsChartControl").val());

	};  //END remove the existing fusion charts and build new
	
		
	function CJEventsFieldsObject() {  //Function returns an object of events and fields (fields are database field names returned through the JSON
		var CJEventsFields = {
			"Arrest" : "arrests",
			"Conviction" : "conv",
			"Prison" : "prison",
			"Probation" : "prob"
		};
		return CJEventsFields;
	}



	
	