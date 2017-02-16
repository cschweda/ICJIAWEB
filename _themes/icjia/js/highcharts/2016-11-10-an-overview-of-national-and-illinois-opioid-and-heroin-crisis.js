

// $('#table1').hide()
// $('#table2').hide()

$(function() {
  $('#hc-fig1').highcharts({

    chart: {
      type: 'line'
    },

    data: {
      table: 'table1'
    },
    title: {
      text: '',
      x: -20 //center
    },
    subtitle: {
      text: '',
      x: -20
    },
    xAxis: {
      categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
    },
    tooltip: {
      formatter: function() {
        return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
      }
    },

    plotOptions: {
      series: {
        stacking: ''
      }
    },
  });
});





$(function() {
  $('#hc-fig2').highcharts({

    chart: {
      type: 'line'
    },

    data: {
      table: 'table2'
    },
    title: {
      text: '',
      x: -20 //center
    },
    subtitle: {
      text: '',
      x: -20
    },
    xAxis: {
      categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012','2013','2014']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
    },
    tooltip: {
      formatter: function() {
        return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
      }
    },

    plotOptions: {
      series: {
        stacking: ''
      }
    },
  });
});



(function primary() {
  var $report = $('#report');
  // Prepare data
  var data = [{"fips":17001,"value":5.28},
{"fips":17003,"value":0.00},
{"fips":17005,"value":0.00},
{"fips":17007,"value":2.21},
{"fips":17009,"value":0.00},
{"fips":17011,"value":20.74},
{"fips":17013,"value":0.00},
{"fips":17015,"value":7.76},
{"fips":17017,"value":9.20},
{"fips":17019,"value":8.79},
{"fips":17021,"value":6.89},
{"fips":17023,"value":0.00},
{"fips":17025,"value":8.73},
{"fips":17027,"value":0.00},
{"fips":17029,"value":2.16},
{"fips":17031,"value":7.98},
{"fips":17033,"value":0.00},
{"fips":17035,"value":0.00},
{"fips":17037,"value":3.35},
{"fips":17039,"value":14.21},
{"fips":17041,"value":12.11},
{"fips":17043,"value":5.54},
{"fips":17045,"value":13.07},
{"fips":17047,"value":0.00},
{"fips":17049,"value":10.35},
{"fips":17051,"value":5.26},
{"fips":17053,"value":0.00},
{"fips":17055,"value":2.96},
{"fips":17057,"value":6.40},
{"fips":17059,"value":0.00},
{"fips":17061,"value":0.00},
{"fips":17063,"value":11.83},
{"fips":17065,"value":0.00},
{"fips":17067,"value":0.00},
{"fips":17069,"value":0.00},
{"fips":17071,"value":16.24},
{"fips":17073,"value":0.00},
{"fips":17075,"value":4.05},
{"fips":17077,"value":5.73},
{"fips":17079,"value":0.00},
{"fips":17081,"value":12.21},
{"fips":17083,"value":0.00},
{"fips":17085,"value":0.00},
{"fips":17087,"value":0.00},
{"fips":17089,"value":3.41},
{"fips":17091,"value":10.65},
{"fips":17093,"value":5.03},
{"fips":17095,"value":2.23},
{"fips":17097,"value":7.25},
{"fips":17099,"value":14.57},
{"fips":17101,"value":0.00},
{"fips":17103,"value":9.98},
{"fips":17105,"value":12.64},
{"fips":17107,"value":7.73},
{"fips":17115,"value":5.47},
{"fips":17117,"value":10.03},
{"fips":17119,"value":12.75},
{"fips":17121,"value":18.48},
{"fips":17123,"value":0.00},
{"fips":17125,"value":0.00},
{"fips":17127,"value":0.00},
{"fips":17109,"value":0.00},
{"fips":17111,"value":8.04},
{"fips":17113,"value":4.74},
{"fips":17129,"value":9.34},
{"fips":17131,"value":0.00},
{"fips":17133,"value":0.00},
{"fips":17135,"value":4.00},
{"fips":17137,"value":0.00},
{"fips":17139,"value":8.00},
{"fips":17141,"value":2.25},
{"fips":17143,"value":4.49},
{"fips":17145,"value":0.00},
{"fips":17147,"value":0.00},
{"fips":17149,"value":0.00},
{"fips":17151,"value":0.00},
{"fips":17153,"value":0.00},
{"fips":17155,"value":0.00},
{"fips":17157,"value":10.42},
{"fips":17159,"value":7.33},
{"fips":17161,"value":2.41},
{"fips":17165,"value":0.00},
{"fips":17167,"value":11.83},
{"fips":17169,"value":0.00},
{"fips":17171,"value":0.00},
{"fips":17173,"value":0.00},
{"fips":17163,"value":5.84},
{"fips":17175,"value":0.00},
{"fips":17177,"value":12.70},
{"fips":17179,"value":6.99},
{"fips":17181,"value":0.00},
{"fips":17183,"value":10.52},
{"fips":17185,"value":0.00},
{"fips":17187,"value":0.00},
{"fips":17189,"value":24.34},
{"fips":17191,"value":7.14},
{"fips":17193,"value":0.00},
{"fips":17195,"value":4.10},
{"fips":17197,"value":9.90},
{"fips":17199,"value":5.19},
{"fips":17201,"value":20.58},
{"fips":17203,"value":0.00},];

    // Initiate the chart
    $('#hc-fig3').highcharts('Map', {


      title: {
        text: ''
      },

      subtitle: {
        text: ''
      },

      mapNavigation: {
        enabled: true,
        enableMouseWheelZoom: false,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

    colorAxis: {
      min: 0,
      max: 30,
      minColor: '#F5F5F5',
      maxColor: '#FF4500',


    },
         //   colorAxis: {
              //  min: 1,
               // max: 1000,
               // type: 'logarithmic',
                //minColor: '#efecf3',
               // maxColor: '#990041'
        //    },
      series: [{
        data: data,
        enableMouseTracking: true,
        mapData: Highcharts.maps['countries/us/us-il-all'],
        joinBy: 'fips',
        name: 'County',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        }
      }]
    });
  })();
