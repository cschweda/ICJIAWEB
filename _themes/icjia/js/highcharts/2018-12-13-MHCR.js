$(function() {
  $('#hc-fig1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    
	},
    
	
	title: {
        text: 'Sworn personnel are <b>specially trained</b> to respond to mental health crisis incidents'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.0f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: ' ',
        colorByPoint: true,
        data: [{
            name: 'Yes',
            y: 75,
            sliced: true,
            selected: false
        }, {
            name: 'No',
            y: 25
            }]
        }]
    });
});

$(function() {
  $('#hc-fig2').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    
	},
    
	
	title: {
        text: 'Community <b>mental health service providers assist</b> when responding to mental health crisis incidents'
    },
    colors: [
            '#89A54E', '#434348'
            ],	
	tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.0f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: ' ',
        colorByPoint: true,
        data: [{
            name: 'Yes',
            y: 63,
            sliced: true,
            selected: false
        }, {
            name: 'No',
            y: 37
            }]
        }]
    });
});


$(function() {
  $('#hc-fig3').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Use of Force', 'Calls for Service', 'Arrests', 'Transports to a Treatment Provider or Facility', 'Refferals to Treatment Providers', 'Other'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage',
            align: 'high'
        },
        labels: {
            overflow: 'justify',
            format: '{value} %'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y} %'
            }
        }
    },
    credits: {
        enabled: false
    },
    series: [{
    		name: ' ',
    		showInLegend: false,
        data: [84, 75, 73, 57, 50, 2]

   }]
  });
});


$(function() {
  $('#hc-fig4').highcharts({
    chart: {
        type: 'bar'
    
	
	},
    
	
	title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Designated Place Available 24-hrs', 'No-Refusal Policy for Law Enforcement', 'Streamlined Intake Process for Law Enforcement'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percentage',
            align: 'high'
        },
        labels: {
            overflow: 'justify',
            format: '{value} %'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                format: '{y} %'
            }
        }
    },    
    credits: {
        enabled: false
    },
    series: [{
    		name: ' ',
    		showInLegend: false,
        data: [72, 28, 12]

   }]
  });
});
