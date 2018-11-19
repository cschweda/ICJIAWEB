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
