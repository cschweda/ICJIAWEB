$(function () {
  $('#hc-fig1').highcharts({
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    
	},
    
	
	title: {
        text: ' '
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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Offender Relationships',
        colorByPoint: true,
        data: [{
            name: 'Non-Stranger',
            y: 87,
            sliced: true,
            selected: true
        }, {
            name: 'Stranger',
            y: 13
            }]
        }]
    });
});


$(function () {
  $('#hc-fig2').highcharts({  
    chart: {
        type: 'bar'
    
	},
    
	
	title: {
        text: ' '
    },
    subtitle: {
        text: '* Significant difference at 95% confidence level or above.'
    },
    xAxis: {
        categories: ['Threw something at victim', 'Pushed, grabbed, or shoved victim*', 'Slapped victim*', 'Kicked, bit, or hit victim with a fist*', 'Hit or tried to hit victim with something*', 'Beat up victim*', 'Choked victim*', 'Threatened victim with a knife or gun', 'Used a knike or fired a gun'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage of Clients',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Not Pregnant',
        data: [11.9, 23.7, 12.2, 12.0, 9.2, 8.8, 11.7, 6.3, 1.6]
    }, {
        name: 'Pregnant',
        data: [11.8, 27.8, 15.5, 14.7, 11.6, 11.2, 14.9, 7.4, 2.0]

   }]
  });
});
