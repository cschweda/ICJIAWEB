function TableFunction() {
  $('#hc-table1').toggle();
}


$(function() {

  $('#hc-table1').hide();
  $('#hc-fig1').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: '<strong>Figure 1</strong><br>Extent of illegal drug distribution in drug task force jurisdictions (n=19)'
    },
    xAxis: {
      categories: ['Cannabis',	'Heroin',	'Prescription drugs',	'Cocaine',	'Crack cocaine']
},
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
    },
    tooltip: {
      formatter: function() {
        return this.x + '</b>: <b>' + this.y + '</b>%<br>' + this.series.name;
      }
    },
            series: [



            {
            name: 'Minor problem',
            data: [0,0,11,11,16]
        },
        {
            name: 'Neutral',
            data: [5,0,5,0,0]
        },{
            name: 'Moderate problem',
            data: [37,5,37,37,37]
        },
        {
        name: 'Serious problem',
        data: [58,95,47,53,47]
    }
        ],
    plotOptions: {
      column: {
        stacking: 'percent',
        dataLabels: {
          enabled: true,
          format: '{point.y:.0f}%',
          color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
          style: {
            textShadow: '0 0 3px black'
          }
        }
      }
    },
  });
})();
