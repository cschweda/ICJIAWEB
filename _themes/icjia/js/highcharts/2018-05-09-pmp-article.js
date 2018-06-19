(function() {

  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

  Highcharts.chart('hc-fig3', {

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
      }
    },

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

  })
})();


(function() {

  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

  Highcharts.chart('hc-fig4', {

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
    		}
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2008
        }
    },

    series: [{
        name: '3+ Prescribers OR 3+ Pharmacies',
        data: [225632, 245326, 254454, 256768, 303021, 262931, 298690, 360042, 322957]
    }, {
        name: '3+ Prescribers AND 3+ Pharmacies',
        data: [55394, 56539, 55335, 53493, 60743, 50369, 54592, 61285, 43618]
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

})
})();

	
(function() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });
  
    Highcharts.chart('hc-fig5', {
  

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
                }
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2008
            }
        },
    
        series: [{
            name: '6+ Prescribers OR 6+ Pharmacies',
            data: [3848, 2945, 3039, 2826, 3220, 2336, 2874, 3737, 2733]
        }, {
            name: '6+ Prescribers AND 6+ Pharmacies',
            data: [1718, 1052, 872, 696, 743, 482, 525, 507, 269]
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

})
})();


(function() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });
  
    Highcharts.chart('hc-fig7', {
  
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
    		}
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2008
        }
    },

    series: [{
        name: 'Hydrocodone',
        data: [4262828, 4569375, 4838110, 5283083, 5297637, 4951527, 5204414, 4501193, 3497895]
    }, {
        name: 'Other Opioids',
        data: [1492267, 1456266, 1342137, 724012, 752087, 718307, 787236, 788935, 626317]
    }, {
        name: 'Tramadol',
        data: [214, 270, 576, 21452, 1416567, 1368029, 1586497, 1742995, 1559501]
    }, {
        name: 'Codeine',
        data: [860034, 847462, 812282, 833372, 738985, 621267, 656961, 751645, 658061]
    }, {
    		name: 'Oxycodone Short Acting',
        data: [264449, 284700, 319906, 367960, 395556, 389218, 444580, 502746, 465476]
    }, {
    		name: 'Fentanyl Long Acting',
        data: [259405, 262749, 260858, 274472, 266826, 229476, 249966, 252709, 212863]
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

})
})();

(function() {

    Highcharts.setOptions({
      lang: {
        thousandsSep: ','
      }
    });
  
    Highcharts.chart('hc-fig8', {
  
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
    		}
        
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2013
        }
    },

    series: [{
        name: 'Heroin',
        data: [583, 711, 844, 1007]
    }, {
        name: 'Fentanyl',
        data: [58, 92, 234, 606]
    }, {
        name: 'Any Natural/Semi-Synthetic Opioid',
        data: [184, 251, 271, 370]
    }, {
        name: '4-ANPP',
        data: [0, 0, 0, 219]
    }, {
    		name: 'Furanyl Fentanyl',
        data: [0, 0, 0, 188]
    }, {
    		name: 'Methadone',
        data: [92, 106, 99, 121]
    }, {
    		name: 'Tramadol',
        data: [24, 29, 31, 56]
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

})
})();