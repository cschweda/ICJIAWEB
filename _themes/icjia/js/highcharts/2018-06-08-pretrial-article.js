$(function() {
  $('#hc-fig6').highcharts({
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
    categories: ['Drug testing', 'Curfew with no EM', 'Substance use disorder treatment', 'Curfew with EM', 'Mental Health Treatment'],
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
    showInLegend: false,
    data: [41, 30, 13, 3, 2]

   }]
  });
});


$(function() {
  $('#hc-fig7').highcharts({

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
		
    },
	
	
    title: {
        text: null
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
        name: '2016',
        colorByPoint: true,
        data: [{
            name: 'Failure to appear',
            y: 39,
            sliced: false,
            selected: false
        }, {
            name: 'Rule violation',
            y: 29
        }, {
            name: 'New offense',
            y: 33
        }]
    }]
});
});
