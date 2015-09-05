$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Change in pre- and post-test average scores by measure (n=606)'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Attitudes toward employment',
        'Attitudes toward violence',
        'Conflict resolution',
        'Self-esteem',
        'Contact with police'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Mean score'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.2f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.0,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Pre-test',
      data: [4.03, 4.26, 3.99, 4.21, 4.91]

    }, {
      name: 'Post-test',
      data: [4.05, 4.18, 3.95, 4.21, 4.92]


    }]
  });
});
