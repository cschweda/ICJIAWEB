$(function() {
  $('#hc-fig1').highcharts({
  chart: {
    type: 'column'
  },
  title: {
    text: ''
  },
  subtitle: {
    text: ''
  },
  legend: {
  	enabled: false
  },
  xAxis: {
    categories: [
      'Drug selling',
      'Gun shots, shootings',
      'Gangs, groups causing trouble',
      'Violence among residents',
      'Violent crime',
      'Non-violent crime',
      'Unsafe to walk'
    ],
    title: {
    	text: null
    }
 
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Percent',
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.f} %</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0,
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.y:.f}%',
        }
      }
    },
  series: [{
    name: '% of respondents',
    data: [48, 47, 44, 42, 41, 39, 33] 

   }]
  });
});

$(function() {
  $('#hc-fig2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['Woodlawn', 'South Shore', 'Roseland', 'Rogers Park', 'Logan Square', 'Hermosa', 'North Lawndale', 'Gage Park', 'Austin', 'Albany Park', 'East Garfield Park', 'Englewood', 'Brighton Park', 'West Garfield Park', 'Greater Grand Crossing', 'Humboldt Park']
    },
    credits: {
        enabled: false
    },
    plotOptions: {
    	series: {
      	dataLabels: {
        enabled: true
        }
      }
    },
    legend: {
    	layout: 'vertical',
      align: 'bottom',
      verticalAlign: 'bottom',
      enabled: false,
      
    },
    series: [{
        name: 'Ranking',
        data: [11, 5, 4, 4, 4, 3, 2, 1, -1, -1, -2, -3, -4, -6, -6, -11]
		
    }]
  });
});
