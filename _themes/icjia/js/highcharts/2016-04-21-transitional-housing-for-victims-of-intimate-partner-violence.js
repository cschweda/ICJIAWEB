$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: '<strong>Figure 1</strong><br>Domestic Violence Victim Service Needs Identified at Intake<br>(N = 89,888)'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'category',
      labels: {
        rotation: -65,
        style: {
          fontSize: '12px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    },
    yAxis: {
      min: 0,

      labels: {
        enabled: false
      },

      title: {
        text: ''
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      pointFormat: '<b>{point.y:.0f} %</b>'
    },
    series: [{
      name: '',
      data: [
        ['Emotional', 68.0],
        ['Legal Advocacy', 66.0],
        ['Crisis Intervention', 33.0],
        ['Referrals', 28.0],
        ['Legal Services', 16.0],
        ['Shelter', 14.0],
        ['Housing', 9.0],
        ['Financial', 6.0],
        ['Employment', 6.0],
        ['Education', 4.0],
        ['Transportation', 3.0],
        ['Medical Advocacy', 2.0],
        ['Therapy', 2.0],
        ['Medical Services', 2.0],
        ['Child Care', 2.0],
        ['Lockup\/Board up', 0.0]
      ],
      dataLabels: {
        enabled: true,
        align: 'top',
        format: '{point.y:.0f}%', // one decimal
        y: 0,
        x: -9,
        style: {
          fontSize: '10px',
          fontFamily: 'Verdana, sans-serif'
        }
      }
    }]
  });
});



$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: '<strong>Figure 2</strong><br>Relationship Between Housing/Shelter Needs and Financial and Employment Needs<br>(N = 89,888)'
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      categories: [
        'Needed Financial Assistance',
        'Needed Employment Assistance'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      max: 40,
      tickInterval: 5,
      title: {
        text: ''
      },
      labels: {
        formatter: function() {
          return this.value + '%';
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:14px; font-weight: 700;padding-bottom: 15px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
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
    series: [{
      name: 'Did not need housing\/shelter',
      data: [2.0, 2.4]

    }, {
      name: 'Needed housing\/shelter',
      data: [27.6, 21.4]

    }]
  });
});
