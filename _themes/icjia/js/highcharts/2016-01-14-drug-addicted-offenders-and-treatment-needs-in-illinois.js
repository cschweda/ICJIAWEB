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
      text: 'State funding for addiction treatment 2007 - 2015'
    },
    xAxis: {
      categories: ['2007', '2008', '2009', '2010', '2011', '2012',
        '2013', '2014', '2015'
      ]
    },
    yAxis: {
      title: {
        text: 'Funding in dollars'
      },
      labels: {
        format: '${value:,.0f}'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          format: '${point.y:,.0f}'
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'General revenue funds only',
      data: [164423, 164540, 109463, 147232, 104887, 130144, 120046,
        118856, 124274
      ],
      showInLegend: false

    }]
  });
});


$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Illinois criminal justice system drug offender population'
    },
    xAxis: {
      categories: [
        'Jail',
        'Probation',
        'Prison',


      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percent'
      },
      labels: {
        format: '{value:.,0f} %'
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
      name: 'Population',
      data: [50, 28, 19],
      showInLegend: false


    }]
  });
});
