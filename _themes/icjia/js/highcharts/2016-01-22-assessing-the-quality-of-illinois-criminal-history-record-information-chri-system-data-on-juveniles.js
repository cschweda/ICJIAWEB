$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Regional contribution of juvenile arrest types, 2013'
    },
    lineHeight: '10em',
    xAxis: {
      categories: ['Lesser Offense', 'Misdemeanor', 'Felony'],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
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
          format: '{point.y:.,0f}%',
          allowOverlap: true
        }
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'bottom',

      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
        '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Southern Region',
      data: [4, 4, 5]
    }, {
      name: 'Central Region',
      data: [5, 8, 16]
    }, {
      name: 'Northern Region',
      data: [3, 5, 5]
    }, {
      name: 'Collar Counties',
      data: [21, 12, 8]
    }, {
      name: 'Cook County',
      data: [67, 71, 66]
    }]
  });
});


$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Distribution of juvenile arrest types by region'
    },
    lineHeight: '6em',
    xAxis: {
      categories: ['Cook County', 'Collar Counties', 'Northern Region',
        'Central Region', 'Southern Region', 'Illinois'
      ]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Juvenile Arrest Breakdown'
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) ||
            'gray'
        }
      }
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.background2) ||
        'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) ||
            'white',
          format: '{point.y:.,0f}%',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
    series: [{
      name: 'Lesser Offense',
      data: [22, 36, 16, 14, 20, 23]
    }, {
      name: 'Misdemeanor',
      data: [60, 52, 66, 50, 57, 58]
    }, {
      name: 'Felony',
      data: [18, 12, 18, 36, 23, 19]
    }]
  });
});



$(function() {
  $('#hc-fig3').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Juvenile arrest records with known outcomes, 2013'
    },
    subtitle: {
      text: 'Regional distribution'
    },
    lineHeight: '10em',
    xAxis: {
      categories: ['Illinois', 'Southern Region', 'Central Region',
        'Northern Region', 'Collar Counties', 'Cook County'
      ],
      title: {
        text: null
      }
    },
    yAxis: {
      min: 0,
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
          format: '{point.y:.,0f}%',
          allowOverlap: true
        }
      }
    },
    legend: {
      layout: 'horizontal',
      align: 'right',
      verticalAlign: 'bottom',

      borderWidth: 1,
      backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
        '#FFFFFF'),
      shadow: true
    },
    credits: {
      enabled: false
    },
    plotoptions: {
      series: {
        pointWidth: 30
      }
    },
    series: [{
      name: 'Lesser Offense',
      data: [16, 28, 53, 28, 28, 8]
    }, {
      name: 'Misdemeanor',
      data: [20, 34, 50, 29, 32, 13]
    }, {
      name: 'Felony',
      data: [21, 36, 51, 48, 40, 8]
    }]
  });
});
