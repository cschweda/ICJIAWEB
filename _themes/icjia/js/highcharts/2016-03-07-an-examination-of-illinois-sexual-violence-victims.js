$(function() {
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Victims served and hotline/crisis intervention contacts by Illinois rape crisis centers, Fiscal Years (FYs) 2011-2015'
    },
    subtitle: {
      text: "Sources: Illinois rape crisis centers and ICJIA's InfoNet system"
    },
    xAxis: {
      categories: ['FY11', 'FY12', 'FY13', 'FY14', 'FY15']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Persons served or contacted'
      }
    },
    plotOptions: {
      column: {
        stacking: 'normal'
      }

    },

    series: [{
      name: 'Children (0-17)',
      data: [4305, 4141, 4050, 3877, 3904]
    }, {
      name: 'Adults (18+)',
      data: [6322, 6212, 6174, 5953, 6103]
    }, {
      name: 'Hotline/Crisis Intervention contacts',
      type: 'spline',
      data: [8320, 7892, 7960, 8562, 9602]
    }]
  });
});



$(function() {
  $('#hc-fig2').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Child sexual abuse reports to child protective services and rape offenses reported to law enforcement in Illinois, Fiscal/Calendar Years (FY/CY) 2010-2014'
    },
    subtitle: {
      text: 'Sources: Illinois Department of Children and Family Services (DCFS) and Illinois State Police (ISP)'
    },
    xAxis: {
      categories: [
        'FY/CY 10',
        'FY/CY 11',
        'FY/CY 12',
        'FY/CY 13',
        'FY/CY 14'
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of cases or offenses reported'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {

        borderWidth: 0
      }
    },
    series: [{
      name: 'Cases of child sexual abuse reported to DCFS (reported by state fiscal year)',
      data: [7965, 7757, 8208, 7880, 7185]


    }, {
      name: 'Rapes reported to law enforcement (reported by calendar year, including adults and children)',
      data: [4533, 4383, 4330, 3960, 4089]


    }]
  });
});


$(function() {
  $('#hc-fig3').highcharts({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Victims served by offfender relationship to victim*, FY11 to FY15 (n=20,339)'
    },
    subtitle: {
      text: "Source: Illinois rape crisis centers and ICJIA's InfoNet System<br/> * Includes data for only victims whose offender relationship was known or 55% of victims"
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
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Stranger',
        y: 14.1
      }, {
        name: 'Intimate or<br/> ex-intimate partner',
        y: 10.4
      }, {
        name: 'Parent',
        y: 8.1
      }, {
        name: 'Spouse or <br/>partner of parent',
        y: 7.2
      }, {
        name: 'Other family or household members',
        y: 19.9
      }, {
        name: 'Position of authority/trust',
        y: 2.4
      }, {
        name: 'Friend/acquaintance/<br/>     neighbor/coworker',
        y: 37.9
      }]
    }]
  });
});
