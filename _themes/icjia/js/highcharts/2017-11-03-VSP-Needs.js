$(function() {
  $('#hc-fig2').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Counseling', 'Mental health', 'Medical care', 'Housing', 'Civil legal assistance', 'Substance use']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percentage'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'High priority',
        data: [22.6, 36.8, 31.2, 31.6, 23.5, 24.8]
         }, {
        name: 'Essential',
        data: [58.5, 37.2, 32.1, 29.5, 31.6, 15]

     }]
  });
});
