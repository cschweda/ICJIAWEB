 


$(document).ready(function() {



	function AddColorJson(value,jsonObj) {    //funcction to alter map json based on click or select value
		for (var i=0; i<jsonObj.data.length; i++) {
			jsonObj.data[i].color = '#99ccff';
			if (jsonObj.data[i].value == ICJIANumber) {
				jsonObj.data[i].color = '#ff9900';						
			};
								
		};
	};
		
	function DrawFSmap(selection) {
			
			var countyMap = new FusionCharts({
					"type": "maps/illinois",
					"renderAt": "IllinoisCountyMap",
					"width": "500",
					"height": "750",
					"dataFormat": "json",
					"dataSource": {
						"data": [
							{"value":"1","id": "001","toolText" : "Adams" , "color": "#99ccff"},
							{"value":"2","id": "003","toolText" : "Alexander" , "color": "#99ccff"},
							{"value":"3","id": "005","toolText" : "Bond" , "color": "#99ccff"},
							{"value":"4","id": "007","toolText" : "Boone" , "color": "#99ccff"},
							{"value":"5","id": "009","toolText" : "Brown" , "color": "#99ccff"},
							{"value":"6","id": "011","toolText" : "Bureau" , "color": "#99ccff"},
							{"value":"7","id": "013","toolText" : "Calhoun" , "color": "#99ccff"},
							{"value":"8","id": "015","toolText" : "Carroll" , "color": "#99ccff"},
							{"value":"9","id": "017","toolText" : "Cass" , "color": "#99ccff"},
							{"value":"10","id": "019","toolText" : "Champaign" , "color": "#99ccff"},
							{"value":"11","id": "021","toolText" : "Christian" , "color": "#99ccff"},
							{"value":"12","id": "023","toolText" : "Clark" , "color": "#99ccff"},
							{"value":"13","id": "025","toolText" : "Clay" , "color": "#99ccff"},
							{"value":"14","id": "027","toolText" : "Clinton" , "color": "#99ccff"},
							{"value":"15","id": "029","toolText" : "Coles" , "color": "#99ccff"},
							{"value":"16","id": "031","toolText" : "Cook" , "color": "#99ccff"},
							{"value":"17","id": "033","toolText" : "Crawford" , "color": "#99ccff"},
							{"value":"18","id": "035","toolText" : "Cumberland" , "color": "#99ccff"},
							{"value":"19","id": "037","toolText" : "DeKalb" , "color": "#99ccff"},
							{"value":"20","id": "039","toolText" : "De Witt" , "color": "#99ccff"},
							{"value":"21","id": "041","toolText" : "Douglas" , "color": "#99ccff"},
							{"value":"22","id": "043","toolText" : "DuPage" , "color": "#99ccff"},
							{"value":"23","id": "045","toolText" : "Edgar" , "color": "#99ccff"},
							{"value":"24","id": "047","toolText" : "Edwards" , "color": "#99ccff"},
							{"value":"25","id": "049","toolText" : "Effingham" , "color": "#99ccff"},
							{"value":"26","id": "051","toolText" : "Fayette" , "color": "#99ccff"},
							{"value":"27","id": "053","toolText" : "Ford" , "color": "#99ccff"},
							{"value":"28","id": "055","toolText" : "Franklin" , "color": "#99ccff"},
							{"value":"29","id": "057","toolText" : "Fulton" , "color": "#99ccff"},
							{"value":"30","id": "059","toolText" : "Gallatin" , "color": "#99ccff"},
							{"value":"31","id": "061","toolText" : "Greene" , "color": "#99ccff"},
							{"value":"32","id": "063","toolText" : "Grundy" , "color": "#99ccff"},
							{"value":"33","id": "065","toolText" : "Hamilton" , "color": "#99ccff"},
							{"value":"34","id": "067","toolText" : "Hancock" , "color": "#99ccff"},
							{"value":"35","id": "069","toolText" : "Hardin" , "color": "#99ccff"},
							{"value":"36","id": "071","toolText" : "Henderson" , "color": "#99ccff"},
							{"value":"37","id": "073","toolText" : "Henry" , "color": "#99ccff"},
							{"value":"38","id": "075","toolText" : "Iroquois" , "color": "#99ccff"},
							{"value":"39","id": "077","toolText" : "Jackson" , "color": "#99ccff"},
							{"value":"40","id": "079","toolText" : "Jasper" , "color": "#99ccff"},
							{"value":"41","id": "081","toolText" : "Jefferson" , "color": "#99ccff"},
							{"value":"42","id": "083","toolText" : "Jersey" , "color": "#99ccff"},
							{"value":"43","id": "085","toolText" : "Jo Daviess" , "color": "#99ccff"},
							{"value":"44","id": "087","toolText" : "Johnson" , "color": "#99ccff"},
							{"value":"45","id": "089","toolText" : "Kane" , "color": "#99ccff"},
							{"value":"46","id": "091","toolText" : "Kankakee" , "color": "#99ccff"},
							{"value":"47","id": "093","toolText" : "Kendall" , "color": "#99ccff"},
							{"value":"48","id": "095","toolText" : "Knox" , "color": "#99ccff"},
							{"value":"49","id": "097","toolText" : "Lake" , "color": "#99ccff"},
							{"value":"50","id": "099","toolText" : "LaSalle" , "color": "#99ccff"},
							{"value":"51","id": "101","toolText" : "Lawrence" , "color": "#99ccff"},
							{"value":"52","id": "103","toolText" : "Lee" , "color": "#99ccff"},
							{"value":"53","id": "105","toolText" : "Livingston" , "color": "#99ccff"},
							{"value":"54","id": "107","toolText" : "Logan" , "color": "#99ccff"},
							{"value":"55","id": "109","toolText" : "McDonough" , "color": "#99ccff"},
							{"value":"56","id": "111","toolText" : "McHenry" , "color": "#99ccff"},
							{"value":"57","id": "113","toolText" : "McLean" , "color": "#99ccff"},
							{"value":"58","id": "115","toolText" : "Macon" , "color": "#99ccff"},
							{"value":"59","id": "117","toolText" : "Macoupin" , "color": "#99ccff"},
							{"value":"60","id": "119","toolText" : "Madison" , "color": "#99ccff"},
							{"value":"61","id": "121","toolText" : "Marion" , "color": "#99ccff"},
							{"value":"62","id": "123","toolText" : "Marshall" , "color": "#99ccff"},
							{"value":"63","id": "125","toolText" : "Mason" , "color": "#99ccff"},
							{"value":"64","id": "127","toolText" : "Massac" , "color": "#99ccff"},
							{"value":"65","id": "129","toolText" : "Menard" , "color": "#99ccff"},
							{"value":"66","id": "131","toolText" : "Mercer" , "color": "#99ccff"},
							{"value":"67","id": "133","toolText" : "Monroe" , "color": "#99ccff"},
							{"value":"68","id": "135","toolText" : "Montgomery" , "color": "#99ccff"},
							{"value":"69","id": "137","toolText" : "Morgan" , "color": "#99ccff"},
							{"value":"70","id": "139","toolText" : "Moultrie" , "color": "#99ccff"},
							{"value":"71","id": "141","toolText" : "Ogle" , "color": "#99ccff"},
							{"value":"72","id": "143","toolText" : "Peoria" , "color": "#99ccff"},
							{"value":"73","id": "145","toolText" : "Perry" , "color": "#99ccff"},
							{"value":"74","id": "147","toolText" : "Piatt" , "color": "#99ccff"},
							{"value":"75","id": "149","toolText" : "Pike" , "color": "#99ccff"},
							{"value":"76","id": "151","toolText" : "Pope" , "color": "#99ccff"},
							{"value":"77","id": "153","toolText" : "Pulaski" , "color": "#99ccff"},
							{"value":"78","id": "155","toolText" : "Putnam" , "color": "#99ccff"},
							{"value":"79","id": "157","toolText" : "Randolph" , "color": "#99ccff"},
							{"value":"80","id": "159","toolText" : "Richland" , "color": "#99ccff"},
							{"value":"81","id": "161","toolText" : "Rock Island" , "color": "#99ccff"},
							{"value":"82","id": "163","toolText" : "St. Clair" , "color": "#99ccff"},
							{"value":"83","id": "165","toolText" : "Saline" , "color": "#99ccff"},
							{"value":"84","id": "167","toolText" : "Sangamon" , "color": "#99ccff"},
							{"value":"85","id": "169","toolText" : "Schuyler" , "color": "#99ccff"},
							{"value":"86","id": "171","toolText" : "Scott" , "color": "#99ccff"},
							{"value":"87","id": "173","toolText" : "Shelby" , "color": "#99ccff"},
							{"value":"88","id": "175","toolText" : "Stark" , "color": "#99ccff"},
							{"value":"89","id": "177","toolText" : "Stephenson" , "color": "#99ccff"},
							{"value":"90","id": "179","toolText" : "Tazewell" , "color": "#99ccff"},
							{"value":"91","id": "181","toolText" : "Union" , "color": "#99ccff"},
							{"value":"92","id": "183","toolText" : "Vermilion" , "color": "#99ccff"},
							{"value":"93","id": "185","toolText" : "Wabash" , "color": "#99ccff"},
							{"value":"94","id": "187","toolText" : "Warren" , "color": "#99ccff"},
							{"value":"95","id": "189","toolText" : "Washington" , "color": "#99ccff"},
							{"value":"96","id": "191","toolText" : "Wayne" , "color": "#99ccff"},
							{"value":"97","id": "193","toolText" : "White" , "color": "#99ccff"},
							{"value":"98","id": "195","toolText" : "Whiteside" , "color": "#99ccff"},
							{"value":"99","id": "197","toolText" : "Will" , "color": "#99ccff"},
							{"value":"100","id": "199","toolText" : "Williamson" , "color": "#99ccff"},
							{"value":"101","id": "201","toolText" : "Winnebago" , "color": "#99ccff"},
							{"value":"102","id": "203","toolText" : "Woodford" , "color": "#99ccff"}
						],
						"chart": {
							"showLabels": "0",
							"showCanvasBorder": "0",
							"caption": "Click a county on the map <br>(A judicial circuit or statewide can be selected using the dropdown menu above)"
						}
					},
					"events": {
						"entityClick": function(evt, data) {
							ICJIANumber =data.value;
							$('#CountySelector option[value="' + ICJIANumber + '"]').attr("selected", "selected");
							var jsonObj = countyMap.getChartData('json');
							
							AddColorJson(ICJIANumber,jsonObj);
							countyMap.setJSONData(jsonObj);								
						}
					}
					
			});
			
			if(selection >0) {
				ICJAINumber=selection;
				var jsonObj = countyMap.getChartData('json');
				AddColorJson(ICJIANumber,jsonObj);	
				countyMap.render();
			}
			else {
				countyMap.render();
	}		};



	$("#CountySelector").change(function() {      //change the highlighted map area based on select box
		ICJIANumber=$("option:selected",this).val();
		DrawFSmap(ICJIANumber);
	});	
	
	
	
	FusionCharts.ready(function(){
		DrawFSmap(0);
	});	
	


		

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

	
}); <!--end document ready-->
