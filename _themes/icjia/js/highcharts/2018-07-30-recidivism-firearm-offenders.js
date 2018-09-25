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
  legend: {
  	enabled: true
  },
  xAxis: {
    categories: [
      'Rearrest-any charge',
      'Rearrest-firearm charge',
      'Reconviction-any',
      'Reconviction-firearm',
      'Re-incarceration-any'
      
    
    ],
    title: {
    	text: null
    }
 
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: ' Percent',
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.f} %</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.f}%',
        }
      }
    },
  series: [{
    name: 'Unmatched Firearm-Involved*',
	color: '#ED561B',
    data: [81, 21, 50, 83, 59]
},{
	name: 'Firearm Involved-Match',
	color: '#FFF263',
    data: [67,18,43,74,53]
}, {
	name: 'Non-Firearm Involved-Match',
	color: '#50B432',
    data: [41, 3, 20, 65, 43]

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
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Firearm-Involved(both groups)', 'Non-firearm-involved'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: 'percent'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{point.y:.f}%'
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Homicide',
        data: [41, 21]
    }, {
        name: 'Natural causes',
        data: [34, 48]

   }]
  });
});  