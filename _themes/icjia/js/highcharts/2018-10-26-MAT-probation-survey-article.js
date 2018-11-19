$(function () {
  $('#hc-fig1').highcharts({
    chart: {
        type: 'column'
    
	
	},
    
	
	title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    colors: [
            '#C103E3','#1D03E8', '#0A9DFF'
            ],	
    xAxis: {
        categories: [
           'Use',
           'Effectiveness',
           'Administration',
           'How it works'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent responding Very or Extremely familiar'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Methadone',
        data: [35, 31, 27, 31]

    }, {
        name: 'Buprenorphine',
        data: [42,35,31,38]

    }, {
        name: 'Naltrexone',
        data: [46,31,35,42]

   }]
  });
});


$(function () {
  $('#hc-fig2').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: ''
    },
    colors: [
            '#C85DFF','#3F057F', '#C117FF','#6B327F','#4F067F'
            ],		
    xAxis: {
        categories: ['How it works', 'Administration', 'Effectiveness', 'Use']
    },
    colors: [
            '#C103E3','#1D03E8', '#0A9DFF'
            ],	   
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Extent of familiarity'
        }
    },
    legend: {
        reversed: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Extremely',
        data: [8, 12, 12, 15]
    }, {
        name: 'Very',
        data: [23,15,19,19]
    }, {
        name: 'Moderately',
        data: [39,54,50,50]
     }, {
     		name: 'Slightly',
        data: [23,8,15,12]
     }, {
     		name: 'Not at all',
        data: [8,12,4,4]

   }]
  });
});


$(function () {
  $('#hc-fig3').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: ''
    },
    colors: [
            '#C85DFF','#3F057F', '#C117FF','#6B327F','#4F067F'
            ],	       
	xAxis: {
        categories: ['How it works', 'Administration', 'Effectiveness', 'Use']
    },
   
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Extent of familiarity'
        }
    },
    legend: {
        reversed: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Extremely',
        data: [8, 8, 12, 15]
    }, {
        name: 'Very',
        data: [31,23,23,31]
    }, {
        name: 'Moderately',
        data: [27,39,39,35]
     }, {
     		name: 'Slightly',
        data: [23,19,19,15]
     }, {
     		name: 'Not at all',
        data: [12,12,8,8]

   }]
  });
});


$(function () {
  $('#hc-fig4').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: ''
    },
    colors: [
            '#C85DFF','#3F057F', '#C117FF','#6B327F','#4F067F'
            ],	           
	xAxis: {
        categories: ['How it works', 'Administration', 'Effectiveness', 'Use']
    },
   
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Extent of familiarity'
        }
    },
    legend: {
        reversed: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Extremely',
        data: [8,8,15,12]
    }, {
        name: 'Very',
        data: [35,27,15,35]
    }, {
        name: 'Moderately',
        data: [23,39,50,39]
     }, {
     		name: 'Slightly',
        data: [23,15,8,8]
     }, {
     		name: 'Not at all',
        data: [12,12,12,8]

   }]
  });
});


$(function () {
  $('#hc-fig5').highcharts({
    chart: {
        type: 'column'
    
	
	},
    
	
	title: {
        text: ''
    },
    colors: [
            '#C85DFF','#3F057F', '#C117FF','#6B327F','#4F067F'
            ],	           
	subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Respondent',
           	'Probation Staff'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max:100,
        title: {
            text: 'Percent responding Moderate Amount to Great Deal of training'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Methadone',
        data: [35,16]

    }, {
        name: 'Buprenorphine',
        data: [16,24]

    }, {
        name: 'Naltrexone',
        data: [38,36]

   }]
  });
});


$(function () {
  $('#hc-fig6').highcharts({
    chart: {
        type: 'column'
    
	
	},
    
	
	title: {
        text: ''
    },
    colors: [
            '#C103E3','#1D03E8', '#0A9DFF','#03E89C'
            ],	               
	xAxis: {
        categories: ['Methadone(n=22)','Buprenorphine (n=22)','Naltrexone (n=21)']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Extent of openness in referring clients for medication for OUD'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
            }
        }
   
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false,
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Extremely',
        data: [18,32,43]
    }, {
        name: 'Very',
        data: [41,45,48]
    }, {
        name: 'Moderately',
        data: [27,14,10]
    },{
        name: 'Slightly',
        data: [14,9,0]

   }]
  });
});


$(function () {
  $('#hc-fig7').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    colors: [
            '#C103E3','#1D03E8', '#0A9DFF','#03E89C'
            ],	                   
	xAxis: {
        categories: ['Administration objects*', 'Clinical staff objects*', 'Agency favors medicine-free treatment', 'Liability concerns', 'Regulations prohibit use', 'Lack of institutional knowledge', 'Need for guidance', 'Cost', 'Lack of experience by medical personnel'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true,
        enabled:false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percent responding Agree or Strongly Agree',
        data: [4,9,9,18,23,36,41,50,73]

   }]
  });
});


