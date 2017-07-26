$(function() {
  $('#hc-fig1').highcharts({
    chart: {
        type: 'bar'
    },
    title: {
        text: 'PTSD symptoms reported by respondents having probable PTSD (n=136)'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: ['Trouble remembering parts of experience', 'Emotionally numb', 'reliving the experience', 'Jumpy/easily startled', 'Feeling future will be cut short', 'Having physical reaction to a reminder', 'Irritable/angy outbutsts', 'Avoiding activities', 'Difficulty concentrating', 'Dreams of experience', 'Loss of interest in things', 'Trouble falling/staying asleep', 'Avoid thinking of experience', 'Feeling distant from people', 'Upset when reminded', 'Memories, thoughts, images', 'Being super alert'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' percent'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
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
        name: '',
        data: [38, 41, 42, 43, 50, 52, 53, 54, 55, 56, 57, 63, 65, 67, 68, 71, 73]
    }, {
        name: '',
        data: []
    }, {
        name: '',
        data: []
    }]
  });
});

$(function() {
  $('#hc-fig2').highcharts({
    chart: {
        type: 'column'
    },
    title: {
        text: 'Percentage of sample with probable PTSD and troubled by alcohol or drug problems (n=111)'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Not at all',
            'Slightly',
            'Moderately',
            'Considerably',
            'Extremely'
           
        ],
        crosshair: true
    },
    yAxis: {
        min: 0, 
        max: 100,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
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
        name: 'Alcohol problems',
        data: [61, 8, 9, 12, 10]

    }, {
        name: 'Drug problems',
        data: [43, 9, 12, 12, 24]

    }, {
        name: '',
        data: []

    }, {
        name: '',
        data: []

    }]
  });
});
