$(function() {
  $('#hc-fig1').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Prisoners-women (n=163)', 'Urban hospital (n=4,113)', 'War veteran-Iraq (n=4.9 mil)', 'Prisoners-men (n=613)', 'Jail detainees-men (n=117)', 'Jail detainees-women (n=810)', 'General pop-women (1,538)', 'General pop-men (n=1,414)'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percentage in population',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
    	series: {
      	pointWidth: 25
      },
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'bottom',
        verticalAlign: 'bottom',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Percent prevalence',
        data: [61, 30, 23, 21, 21, 13, 5, 3]
    }, {
        name: '',
        data: []
    }, {
        name: '',
        data: []
    }]
  });
});
