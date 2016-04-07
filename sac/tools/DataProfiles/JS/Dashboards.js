 


$(document).ready(function() {
	//set select box value for geography to previously selected if it exists
	var ICJIANumber = parseInt($('#HiddenICJIANumber').text());
	try{
		$('#CountySelector option[value="' + ICJIANumber + '"]').attr("selected", "selected");
	}
	catch(e){
	}
	
	
	//form validation
	$('#ProfileSelector').submit(function (e) {
		console.log('Submit event fired');
		$('#ToolStatus').text("");
		RequestOk=0;
		if (!$('.required').is(':checked')) {
			//verify that at least one profile checkbox is checked
			e.preventDefault();
			$('#ToolStatus').text("Select at least one checkbox above.");
			}
		else if($('select#CountySelector').val()==0) {
			e.preventDefault();
			$('#ToolStatus').text("Select a county, circuit, or state in the select box.");
			}
		else if($('select#CountySelector').val() <103 && $('#ProfileCheck10').is(':checked')){
			//don't allow CHRI requests for county level
			$('#ToolStatus').text("CHRI Arrests are available at the circuit and statewide only.");
			$('#ProfileCheck10').prop('checked', false);
			}
		else{
				RequestOk=1;
			};	
		
		
	});    



/*
	function AddColorJson(value,jsonObj) {    //function to alter map json based on click or select value
		for (var i=0; i<jsonObj.data.length; i++) {
			jsonObj.data[i].color = '#99ccff';
			if (jsonObj.data[i].value == ICJIANumber) {
				jsonObj.data[i].color = '#ff9900';	
				
			};
								
		};
	};
		*/
	function DrawFSmap(ICJIANumber) {
		var mapJSON =  [{"value":"1","id": "001","circuit": "1008", "toolText" : "Adams" , "color": "#368BC1"},
						{"value":"2","id": "003","circuit": "1001", "toolText" : "Alexander" , "color": "#15317E"},
						{"value":"3","id": "005","circuit": "1003", "toolText" : "Bond" , "color": "#728FCE"},
						{"value":"4","id": "007","circuit": "1017", "toolText" : "Boone" , "color": "#0000A0"},
						{"value":"5","id": "009","circuit": "1008", "toolText" : "Brown" , "color": "#368BC1"},
						{"value":"6","id": "011","circuit": "1013", "toolText" : "Bureau" , "color": "#6495ED"},
						{"value":"7","id": "013","circuit": "1008", "toolText" : "Calhoun" , "color": "#368BC1"},
						{"value":"8","id": "015","circuit": "1015", "toolText" : "Carroll" , "color": "#B7CEEC"},
						{"value":"9","id": "017","circuit": "1008", "toolText" : "Cass" , "color": "#368BC1"},
						{"value":"10","id": "019","circuit": "1006", "toolText" : "Champaign" , "color": "#2B60DE"},
						{"value":"11","id": "021","circuit": "1004", "toolText" : "Christian" , "color": "#1589FF"},
						{"value":"12","id": "023","circuit": "1005", "toolText" : "Clark" , "color": "#87AFC7"},
						{"value":"13","id": "025","circuit": "1004", "toolText" : "Clay" , "color": "#1589FF"},
						{"value":"14","id": "027","circuit": "1004", "toolText" : "Clinton" , "color": "#1589FF"},
						{"value":"15","id": "029","circuit": "1005", "toolText" : "Coles" , "color": "#87AFC7"},
						{"value":"1088","id": "031","circuit": "1088", "toolText" : "Cook" , "color": "#659EC7"},
						{"value":"17","id": "033","circuit": "1002", "toolText" : "Crawford" , "color": "#C6DEFF"},
						{"value":"18","id": "035","circuit": "1005", "toolText" : "Cumberland" , "color": "#87AFC7"},
						{"value":"19","id": "037","circuit": "1023", "toolText" : "DeKalb" , "color": "#1569C7"},
						{"value":"20","id": "039","circuit": "1006", "toolText" : "De Witt" , "color": "#2B60DE"},
						{"value":"21","id": "041","circuit": "1006", "toolText" : "Douglas" , "color": "#2B60DE"},
						{"value":"1018","id": "043","circuit": "1018", "toolText" : "DuPage" , "color": "#56A5EC"},
						{"value":"23","id": "045","circuit": "1005", "toolText" : "Edgar" , "color": "#87AFC7"},
						{"value":"24","id": "047","circuit": "1002", "toolText" : "Edwards" , "color": "#C6DEFF"},
						{"value":"25","id": "049","circuit": "1004", "toolText" : "Effingham" , "color": "#1589FF"},
						{"value":"26","id": "051","circuit": "1004", "toolText" : "Fayette" , "color": "#1589FF"},
						{"value":"27","id": "053","circuit": "1011", "toolText" : "Ford" , "color": "#95B9C7"},
						{"value":"28","id": "055","circuit": "1002", "toolText" : "Franklin" , "color": "#C6DEFF"},
						{"value":"29","id": "057","circuit": "1009", "toolText" : "Fulton" , "color": "#82CAFF"},
						{"value":"30","id": "059","circuit": "1002", "toolText" : "Gallatin" , "color": "#C6DEFF"},
						{"value":"31","id": "061","circuit": "1007", "toolText" : "Greene" , "color": "#82CAFA"},
						{"value":"32","id": "063","circuit": "1013", "toolText" : "Grundy" , "color": "#6495ED"},
						{"value":"33","id": "065","circuit": "1002", "toolText" : "Hamilton" , "color": "#C6DEFF"},
						{"value":"34","id": "067","circuit": "1009", "toolText" : "Hancock" , "color": "#82CAFF"},
						{"value":"35","id": "069","circuit": "1002", "toolText" : "Hardin" , "color": "#C6DEFF"},
						{"value":"36","id": "071","circuit": "1009", "toolText" : "Henderson" , "color": "#82CAFF"},
						{"value":"37","id": "073","circuit": "1014", "toolText" : "Henry" , "color": "#CFECEC"},
						{"value":"38","id": "075","circuit": "1021", "toolText" : "Iroquois" , "color": "#1569C7"},
						{"value":"39","id": "077","circuit": "1001", "toolText" : "Jackson" , "color": "#15317E"},
						{"value":"40","id": "079","circuit": "1004", "toolText" : "Jasper" , "color": "#1589FF"},
						{"value":"41","id": "081","circuit": "1002", "toolText" : "Jefferson" , "color": "#C6DEFF"},
						{"value":"42","id": "083","circuit": "1007", "toolText" : "Jersey" , "color": "#82CAFA"},
						{"value":"43","id": "085","circuit": "1015", "toolText" : "Jo Daviess" , "color": "#B7CEEC"},
						{"value":"44","id": "087","circuit": "1001", "toolText" : "Johnson" , "color": "#15317E"},
						{"value":"1016","id": "089","circuit": "1016", "toolText" : "Kane" , "color": "#151B8D"},
						{"value":"46","id": "091","circuit": "1021", "toolText" : "Kankakee" , "color": "#1569C7"},
						{"value":"47","id": "093","circuit": "1023", "toolText" : "Kendall" , "color": "#1569C7"},
						{"value":"48","id": "095","circuit": "1009", "toolText" : "Knox" , "color": "#82CAFF"},
						{"value":"1019","id": "097","circuit": "1019", "toolText" : "Lake" , "color": "#736AFF"},
						{"value":"50","id": "099","circuit": "1013", "toolText" : "LaSalle" , "color": "#6495ED"},
						{"value":"51","id": "101","circuit": "1002", "toolText" : "Lawrence" , "color": "#C6DEFF"},
						{"value":"52","id": "103","circuit": "1015", "toolText" : "Lee" , "color": "#B7CEEC"},
						{"value":"53","id": "105","circuit": "1011", "toolText" : "Livingston" , "color": "#95B9C7"},
						{"value":"54","id": "107","circuit": "1011", "toolText" : "Logan" , "color": "#95B9C7"},
						{"value":"55","id": "109","circuit": "1009", "toolText" : "McDonough" , "color": "#82CAFF"},
						{"value":"1022","id": "111","circuit": "1022", "toolText" : "McHenry" , "color": "#2B65EC"},
						{"value":"57","id": "113","circuit": "1011", "toolText" : "McLean" , "color": "#95B9C7"},
						{"value":"58","id": "115","circuit": "1006", "toolText" : "Macon" , "color": "#2B60DE"},
						{"value":"59","id": "117","circuit": "1007", "toolText" : "Macoupin" , "color": "#82CAFA"},
						{"value":"60","id": "119","circuit": "1003", "toolText" : "Madison" , "color": "#728FCE"},
						{"value":"61","id": "121","circuit": "1004", "toolText" : "Marion" , "color": "#1589FF"},
						{"value":"62","id": "123","circuit": "1010", "toolText" : "Marshall" , "color": "#3BB9FF"},
						{"value":"63","id": "125","circuit": "1008", "toolText" : "Mason" , "color": "#368BC1"},
						{"value":"64","id": "127","circuit": "1001", "toolText" : "Massac" , "color": "#15317E"},
						{"value":"65","id": "129","circuit": "1008", "toolText" : "Menard" , "color": "#368BC1"},
						{"value":"66","id": "131","circuit": "1014", "toolText" : "Mercer" , "color": "#CFECEC"},
						{"value":"67","id": "133","circuit": "1020", "toolText" : "Monroe" , "color": "#157DEC"},
						{"value":"68","id": "135","circuit": "1004", "toolText" : "Montgomery" , "color": "#1589FF"},
						{"value":"69","id": "137","circuit": "1007", "toolText" : "Morgan" , "color": "#82CAFA"},
						{"value":"70","id": "139","circuit": "1006", "toolText" : "Moultrie" , "color": "#2B60DE"},
						{"value":"71","id": "141","circuit": "1015", "toolText" : "Ogle" , "color": "#B7CEEC"},
						{"value":"72","id": "143","circuit": "1010", "toolText" : "Peoria" , "color": "#3BB9FF"},
						{"value":"73","id": "145","circuit": "1020", "toolText" : "Perry" , "color": "#157DEC"},
						{"value":"74","id": "147","circuit": "1006", "toolText" : "Piatt" , "color": "#2B60DE"},
						{"value":"75","id": "149","circuit": "1008", "toolText" : "Pike" , "color": "#368BC1"},
						{"value":"76","id": "151","circuit": "1001", "toolText" : "Pope" , "color": "#15317E"},
						{"value":"77","id": "153","circuit": "1001", "toolText" : "Pulaski" , "color": "#15317E"},
						{"value":"78","id": "155","circuit": "1010", "toolText" : "Putnam" , "color": "#3BB9FF"},
						{"value":"79","id": "157","circuit": "1020", "toolText" : "Randolph" , "color": "#157DEC"},
						{"value":"80","id": "159","circuit": "1002", "toolText" : "Richland" , "color": "#C6DEFF"},
						{"value":"81","id": "161","circuit": "1014", "toolText" : "Rock Island" , "color": "#CFECEC"},
						{"value":"82","id": "163","circuit": "1020", "toolText" : "St. Clair" , "color": "#157DEC"},
						{"value":"83","id": "165","circuit": "1001", "toolText" : "Saline" , "color": "#15317E"},
						{"value":"84","id": "167","circuit": "1007", "toolText" : "Sangamon" , "color": "#82CAFA"},
						{"value":"85","id": "169","circuit": "1008", "toolText" : "Schuyler" , "color": "#368BC1"},
						{"value":"86","id": "171","circuit": "1007", "toolText" : "Scott" , "color": "#82CAFA"},
						{"value":"87","id": "173","circuit": "1004", "toolText" : "Shelby" , "color": "#1589FF"},
						{"value":"88","id": "175","circuit": "1010", "toolText" : "Stark" , "color": "#3BB9FF"},
						{"value":"89","id": "177","circuit": "1015", "toolText" : "Stephenson" , "color": "#B7CEEC"},
						{"value":"90","id": "179","circuit": "1010", "toolText" : "Tazewell" , "color": "#3BB9FF"},
						{"value":"91","id": "181","circuit": "1001", "toolText" : "Union" , "color": "#15317E"},
						{"value":"92","id": "183","circuit": "1005", "toolText" : "Vermilion" , "color": "#87AFC7"},
						{"value":"93","id": "185","circuit": "1002", "toolText" : "Wabash" , "color": "#C6DEFF"},
						{"value":"94","id": "187","circuit": "1009", "toolText" : "Warren" , "color": "#82CAFF"},
						{"value":"95","id": "189","circuit": "1020", "toolText" : "Washington" , "color": "#157DEC"},
						{"value":"96","id": "191","circuit": "1002", "toolText" : "Wayne" , "color": "#C6DEFF"},
						{"value":"97","id": "193","circuit": "1002", "toolText" : "White" , "color": "#C6DEFF"},
						{"value":"98","id": "195","circuit": "1014", "toolText" : "Whiteside" , "color": "#CFECEC"},
						{"value":"1012","id": "197","circuit": "1012", "toolText" : "Will" , "color": "#6698FF"},
						{"value":"100","id": "199","circuit": "1001", "toolText" : "Williamson" , "color": "#15317E"},
						{"value":"101","id": "201","circuit": "1017", "toolText" : "Winnebago" , "color": "#0000A0"},
						{"value":"102","id": "203","circuit": "1011", "toolText" : "Woodford" , "color": "#95B9C7"}];
							
		if(ICJIANumber > 0) {
			if (ICJIANumber >999) {
				for(var i=0; i<mapJSON.length; i++) {
					if(mapJSON[i].circuit == ICJIANumber) {
					mapJSON[i].color = '#ff9900';			
					};
				};	
			} else {
				for(var i=0; i<mapJSON.length; i++) {
					if(mapJSON[i].value == ICJIANumber) {
						mapJSON[i].color = '#ff9900';
						break;					
					};	
				};		
			};
		};

			
			var countyMap = new FusionCharts({
					"type": "maps/illinois",
					"renderAt": "IllinoisCountyMap",
					"width": "500",
					"height": "750",
					"dataFormat": "json",
					"dataSource": {
						"data": mapJSON,
						"chart": {
							"showLabels": "0",
							"showCanvasBorder": "0",
							"caption": "Click a county on the map <br>(A judicial circuit or statewide can be selected using the dropdown menu above)"
						}
					},
					"events": {
						"entityClick": function(event, data) {
							ICJIANumber =data.value;
							$('#CountySelector option[value="' + ICJIANumber + '"]').attr("selected", "selected");
							$('#getProfile').click();				
						}
					}
					
			});
		countyMap.render();

	};



	$("#CountySelector").change(function() {      //change the highlighted map area based on select box
		ICJIANumber=$("option:selected",this).val();
/*		if(ICJIANumber >=1 && ICJIANumber<=102) {
			$('#ProfileCheck10').prop('checked', false)
		};*/
		$('#getProfile').click();
	});	
	
	//draw fusion charts map if possible


		

	$('h1').each(function(){
		var navMenuItem = $(this).text();
		var headingID = '#' + $(this).prop('id');	
		$('#side-nav').append('<li><a class="scrollclass" data-target="' + headingID + '">' + navMenuItem +'</a></li>');
	});
	
	$('.CHRI td:empty').text('').addClass('ReplaceWithNA');  //replace missing data null
	$('.AOIC td:empty').text('').addClass('ReplaceWithNA');
	$('.IDOC td:empty').text('').addClass('ReplaceWithZero');  //replace missing data null
	$('.ReplaceWithZero').text('0');
	
	
	
	function getSingleColumnDataIntoString(tableID,columnNum){   //BEGIN getSingleColumnDataIntoString
		var names = [];
		var values = [];	
		var pieArray = [];
		if (columnNum == 0 ) {  //get last column
			columnNum=$('#'+ tableID + ' > tbody').find("> tr:first > td").length
		};
		$('#' + tableID + ' tr:not(".IgnoreChart") td:nth-child(1)').each( function(){ //Get names 
   			names.push( $(this).text() );       
		});
		$('#' + tableID + ' tr:not(".IgnoreChart") td:nth-child(' + columnNum +')').each( function(){ //get values 
   			if ($(this).text()=='') {   //recode missing into null for high charts
				var temp = null;
				values.push(temp);
			}
			else {
				values.push( $(this).text() );
			};
		});
		for (var i=0; i<names.length && i<values.length; i++) {
			pieArray[i] = '["'+names[i] +'",'+ values[i] +']';
			};
		dataString=pieArray.toString();
		return dataString;
	};   //END getSingleColumnDataIntoString

	
	
	$('.HC_Pie').each(function(){   //BEGIN pie chart generators
		try {
			var container_id = '#' + $(this).prop('id');
			if ($(this).hasClass('DataTableAfter')) {	
				var dataTable_id = $(this).nextAll('table').prop('id');
				var chartTitleText = $(this).nextAll('table').find('caption').text(); //get title from caption and specific th text
				if (chartTitleText.indexOf('by') > 0) {
					var unitText = chartTitleText.substring(0,chartTitleText.indexOf('by')-1)
				} else {var unitText = chartTitleText};
			};  
			if ($(this).hasClass('DataTableBefore')) {	
				var dataTable_id = $(this).prevAll('table').prop('id');
				var chartTitleText = $(this).prevAll('table').find('caption').text(); //get title from caption and specific th text
				if (chartTitleText.indexOf('by') >0 ) {
					var unitText = chartTitleText.substring(0,chartTitleText.indexOf('by')-1)
				} else {var unitText = chartTitleText};
			}; 	
			if ($(this).hasClass('Population_Total')) {	
				var dataTable_id = 'datatable_populationTotal';
				var chartTitleText = $('#datatable_populationTotal').find('caption').text();
				var unitText = 'People';
				//get title from caption and specific th text
			}; 	
			if ($(this).hasClass('Population_ByAge')) {	
				var dataTable_id = 'datatable_populationByAge';
				var chartTitleText = $('#datatable_populationByAge').find('caption').text(); //get title from caption and specific th text
				var unitText = 'People';
			}; 	
			if ($(this).hasClass('Population_BySex')) {	
				var dataTable_id = 'datatable_populationBySex';
				var chartTitleText = $('#datatable_populationBySex').find('caption').text(); //get title from caption and specific th text
				var unitText = 'People';
			}; 
			if ($(this).hasClass('Population_ByRace')) {	
				var dataTable_id = 'datatable_populationByRace';
				var chartTitleText = $('#datatable_populationByRace').find('caption').text(); //get title from caption and specific th text
				var unitText = 'People';
			}; 
			if ($(this).hasClass('Population_ByRaceEth')) {	
				var dataTable_id = 'datatable_populationByRaceEth';
				var chartTitleText = $('#datatable_populationByRaceEth').find('caption').text(); //get title from caption and specific th text
				var unitText = 'People';
			}; 
			var columnNum = 0;  //used to find last column in table
			var dataYear = $('#' + dataTable_id + ' th').last().text();  //get year for columns
			if ($(this).hasClass('FirstChart')) {
				columnNum = 2;
				dataYear = $('#' + dataTable_id + ' th:nth-child(2)').text();
			}; 
			chartTitleText= chartTitleText +', ' + dataYear;
			
			var values = getSingleColumnDataIntoString(dataTable_id,columnNum);
			var valuesString = "[" + values + "]";
			$(container_id).highcharts({
				series:[{
					data: JSON.parse(valuesString)
					}],
				chart: {
					type: 'pie'
				},
				title: {
					text: chartTitleText
				},
				tooltip: {
					formatter: function () {
						return '<b>' + this.point.name + '</b><br/>' +
						Highcharts.numberFormat(this.point.y,0,'.',',') + ' ' + unitText;
					}
				},
				plotOptions: {
					pie: {
						allowPointSelect: true,
						cursor: 'pointer',
						size: '220px',
						dataLabels: {
							formatter: function() {
								return this.point.name + ': ' + (this.percentage).toFixed(1) + ' %';
							},
							style: {
								width: '100px'
							},
							distance: 10, 
							enabled: true
						},
					}
				}
			});
		}
		catch(e) {
		};
	});   //END pie chart generators




	$('.HC_TimeSeries').each(function(){  //BEGIN time series generators
		try {
			if ($(this).hasClass('DataTableAfter')) {	
				var dataTable_id = $(this).nextAll('table').prop('id');
				var chartTitleText = $(this).nextAll('table').find('caption').text() +', ' + $(this).nextAll('table').find('th:nth-child(2)').text() + '-' + $(this).nextAll('table').find('th').last().text() ; //get title from caption and specific th text
			};  
			if ($(this).hasClass('DataTableBefore')) {	
				var dataTable_id = $(this).prevAll('table').prop('id');
				var chartTitleText = $(this).prevAll('table').find('caption').text() +', ' + $(this).prevAll('table').find('th:nth-child(2)').text() + '-' + $(this).prevAll('table').find('th').last().text() ; //get title from caption and specific th text
			}; 
			var container_id = '#' + $(this).prop('id');
			var unitText = chartTitleText.substring(0,chartTitleText.indexOf(','));
			$(container_id).highcharts({
				data: {
					table: dataTable_id, 
					switchRowsAndColumns: true
				},
				chart: {
					type: 'line'
				},
				plotOptions: {
					series: {
						connectNulls: false   
					}
				},
				title: {
					text:chartTitleText
				},
				yAxis: {
					allowDecimals: false,
					title: {
						text: unitText
					},
					floor: 0
				},
				tooltip: {
					formatter: function () {
						return '<b>' + this.series.name + '</b><br/>' +
							Highcharts.numberFormat(this.point.y,1,'.',',') + ' ' + unitText ;
					}
				}
			});
		}
		catch(e){
		};
	});  //END time series generators
	  
	
	$('.HC_Bar').each(function(){  //BEGIN bar chart generators
		try {
			var container_id = '#' + $(this).prop('id');
			var columnNum = 0;  //used to find last column in table
			var dataTable_id = $(this).prevAll('table').prop('id');
			var chartTitleText = $(this).prevAll('table').find('caption').text() 
				+', ' + $(this).prevAll('table').find('th').last().text();	//get title from caption and the last th element 
			var unitText = chartTitleText.substring(0,chartTitleText.indexOf('by')-1);	
			var values = getSingleColumnDataIntoString(dataTable_id,columnNum);
			var valuesString = "[" + values + "]";
			$(container_id).highcharts({
				xAxis: {
					type: "category",
					labels: {
						style: {
							width: '100px'  //avoids most labels being cut, order the bar chart to minimize long labels on the left part of the chart
						}
					}
				},
				yAxis: {
					allowDecimals: false,
					title: {
						text: unitText
					},
					floor: 0
				},
				series:[{
					data: JSON.parse(valuesString),
					showInLegend: false
					}],
				chart: {
					type: 'column',
				},
				title: {
					text:chartTitleText
				},
				tooltip: {
					formatter: function () {
						return '<b>' + this.point.name + '</b><br/>' +
							Highcharts.numberFormat(this.point.y,0,'.',',') + ' ' + unitText;
					}
				}
			});
		}
 		catch(e) {
			
		};
	});  //END bar chart generators

	
	$('.ReplaceWithNA').text('NA');   //replaces blank values with NA

	/*-----Explanation bullet points removed per request, replaced with pct change column in tables
	$('.DataRow').each(function(){  
		var subject = $(this).find('td:first').text();
		if (subject.indexOf("Circuit") == -1) {
			subject = subject + " County"
		}
		var firstPoint = $(this).find('.FirstYear').text();
		var lastPoint = $(this).find('.LastYear').text();
		if (firstPoint=="NA" || lastPoint=="NA" || firstPoint < 20 || lastPoint < 20) {
				var outText = " had counts too low to calculate a percent change"	
		}
		else {
				var PercentChange = (100*(lastPoint - firstPoint)/firstPoint).toFixed(1);
				if (PercentChange < 0 ) {var changeText = "decrease"};
				if (PercentChange > 0 ) {var changeText = "increase"};
				if (PercentChange == 0 ) {var changeText = "change"};
				var outText = ' had a '+ Math.abs(PercentChange) + " percent " + changeText;
		};
		var list_id = $(this).parent().parent().nextAll('ul').prop('id');
		var captionText = $(this).parent().parent().find('caption').text().toLowerCase(); 
		if (captionText.indexOf("rates") != -1) {
			captionText= "the " + captionText.slice(0,-1)
		}
		$('#'+list_id).append('<li>'+  subject + outText +' in ' +captionText +'.</li>');
	}); 
	*/
	//Code below adds percent change columns to tables
	try {
	$('.trendTable tr').each(function(){ 
		$(this).find('th').eq(-1).after('<th>Percent<br>Change</th>'); //adds table header cell
		
		var firstPoint = $(this).find('.FirstYear').text();
		var lastPoint = $(this).find('.LastYear').text();
		if (firstPoint=="NA" || lastPoint=="NA" || firstPoint < 20 || lastPoint < 20) {
				var outText = "NA";		
		}
		else {
				var outText = (100*(lastPoint - firstPoint)/firstPoint).toFixed(1) + '%';				
				
		};
		
		$(this).find('td').eq(-1).after('<td class="PercentChangeCell">' +outText +'</td>'); 
		});
	}
		 catch(e) {
			
	};

	
	//format numeric data cells as comma and decimal points
	$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
	}
	
	$('td').digits();	//perform function

	$('.scrollclass').click(function() {
		$('body').scrollTo($(this).data('target'), {
			duration: 1200,
            offset: -90
        });
    });

	//leave map rendering until the end, it takes the longest
	try{
		FusionCharts.ready(function(){
		DrawFSmap(ICJIANumber);
	});	
	}
	catch(e){
	};

	
}); //end document ready

