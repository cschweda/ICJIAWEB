$(function () {
    Highcharts.chart('hc-fig1', {
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
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
 
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents'
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
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Drug treatment',
        data: [37, 28, 11, 6, 8, 4, 2, 2, 1, 1, 1]

    }, {
        name: 'Alcohol treatment',
        data: [70, 11, 8, 3, 5, 1, 1, 1, 0, 0, 1]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [ 'Alcohol & one or more drugs',
            'More than one drug',
            'Cannabis',
            'Heroin',
            'Alcohol',
            'Opiates/Analgesics',
            'Indicated no major drug problem',
            'Amphetamines',
            'Other sedatives/tranquilizers',
            'Hallucinogens',
            'Cocaine',
         ],   
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'bottom',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        	name: 'Reported "major problem" substance(s)',
        data: [40, 21, 14, 9, 8, 3, 2, 2, 1, 1, 1]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig3', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Only a few times', '1-5 times per week', 'About every day', '1-3 times per month', '0 times in past 12-months'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'bottom',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Reported frequency of prescription drug use',
        data: [30, 22, 20, 18, 11]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig4', {
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
            'Drug dealer',
            'Friend or relative',
            'Doctor or nurse',
            'Internet',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:0f} %</b></td></tr>',
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
    		name: 'Methods of obtainin prescription drugs',
        data: [62, 60, 37, 5]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig5', {
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
            'Swallowed',
            'Snorted',
            'Drank',
            'Chewed',
            'Sublingual',
            'Parachuted',
            'Smoked',
            'Injected',
            'Buccal',
            'Rectal',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:0f} %</b></td></tr>',
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
        name: 'Reported methods of prescription drug use',
        data: [74, 41, 36, 34, 15, 11, 10, 10, 3, 1]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig6', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Desirable effects',
            'To relax',
            'Enhance effects of other drugs',
            'Ease/come down from other drugs',
            'Avoid or relieve withdrawal symptoms',
            'Curious',
            'Concentrate better',
            'Improve sexual experience',
            'Help stop other drug use',
            'Help stay awake',
            'To explore',
            'Self treatment for physical conditions',
            'Self treatment for mental health issues',
            'Pain',
            'Avoid positive drug tests',
            'Peer pressure',
            'Health benefits',
            ],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of respondents',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'bottom',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Year 1800',
       name: 'Percentage reporting reasons for prescription drug use',
        data: [66, 64, 42, 33, 31, 27, 26, 26, 25, 20, 19, 19, 18, 16, 10, 10, 7]
   
        }]
    });
});


$(function () {
    Highcharts.chart('hc-fig7', {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Pleasant high', 'Drowsiness', 'Floating feeling', 'Dreamlike state', 'Change in sex drive', 'Stimulated', 'Dry mouth', 'Heaviness', 'More talkative', 'Light-headedness', 'Trouble remebering things', 'Dizziness', 'Heart racing', 'Slurred speech', 'Increased appetite', 'Less focused', 'Clenched jaw'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percentage reporting effects of prescription drug use',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'bottom',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Reported effects of prescription drug use',
        data: [70,58,48,41,37,31,31,26,26,24,24,23,23,23,22,21,20]
   
        }]
    });
});