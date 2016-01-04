$(function () {
    $('#hc-fig1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'PTSD-symptomatic by population'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'General population',
                'General population-women',
                'Iraq war veteran',
                'Prisoners-male',
                'Urban population',
                'Prisoners-female',
                
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
            name: 'Population',
            data: [3, 5, 17, 21, 31, 61]

      
        }]
    });
});
