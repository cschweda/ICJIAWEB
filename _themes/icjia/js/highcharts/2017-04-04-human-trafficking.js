$(function () {
    Highcharts.chart('hc-fig1', {
	  chart: {
		type: 'column'
	  },
	  title: {
		text: ''
	  },
	  subtitle: {
		text: ''
	  },
	  xAxis: {
		categories: [
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
		],
		crosshair: true
	  },
	  yAxis: {
		min: 0,
		title: {
		  text: ''
		}
	  },
	  tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		  '<td style="padding 0:><b>{point.y:.1f} </b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	  },
	  plotOptions: {
		column: {
		  pointPadding: 0.2,
		  borderWidth: 0
		}
	  },
	  series: [{
		name: 'FBI',
		data: [58, 65, 86, 146, 126, 120, 132, 167, 126, 183, 306]
	
	  }, {
		name: 'ICE/HIS',
		data: [0, 0, 216, 322, 299, 348, 432, 566, 651, 722, 894]
    }]
    });
});
