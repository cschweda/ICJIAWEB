$(function () {
    $('#hc-fig1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Juvenile Arrests, Detention, and Corrections Admissions in Illinois, 2014 by Race'
        },
        xAxis: {
            categories: ['Population (youth 10-17)', 'Arrests (n=36,196)', 'Detention Admissions (n=12,039)', 'Correction Admissions (n=878)']
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: 'Percentage by Race'
            },
            labels: {
                format: '{value}% '
            }
        },
        plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'black',
                       format: "{point.y:,.0f}%"

                    }
                }
            },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>:  {point.percentage:.0f}%<br/>',
            shared: true
        },
        series: [{
            name: 'Other',
            data: [6, 1, 1, 12],
            color: 'DarkSeaGreen'
        },
        {
            name: 'Black',
            data: [18, 61, 64, 65],
            color: 'LightBlue'

        },{
            name: 'White',
            data: [76, 38, 35, 23 ],
            color: '#FFDAB9'
        }  ]
    });
});
