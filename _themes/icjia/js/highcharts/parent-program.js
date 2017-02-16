$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      style: {
        color: '#222',
        fontWeight: 'bold'
      },
      text: 'Change in pre- and post-test by protective factor',

    },
    xAxis: {
      categories: [
        'Family functioning and resiliency',
        'Social and concrete support',
        'Nurturing and attachment',
        'Child development and knowledge of parenting',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Mean scores'
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
        pointPadding: 0.1,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Pre-test',
      data: [5.35, 5.23, 5.15, 6.15]

    }, {
      name: 'Post-test',
      data: [5.63, 5.24, 5.28, 6.16]



    }]
  });
});
