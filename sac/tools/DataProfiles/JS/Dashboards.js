


$(document).ready(function() {



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
