$(function () {

	Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});
    $('#hc-fig1').highcharts({
        title: {
            text: '<strong>Figure 1</strong><br>Number of data-reporting Illinois law enforcement agencies, 2005-2015',
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2005', '2006', '2007', '2008', '2009', '2010',
                '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            max: 1100,

        startOnTick: true,
        endOnTick:true,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            },
            ]
        },
        tooltip: {
            valueSuffix: ''
        },

        series: [{
            name: 'Agencies',
            data: [1119,1123,1132,1036,1033,789,754,751,744,732,741]
        }]
    });
});
