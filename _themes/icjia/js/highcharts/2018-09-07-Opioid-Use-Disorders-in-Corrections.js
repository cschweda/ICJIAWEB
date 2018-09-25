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
  	enabled: false
  },
  xAxis: {
    categories: [
     'Protocol in jail for responding to opioid withdrawal',
    'Medical detox offered in jail for OUD'
 
    ],
  
  
  title: {
    	text: null
    }
 
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Percentage of respondents',
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
    name: 'Protocol in jail for responding to opioid withdrawal',
    data: [78,39]
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
        categories: [
        'Medication-assisted treatment',
       'Naltrexone',
       'Methadone',
       'Buprenorphine'
       ],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent of respondents',
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
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true,
        enabled: false
    },
    credits: {
        enabled: false
    },
 
    series: [{
        name: 'MAT and medications',
        data: [22,14,8,8]

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
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
        'Cost',
        'Need for guidance',
        'Liability concerns',
        'Lack of institutional knowledge',
        'Lack of experienced medical personnel',
        'Agency favors medicine-free treatment',
        'Regulations prohibit use',
        'Clinical staff objects',
        'Administration objects'
        
        ],
        crosshair: true,
        title: {
            text: false
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage (%) of respondents',
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
                enabled: true,
                format: '{point.y:.f}%',
                
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
        name: 'Concerns',
        data: [42, 22, 22, 19, 19, 14, 14, 8, 6]

   }]
  });
});


$(function () {
 $('#hc-fig4').highcharts({      
    chart: {
        type: 'column'
    
	},
    
	
	title: {
        text: ''
    },
    xAxis: {
        categories: ['Jail Staff Access', 'To Detainees', 'To Friends/Family']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: false
           
        }
    },
    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                format: '{point.y:.f}%',
                 color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
               
            }
        }
    },
    series: [{
        name: 'Yes',
        data: [50, 14,0]
    }, {
        name: 'Planning',
        data: [0, 6, 3]

   }]
  });
});
