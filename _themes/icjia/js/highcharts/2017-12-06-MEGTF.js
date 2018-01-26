$(function() {
    Highcharts.chart('hc-fig1', {
    chart: {
        type: 'column'
  
    },
 
 
    title: null,
    
    xAxis: {
        categories: ['MEG/TF (n=1,477)',  'non-MEG/TF (n=21,716)']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percentage of arrests'
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ('blue') || 'gray'
            }
        }
    },
    legend: {
        align: 'bottom',
        x: -30,
        verticalAlign: 'bottom',
        y: 25,
        floating: false,
        enabled: false,
        backgroundColor: ('green') || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}%<br/>'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                style: {
                            fontWeight: 'bold'
                        },
                        formatter: function() {
                            return this.y +'%'},
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
        }
    },
    series: [{
        name: 'Manufacture/Delivery',
        data: [53, 14]
    }, {
        name: 'Possession',
        data: [44, 69]
    }, {
        name: 'Other drug',
        data: [3, 17]

     }]
  });
});

$(function() {
    Highcharts.chart('hc-fig2', {
    chart: {
        type: 'bar'
   
    },
 
   
    title: null, 
    
    xAxis: {
        categories: ['Technical assistance and training', 'Asset seizures', 'Staffing and recruitment', 'Monitoring and evaluation', 'Goals, objectives, performance indicators', 'Funding', 'Coordination of MEG/TF activities', 'Communication', 'Targeted decisions/enhanced investigation tactics', 'Computerized information databases', 'Prosecutor involvement', 'Written interagency agreements'],
        labels:
        {
   	
    
        },
        title: {
            text: null,
        }
        
      
    },
    yAxis: {
        min: 0,
        max: 5,
        tickInterval: 1,
        title: {
            text: 'Fidelity to MEG/TF Critical Elements',
            align: 'high'
        },
        labels: {
            overflow: 'justify',
 
        },
       
        
    },
    tooltip: {
        valueSuffix: null,
        
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
        enabled: false,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Fidelity to MEG/TF Critical Elements',
        data: [4.5, 4.5, 4.3, 4.4, 4.6, 4.2, 4.5, 4.5, 4.6, 4.4, 4.1, 4.5]

     }]
  });
});
