// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }



Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts() {
    Highcharts.chart('chart-container-covid-retirement-1', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1LrhT-1GUoyx09dXh233ObpOxNGzVRIG7DJcouVipYrw'
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return this.point.name + ': <b>' + this.y + '%</b>';
            }
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart('chart-container-covid-retirement-2', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1LrhT-1GUoyx09dXh233ObpOxNGzVRIG7DJcouVipYrw',
            googleSpreadsheetWorksheet: 2
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            tickLength: 5,
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 60
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return this.point.name + ': <b>' + this.y + '%</b>';
            }
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}