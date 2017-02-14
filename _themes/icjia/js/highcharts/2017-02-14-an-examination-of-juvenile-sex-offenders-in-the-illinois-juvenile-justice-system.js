$(function () {
    Highcharts.chart('hc-fig1', {
        title: {
            text: 'Number of Juvenile Arrests and Juveniles Admitted to Detention or State Correctional Facilities for Sex Offenses, 2004-2014',
            x: 0 //center

        },
        xAxis: {
            categories: ['2004', '2006', '2008', '2010', '2012', '2014']
        },
        yAxis: {
            title: {
                text: 'Number of juveniles'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
               tickInterval: 100,
               max:450
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Arrests Ages 10-17 ',
            data: [419, 371, 318, 241, 251, 231]
        }, {
            name: 'Arrests Ages 10-16',
            data: [314, 289, 242, 170, 198, 194]
        }, {
            name: 'Detention admissions Ages 10-18',
            data: [206, 221, 205, 171, 194, 160]
        }, {
            name: 'Corrections admissions Ages 13-21',
            data: [87, 78, 46, 43, 30, 20]
        }]
    });
});
