$(function () {
    $('#hc-fig1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Short-term client outcomes (n=517)'
        },
        tooltip: {
      pointFormat: '{point.percentage}%'
      },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                 dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Still enrolled',
                y: 56
            }, {
                name: 'Successfully completed',
                y: 11
            }, {
                name: 'Terminated unsuccessful',
                y: 33
            }]
        }]
    });
});
