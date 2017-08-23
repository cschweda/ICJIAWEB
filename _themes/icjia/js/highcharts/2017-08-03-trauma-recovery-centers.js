$(function() {
  $('#hc-fig1').highcharts({
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
            'Less than High School',
            'High School or More',
            'Homeless',
            'Housed',
            '35 or Younger',
            'Over 35',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent of Clients who Applied'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
        name: 'Usual Care',
        data: [12.7, 27.7, 7.8, 33.9, 11.5, 30.1]

    }, {
        name: 'TRC',
        data: [56.5, 54.8, 49.0, 59.6, 53.8, 56.7]
		
    }]
  });
});
