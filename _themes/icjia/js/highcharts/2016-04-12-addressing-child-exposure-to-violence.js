$(function() {
  // Create the chart
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Figure 1<br>Type of Violence Exposure Reported at Intake'
    },
    subtitle: {
      text: 'FY 2014'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: ''
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}%'
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}%</b>'
    },

    series: [{
      name: 'Percent of Safe from the Start children',
      colorByPoint: true,
      data: [{
        name: 'Witnessing Domestic Violence',
        y: 82,
        drilldown: 'Witnessing Domestic Violence'
      }, {
        name: 'Victim of Child Abuse',
        y: 16,
        drilldown: 'Victim of Child Abuse'
      }, {
        name: 'Other*',
        y: 12,
        drilldown: 'Other*'
      }, {
        name: 'Witnessing Community Violence',
        y: 6,
        drilldown: 'Witnessing Community Violence'
      }, {
        name: 'Sexual Abuse',
        y: 6,
        drilldown: 'Sexual Abuse'
      }, {
        name: 'Victim of Community Violence',
        y: 2,
        drilldown: 'Victim of Community Violence'
      }]
    }],
  });
});


$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'

    },
    title: {
      text: 'Figure 2<br>Changes in Client Assessment Scores'
    },
    subtitle: {
      text: 'Time 1 and 2'

    },
    xAxis: {
      categories: [
        'Emotional development (n=526)',
        'Problem behaviors (n=1,081)',
        'Parental distress (n=1,556)',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}%</b></td></tr>',
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
      name: 'Time 1',
      data: [45, 44, 43]

    }, {
      name: 'Time 2',
      data: [36, 29, 32]

    }]
  });
});
