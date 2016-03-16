$(function() {
  $('#hc-fig1').highcharts({
    title: {
      text: 'IDJJ Admission Rates of Youths for Court Evaluations by Region, SFY 1993-2014 ',
      x: -20 //center
    },
    subtitle: {
      text: 'per 100,000 youths 13 to 20 years of age',
      x: -20
    },
    xAxis: {
      categories: ['1993', '1994', '1995', '1996', '1997', '1998',
        '1999', '2000', '2001', '2002', '2003', '2004', '2005',
        '2006', '2007', '2008', '2009', '2010', '2011', '2012',
        '2013', '2014'
      ]
    },
    yAxis: {
      title: {
        text: 'Admission Rate per 100,000'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ' per 100,000'
    },
    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      verticalAlign: 'top',
      y: 80
    },
    series: [{
      name: 'Cook',
      data: [2.7, 2.0, 3.9, 5.0, 4.5, 5.5, 4.2, 5.1, 9.1, 10.3,
        14.3, 21.1, 15.2, 32.6, 35.1, 39.6, 36.7, 34.6, 31.0,
        33.5, 35.1, 30.3
      ]
    }, {
      name: 'Central',
      data: [26.0, 31.8, 41.9, 54.0, 65.9, 69.9, 74.7, 64.7, 69.9,
        78.6, 77.4, 71.3, 49.6, 42.2, 34.3, 29.6, 35.8, 39.9,
        43.8, 29.8, 30.1, 21.3
      ]
    }, {
      name: 'Northern (excluding Cook)',
      data: [15.7, 29.7, 40.5, 32.6, 31.7, 36.6, 29.3, 33.3, 40.0,
        32.7, 36.5, 38.1, 29.2, 19.2, 23.2, 18.8, 17.2, 16.5,
        12.3, 9.5, 4.7, 4.4
      ]
    }, {
      name: 'Southern',
      data: [17.0, 19.7, 44.1, 66.6, 59.3, 69.6, 61.3, 67.0, 61.6,
        57.8, 72.2, 80.0, 74.0, 51.4, 22.9, 25.8, 16.9, 17.2,
        13.3, 18.3, 12.4, 8.7
      ]
    }, {
      name: 'Illinois State Rate',
      data: [13.8, 23.9, 25.8, 31.9, 30.7, 33.8, 31.5, 31.3, 35.4,
        35.0, 39.0, 41.8, 32.0, 31.9, 29.9, 29.6, 28.2, 27.9,
        25.4, 23.2, 21.6, 17.7
      ]
    }]
  });
});



$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Percentage of Admissions for Court Evaluations Accounted for by Cook County, SFY 1995 - 2015'
    },

    xAxis: {
      categories: [
        '1995',
        '1996',
        '1997',
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',


      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percent'
      },
      labels: {
        format: '{value:.,0f} %'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">Cook County Percentage: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: false,
          format: '{y}%'
        }
      },
      column: {
        pointPadding: 0.1,
        borderWidth: 0
      }
    },
    series: [{
      name: "Cook County's Percentage of Illinois Admissions for Court Evaluations",
      data: [6.4, 7.3, 6.2, 6.8, 5.7, 6.7, 10.4, 11.9, 14.7, 20.2,
        18.8, 40.2, 46.1,
        52.4, 50.8, 48.3, 47.1, 55.5, 61.8, 64.9, 70.3
      ],



    }]
  });
});



$(function() {
  $('#hc-fig3').highcharts({

    chart: {
      type: 'column'
    },

    title: {
      text: 'Court Evaluation Admissions for Cook and non-Cook Counties by Offense Category'
    },
    subtitle: {
      text: 'SFY 1996 - 2005 vs. SFY 2006 - 2015'
    },
    xAxis: {
      categories: ['Cook 1996-2005', 'Cook 2006-2014',
        'Non-Cook 1996-2005', 'Non-Cook 2006-2014'
      ],

      events: {
        legendItemClick: function() {
          return false; // <== returning false will cancel the default action
        }
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>:</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      },
      series: {
        events: {
          legendItemClick: function() {
            return false;
          }
        }
      }
    },

    series: [{
      name: 'Illicit Drug',
      data: [27.5, 15.1, 4.7, 3.8]
    }, {
      name: 'Property',
      data: [28.1, 33.6, 55.6, 53.1]
    }, {
      name: 'Person',
      data: [41.7, 50, 28.6, 35.8]
    }, {
      name: 'Other Categories or Missing Data',
      data: [2.7, 1.3, 11.1, 7.2]
    }]
  });
});


$(function() {
  $('#hc-fig4').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'IDJJ Admisions for Court Evaluations from Cook and non-Cook Counties by Race'
    },
    subtitle: {
      text: 'SFY 1996 - 2005 vs SFY 2006 - 2015'
    },
    xAxis: {
      categories: ['Cook County 1996-2005', 'Cook County 2006-2015',
        'Non-Cook Counties <br/> 1996-2005',
        'Non-Cook Counties <br/> 2006-2015'
      ]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage of Admissions By Race'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}%<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
    series: [{
      name: 'Other or Unknown',
      data: [.1, .2, .6, .3]
    }, {
      name: 'Hispanic',
      data: [13.7, 12.4, 5.8, 8.8]
    }, {
      name: 'White',
      data: [8.6, 2.7, 58.4, 48.2]
    }, {
      name: 'Black',
      data: [77.6, 84.7, 35.2, 42.7]
    }]
  });
});
