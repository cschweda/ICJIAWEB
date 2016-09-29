$(function () {
    var chart1 = $('#hc1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            marginTop : '25',
            marginLeft: '0'
        },
        title: {
            text: 'Chart Title 1',
  align: 'center',
  verticalAlign: 'top',
  margin: 0,
  floating: true,
  style: {

    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none'
  }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   20.38],
                ['IE',       56.33],
                ['Chrome', 24.03],

                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});


$(function () {
    var chart2 = $('#hc2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            marginTop : '25'
        },
        title: {
            text: 'Chart Title 2',
  align: 'center',
  verticalAlign: 'top',
  margin: 0,
  floating: true,
  style: {

    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none'
  }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   20.38],
                ['IE',       56.33],
                ['Chrome', 24.03],

                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});


$(function () {
    $('#hc3').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            marginTop : '25'
        },
        title: {
            text: 'Chart Title 3',
  align: 'center',
  verticalAlign: 'top',
  margin: 0,
  floating: true,
  style: {

    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none'
  }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   20.38],
                ['IE',       56.33],
                ['Chrome', 24.03],

                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});

$(function () {
    $('#hc4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            marginTop : '25'
        },
        title: {
            text: 'Chart Title 4',
  align: 'center',
  verticalAlign: 'top',
  margin: 0,
  floating: true,
  style: {

    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none'
  }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   20.38],
                ['IE',       56.33],
                ['Chrome', 24.03],

                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});



$(function () {
    $('#hc5').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null,
            marginTop : '25'
        },
        title: {
            text: 'Chart Title 5',
  align: 'center',
  verticalAlign: 'top',
  margin: 0,
  floating: true,
  style: {

    color: '#FFF',
    fontSize: '18px',
    fontWeight: 'normal',
    textTransform: 'none'
  }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: 0,
                endAngle: 360,
                center: ['50%', '55%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   20.38],
                ['IE',       56.33],
                ['Chrome', 24.03],

                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});
