$(function () {
    Highcharts.chart('hc-fig1', {
        chart: {
            type: 'column'
        },
        title: {
        text: 'Drug threat rankings by drug type'
    },
    xAxis: {
        labels: {
        style: {      
        textOverflow: 'none'}}, 
        categories: ['Heroin (n=77)', 'Prescription drugs (n=77)', 'Methamphetamine (n=74)', 'Marijuana (n=77)', 'Powder cocaine (n=71)', 'Crack cocaine (n=73)'],
        tickWidth:50, 
                tickLength:0 
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
       },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
       series: {
       dataLabels: {
       enabled: true,
       format: '{y}%'
       }
       },
       column: {
		   stacking: 'percent'
        }
    },
    series: [{
        name: 'Greatest threat',
        data: [62, 47, 37, 30, 13, 11]
    }, {
        name: 'Moderate threat',
        data: [21, 36, 15, 40, 45, 38]
    }, {
        name: 'Lowest threat',
        data: [17, 17, 49, 30, 42, 51]     
    }]
    });
});
