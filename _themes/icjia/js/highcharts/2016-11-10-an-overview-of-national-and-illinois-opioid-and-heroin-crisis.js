$(function() {
  $('#container').highcharts({

    chart: {
      type: 'line'
    },

    data: {
      table: 'table1'
    },
    title: {
      text: 'Figure 1',
      x: -20 //center
    },
    subtitle: {
      text: 'National heroin and prescription opioid treatment admissions',
      x: -20
    },
    xAxis: {
      categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
    },
    tooltip: {
      formatter: function() {
        return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
      }
    },

    plotOptions: {
      series: {
        stacking: ''
      }
    },
  });
});
