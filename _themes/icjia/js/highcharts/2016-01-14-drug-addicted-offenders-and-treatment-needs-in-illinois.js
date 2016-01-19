$(function() {
  Highcharts.setOptions({
    credits: {
      enabled: false
    },
    exporting: {
      buttons: {
        enabled: true
      }
    },
    navigation: {
      buttonOptions: {
        enabled: false
      }
    },
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
      name: 'Data source: Illinois Department of Human Services, Budget Briefing<br/>Note: General revenue funds only',
      data: [164423, 164540, 109463, 147232, 104887, 130144, 120046,
        118856, 124274
      ]

    }]
  });
});
