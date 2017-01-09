$(function () {
    Highcharts.chart('hc-fig1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Percent youth reporting substance use in last year by substance type, 2014'
        },
                xAxis: {
            categories: [
                'Marijuana',
                'Alcohol abuse, dependence',
                'Prescription drug',
                'Cocaine'
                         ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'percent'
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
            name: 'National',
            data: [13, 5, 5, 1]

        }, {
            name: 'Midwest',
            data: [12, 5, 5, 1]

        }, {
            name: 'Illinois',
            data: [12, 5, 4, 1]

        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Percent of Illinois high school students reporting ever using substance by race and ethnicity, 2015'


        },
        xAxis: {
            categories: [
                'Alcohol',
                'Marijuana',
                'Prescription drug',
                'Inhalants',
                'Cocaine',
                'Ecstasy',
                'Meth',
                'Steroids',
                'Heroin',
                           ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
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
            name: 'White',
            data: [62, 30, 14, 5, 3, 5, 2, 3, 2]

        }, {
            name: 'Black',
            data: [54, 44, 13, 8, 6, 5, 4, 4, 6]

        }, {
            name: 'Hispanic',
            data: [67, 48, 15, 8, 9, 8, 6, 7, 6]


        }]
    });
});
