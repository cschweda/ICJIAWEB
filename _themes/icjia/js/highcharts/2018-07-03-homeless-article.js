$(function() {
  $('#hc-fig1').highcharts({


title: {
    text: ''
  },

  subtitle: {
    text: ''
  },

  yAxis: {
    title: {
      text: 'Rate of Homelessness'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2007
    }
  },

  series: [{
    name: 'United States',
    data: [21, 21, 21, 21, 20, 20, 19, 18, 18, 17, 17]
  }, {
    name: 'Illinois',
    data: [12, 11, 11, 11, 11, 11, 10, 10, 10, 9, 8]


  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
});


$(function() {
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
  xAxis: {
    categories: [
      'Loss of job',
      'Bills higher than earnings',
      'Evicted by family member',
      'Abuse at home',
      'Incarcerated',
      'Change in family status',
      'sick/ disabled',
      'Substance use',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Percent of sample'
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
    name: 'Events',
    data: [35, 15, 13, 11, 11, 10, 10, 9]




  }]
});
});
