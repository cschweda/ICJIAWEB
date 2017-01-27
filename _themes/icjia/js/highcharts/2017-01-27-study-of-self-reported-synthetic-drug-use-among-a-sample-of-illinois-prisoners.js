$(function () {
    Highcharts.chart('hc-fig1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Availability of synthetic drugs by type, reported by police chiefs and county sheriffs (n=82)'
        },
        xAxis: {
            categories: ['Synthetic marijuana', 'Synthetic cathinones']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
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
         format: '{point.y:.0f}%'
        },
        },
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'High availability',
            data: [21, 7]
        }, {
            name: 'Moderate availability',
            data: [34, 28]
        }, {
            name: 'Low availability',
            data: [25, 34]
        }, {
            name: 'Unknown',
            data: [20, 31]
        }]
    });
});

$(function () {
    Highcharts.chart('hc-fig2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Percent of responding police chiefs and county sheriffs indicating an increase in synthetic drugs (n=82)'
        },
       xAxis: {
            categories: ['Transportation', 'Distribution', 'Demand', 'Availability'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels:{format: '{value} %'},
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {
                      align: 'center',
            verticalAlign: 'bottom',
                   borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Synthetic cathinones',
            data: [48, 45, 46, 39]
        }, {
            name: 'Synthetic marijuana',
            data: [47, 41, 40, 34]
          }]
    });
});





$(function () {
    Highcharts.chart('hc-fig3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Percent of respondents who reported synthetic drug use within 12 months prior to incarceration (n=204)'
             },
        xAxis: {
            categories: [
                'Synthetic marijuana',
                'Synthetic cathinones/Bath salts',
                'Both',
                            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
            },
        labels: {format: '{value} %'},},
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
            dataLabels: {
        enabled: true,
         format: '{point.y:.0f}%',
         pointPadding: 0.2,
                borderWidth: 0
            }}
        },
        series: [{
            name: 'Reported use',
            data: [29, 1, 6]



        }]
    });
});



$(function () {
    Highcharts.chart('hc-fig4', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Reported methods of synthetic cathinones or bath salt use in the twelve months prior to incarceration (n=38)'
        },
       xAxis: {
            categories: ['Injecting', 'Snorting', 'Oral', 'Smoking'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels: {
                format: '{value} %', overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {

            enabled: false
        },
        series: [{
          name: "Method",           data: [13, 55, 11, 50]
              }]
    });
});



$(function () {
    Highcharts.chart('hc-fig51', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Reported reasons for synthetic cathinone/bath salt use within 12 months prior to incarceration (n=38)'
        },
       xAxis: {
            categories: ['Curiosity', 'Avoid positive drug tests', 'Relax', 'Like the effect', 'Explore', 'Stop other drug use', 'Improve sexual experience', 'Stay awake/energy'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels:{format: '{value} %'},
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {
                      align: 'center',
            verticalAlign: 'bottom',
                   borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true,
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Synthetic cathinones/bath salts',
            data: [70, 35, 23, 20, 23, 5, 10, 23]
          }]
    });
});



$(function () {
    Highcharts.chart('hc-fig52', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Reported reasons for synthetic marijuana use within 12 months prior to incarceration (n=198)'
        },
       xAxis: {
            categories: ['Curiosity', 'Avoid positive drug tests', 'Relax', 'Like the effect', 'Explore', 'Stop other drug use', 'Improve sexual experience', 'Stay awake/energy'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels:{format: '{value} %'},
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {
                      align: 'center',
            verticalAlign: 'bottom',
                   borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true,
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Synthetic marijuana',
            data: [54, 47, 26, 21, 9, 12, 5, 3]
          }]
    });
});



$(function () {
    Highcharts.chart('hc-fig61', {
        chart: {
            type: 'column'
        },
        legend: {enabled:false},
        title: {
            text: 'Reported methods of obtaining synthetic drugs within 12 months prior to incarceration - Synthetic cathinones/bath salts (n=38)'
        },

        xAxis: {
            categories: [
                'Friends/relatives',
                'Gas station',
                'Head shop',
                'Internet',
                'Drug dealer',

            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
            },labels:{format: '{value} %'},
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
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%',
           },},
        },
        series: [{
          name: "Drug source",
            data: [60, 40, 29, 18, 32]


        }]
    });
});



$(function () {
    Highcharts.chart('hc-fig62', {
        chart: {
            type: 'column'
        },
       legend:{
       enabled: false,
       }, title: {
            text: 'Reported methods of obtaining synthetic drugs within 12 months prior to incarceration - Synthetic marijuana (n=198)'
        },
        xAxis: {
            categories: [
                'Friends/relatives',
                'Gas station',
                'Head shop',
                'Internet',
                'Drug dealer',
                         ],
            crosshair: true
        },
        yAxis: {
           labels:{format: '{value} %'}, min: 0,
            title: {
               labels:{format: '{value} %'},
               text: 'Percent',

            },
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
                borderWidth: 0,
                 dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%',
            },},
        },
        series: [{
name:"Drug source",
            data: [37, 54, 29, 13, 21]


        }]
    });
});



$(function () {
    Highcharts.chart('hc-fig71', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Reported effects from use of synthetic drugs within the 12 months prior to incarceration-Synthetic cathinones/Bath salts (n=38)'
        },
       xAxis: {
            categories: ['Excessive sweating', 'Dizzy/lightheaded', 'Pleasant high', 'Dry mouth', 'Dreamlike state', 'Nervous/anxious', 'Floating feeling', 'Heart racing', 'Nauseous/vomitted', 'Drowsy/tired', 'Panicked', 'Unable to control laughter', 'More talkative than usual', 'Change in sex drive', 'Clenched jaw', 'Stimulated/energetic'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels:{format: '{value} %'},
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {
                      align: 'center',
            verticalAlign: 'bottom',
                   borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            enabled: false,
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Synthetic cathinones (n=40)',
            data: [40, 31, 55, 42, 26, 47, 24, 58, 11, 13, 29, 21, 42, 32, 29, 47]

          }]
    });
});


$(function () {
    Highcharts.chart('hc-fig72', {
        chart: {
            type: 'bar'
        },

        title: {
            text: 'Reported effects from use of synthetic drugs within the 12 months prior to incarceration-Synthetic marijuana (n=198)'
        },
       xAxis: {
            categories: ['Excessive sweating', 'Dizzy/lightheaded', 'Pleasant high', 'Dry mouth', 'Dreamlike state', 'Nervous/anxious', 'Floating feeling', 'Heart racing', 'Nauseous/vomitted', 'Drowsy/tired', 'Panicked', 'Unable to control laughter', 'More talkative than usual', 'Change in sex drive', 'Clenched jaw', 'Stimulated/energetic'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent',
                align: 'high'
            },
            labels:{format: '{value} %'},
        },
        tooltip: {
            valueSuffix: ' percent'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.0f}%'
                }
            }
        },
        legend: {
                      align: 'center',
            verticalAlign: 'bottom',
                   borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            enabled: false,
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Synthetic marijuana (n=198)',
            data: [11, 55, 44, 39, 26, 35, 35, 34, 33, 30, 29, 26, 15, 14, 10, 8]

          }]
    });
});
