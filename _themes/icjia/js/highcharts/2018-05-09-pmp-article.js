$(function() {
  $('#hc-fig3').highcharts({
setOptions({
    lang: {
        thousandsSep: ''
    }
});

chart('container', {
    title: {
        text: null
    },

    subtitle: {
        text: null
    },

    yAxis: {
        title: {
            text: null 
            
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
			itemStyle: {
      			width: "100px",
            textOverflow: null
    }},

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2008
        }
    },

    series: [{
        name: 'Total Opioid Prescriptions Filled',
        data: [7255683, 7533330, 7711516, 7682165, 9027623, 8429711, 9087044, 8709276, 7584657]
    }, {
        name: 'Number of Individuals Filling at least 1 Opioid Prescription',
        data: [2175878, 2197546, 2233229, 2172422, 2392930, 2267498, 2321555, 2363737, 1993870]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'bottom',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

     }]
  });
});