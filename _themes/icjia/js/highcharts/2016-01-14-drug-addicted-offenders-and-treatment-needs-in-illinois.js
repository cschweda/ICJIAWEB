$(function() {
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });
  $('#hc-fig2').highcharts({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Figure 2'

    },
    subtitle: {
      text: 'State Funding For Addiction Treatment 2007 - 2015'
    },
    xAxis: {
      categories: ['2007', '2008', '2009', '2010', '2011', '2012',
        '2013', '2014', '2015'
      ]
    },
    yAxis: {
      title: {
        text: 'Funding in Dollars'
      },
      labels: {
        format: '${value:,.0f}'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Source: Illinois Department of Human Services, Budget Briefing<br/>Note: General revenue funds only',
      data: [164423, 164540, 109463, 147232, 104887, 130144, 120046,
        118856, 124274
      ]

    }]
  });
});


$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Figure 1'
    },

    subtitle: {
      text: 'Illinois criminal justice system drug offender population'
    },

    xAxis: {
      categories: ['Jail', 'Prison', 'Probation']
    },
    yAxis: {
      title: {
        text: 'Percentage'
      }
    },
    series: [{
      name: 'Source: ADAM and Illinois Department of Corrections',
      data: [50, 19, 28]
    }]
  });
});
