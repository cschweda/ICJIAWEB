$(function () {
    $('#hc-fig1').highcharts({  
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
           categories: [
           'Received news of a serious injury, life-threatening illness, or unexpected death of a loved one',
           'Been robbed or mugged (or attempted)',
           'Sexually assaulted or sexually abused*',
           'Feared you might be killed or seriously injured',
           'Been in a serious accident',
           'Seen/handled dead bodies',
           'Loved one was murdered or killed by a drunk driver*',
           'Seen someone seriously injured or killed',
           'Been attacked and seriously injured without a weapon*'
           ],
          title: {
               text: null
           }
       },
       yAxis: {
           min: 0,
           title: {
               text: '',
               align: 'high'
           },
           labels: {
               overflow: 'justify'
           }
       },
       
       tooltip: {
           valueSuffix: '%'
       },
       
      plotOptions: {
           bar: {
               dataLabels: {
                   enabled: true,
                    format: '{point.y:.f}%'
      
           }
               }
       },
        legend: {
           layout: 'vertical',
           align: 'right',
           verticalAlign: 'top',
           x: -40,
           y: 80,
           floating: true,
           borderWidth: 1,
           backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
           shadow: true,
           enabled: false
       },
       credits: {
           enabled: false
     
    
       },
       series: [{
           name: 'Percent who experienced traumatic event',
           data: [88, 79, 78, 71, 67, 63, 61, 54, 52]
        }]
    });
  });


Function();
 ('#hc-fig2').highcharts({
            chart: {
                type: 'boxplot'
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: ['Pre-test', 'Post-test'],
                title: {
                    text: ''
                }
            },
            yAxis: {
                title: {
                    text: 'PCL-5 Scores'
                },
                plotLines: [{
                    value: 932,
                    color: 'red',
                    width: 1,
                    label: {
                        text: '',
                        align: 'center',
                        style: {
                            color: 'gray',
                            enabled: false
                        }
                    }
                }]
            },
            plotOptions: {
                boxplot: {
                    fillColor: '#F0F0E0',
                    lineWidth: 2,
                    medianColor: '#0C5DA5',
                    medianWidth: 3,
                    stemColor: '#A63400',
                    stemDashStyle: 'dot',
                    stemWidth: 1,
                    whiskerColor: '#3D9200',
                    whiskerLength: '20%',
                    whiskerWidth: 3
                },
            },
            series: [{
                name: 'PCL-5 Scores',
                data: [
                    [0, 24, 41, 58.5, 73],
                    [0, 20.3, 26, 37.8, 61]
                ]
            }]
        });
});



newFunction();
function newFunction() {
    Function();
    ('#hc-fig3').highcharts({
        chart: {
            type: 'boxplot'
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ['Pre-test', 'Post-test'],
            title: {
                text: 'Test'
            }
        },
        yAxis: {
            title: {
                text: 'Aggression Scores'
            },
            plotLines: [{
                value: 932,
                color: 'red',
                width: 1,
                label: {
                    text: '',
                    align: 'center',
                    style: {
                        color: 'gray',
                        enabled: false
                    }
                }
            }]
        },
        plotOptions: {
            boxplot: {
                fillColor: '#F0F0E0',
                lineWidth: 2,
                medianColor: '#0C5DA5',
                medianWidth: 3,
                stemColor: '#A63400',
                stemDashStyle: 'dot',
                stemWidth: 1,
                whiskerColor: '#3D9200',
                whiskerLength: '20%',
                whiskerWidth: 3
            },
        },
        series: [{
            name: 'Aggression Scores',
            data: [
                [41, 61.5, 99.5, 120.5, 175],
                [29, 57.75, 86, 113, 174]
            ]
        }]
    });
    ;
}
