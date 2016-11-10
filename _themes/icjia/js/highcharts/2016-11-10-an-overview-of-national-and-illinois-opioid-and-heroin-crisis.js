
$('#table_view1').hide()
$('#table1').hide()

$(function() {
  $('#hc-fig1').highcharts({

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

$('#table_view2').hide()
$('#table2').hide()


$(function() {
  $('#hc-fig2').highcharts({

    chart: {
      type: 'line'
    },

    data: {
      table: 'table2'
    },
    title: {
      text: 'Figure 2',
      x: -20 //center
    },
    subtitle: {
      text: 'National drug overdose deaths by drug, 1999-2014',
      x: -20
    },
    xAxis: {
      categories: ['2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012','2013','2014']
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
