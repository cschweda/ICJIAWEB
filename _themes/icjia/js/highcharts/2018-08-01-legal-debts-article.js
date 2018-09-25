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
        categories: ['Less than $15,000',
      '$15,000-$25,000',
      '$25,000-$35,000',
      '$35,000-$50,000',
      '$50,000-$70,000',
      '$70,000 or more'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
        text: 'Percentage of respondents',
        align: 'high'
        
        },
        labels: {
    
            title: {
      
    }
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
        name: 'Percent of respondents',
        data: [54, 18, 14, 8, 3, 2]

   }]
  });
});


$(function () {
  $('#hc-fig3').highcharts({
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
      'No one explained',
      'Yes, public defender',
      'Yes, private attorney',
      'Yes, the judge',
      'Yes probation/parole officer',
      'Yes, the prosecutor',
      'Yes, the presentence officer'
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
      pointPadding: 0,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.f}%',
        }
      }
    },
  series: [{
    name: 'Percent of respondents',
    data: [58, 21, 13, 10, 10, 6, 2]

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
  subtitle: {
    text: ''
  },
  legend: {
  	enabled: false
  },
  xAxis: {
    categories: [
      'No one explained',
      'Yes, the judge',
      'Yes, public defender',
      'Yes, private attorney',
      'Yes, the prosecutor',
      'Yes, the presentence officer',
      'Yes probation/parole officer'
    
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
      pointPadding: 0,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.f}%',
        }
      }
    },
  series: [{
    name: 'Percent of respondents',
    data: [58, 19, 15, 7, 3, 2, 0]

   }]
  });
});


$(function () {
  $('#hc-fig5').highcharts({
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
        'Traffic violation',
        'Retail theft/theft',
        'Small possession',
        'Other offense',
        'Other felonies',
        'Domestic battery',
        'DUI',
        'Burglary',
        'Forgery',
        'Other property crime'
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
        name: 'Percentage of respondents',
        data: [52, 30, 23, 16, 12, 11, 10, 9, 9, 8]

   }]
  });
});


$(function () {
  $('#hc-fig6').highcharts({
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
        'Groceries (n=239)',
        'Utility bills (n=234)',
        'Rent/mortgage (n=228)',
        'Car payments (n=213)',
        'School/job training (n=200)',
        'Medical bills (n=193)',
        'Prescriptions (n=190)',
        'Child support (n=204)',
        'Child care (n=183)'
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
        name: 'Percentage of respondents',
        data: [72, 62, 62, 40, 38, 37, 30, 27, 27]

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
    xAxis: {
        categories: [
        'Use bond money to cover CJFOs (n=237)',
        'Drivers license reinstatement trouble (n=236)',
        'Trouble with record seling or expungement (n=223)',
        'Trouble obtaining professional license (n=223)',
        'Issues gaining custody of children (n=233)',
        'Interference with immigration status (n=231)',
        'Affected credit score (n=128)*',
        'Sent to collections (n=142)*'
        
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
        name: 'Percentage of respondents',
        data: [49, 35, 27, 21, 11, 8, 52, 56]

   }]
  });
});