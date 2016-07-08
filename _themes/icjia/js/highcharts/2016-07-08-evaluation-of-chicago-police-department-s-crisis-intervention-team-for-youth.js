$(function() {
  $('#hc-fig1').highcharts({
    title: {
      text: 'Changes in Knowledge of CIT-Y Objectives Over Time (n=26)',
      x: -20 //center
    },
    subtitle: {
      text: '',
      x: -20
    },
    xAxis: {
      categories: ['Pre-', 'Post-', 'Follow-up']
    },
    yAxis: {
      title: {
        text: 'Average Number of Correct Responses'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ''
    },

    series: [{
      name: 'Identification',
      data: [1.61, 1.83, 1.69]
    }, {
      name: 'Risk and Crisis De-escalation',
      data: [3.11, 4.42, 4.11]
    }, {
      name: 'Service Call Disposition',
      data: [2.96, 5.42, 4.73]
    }, ]
  });
});
