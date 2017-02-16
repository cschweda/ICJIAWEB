$(function() {
  // Create the chart
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Recidivism of DPP Enrollees vs. Comparison Group'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Percent Recidivism'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [{
      name: "Offender Category",
      colorByPoint: true,
      data: [{
        name: "Women in DPP",
        y: 21.9,

      }, {
        name: "Women in Comparison Group",
        y: 27.8,

      }, {
        name: "Men in DPP",
        y: 37.6,

      }, {
        name: "Men in Comparison Group",
        y: 38.1,

      }]
    }],

  });
});
