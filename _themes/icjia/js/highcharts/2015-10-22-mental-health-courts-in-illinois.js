$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Figure 2: Mental Health Court Participant Primary Diagnosis <sup>*</sup>'
    },
    xAxis: {
      categories: ['MHC8', 'MHC4', 'MHC1']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Bipolar',
      data: [356, 139, 269]
    }, {
      name: 'Depression',
      data: [144, 306, 77]
    }, {
      name: 'Mood Disorder',
      data: [0, 120, 0]
    }, {
      name: 'Psychotic/Schizoaffective',
      data: [333, 231, 231]
    }, {
      name: 'Anxiety/PTSD',
      data: [11, 19, 38]
    }, {
      name: 'Not Specified',
      data: [156, 185, 385]
    }]
  });
});



$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Figure 1: Age of Mental Health Court Clients'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) ||
              'black'
          }
        }
      }
    },
    series: [{
      name: "Brands",
      colorByPoint: true,
      data: [{
        name: "Age 17-25",
        y: 26
      }, {
        name: "Age 26-35",
        y: 25
      }, {
        name: "Age 36-45",
        y: 23
      }, {
        name: "46 and older",
        y: 22
      }, {
        name: "Missing",
        y: 4
      }, ]
    }]
  });
});
