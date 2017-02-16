$(function () {
    $('#hc-fig1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Figure 1<br>Restrictive statutes, types, and totals '
        },
        tooltip: {
            pointFormat: '{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>  {point.percentage:.0f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Restrictive statutes, types, and totals ',
            colorByPoint: true,
            data: [{
                name: 'Business ownership/contracts<br>n=241<br>',
                y: 17
            }, {
                name: 'Personal Activities<br>n=340<br>',
                y: 23
            }, {
                name: 'Occupational Licensing<br>n=332<br>',
                y: 23
            }, {
                name: 'Employment<br>n=534<br>',
                y: 37
            }]
        }]
    });
});
