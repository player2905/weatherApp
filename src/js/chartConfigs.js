import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    CHART_COLORS
} from './constants'

let arrow = document.createElement('img');
arrow.src = '../src/images/arrow.png';
let sun = document.createElement('img');
sun.src = '../src/images/sun.png';
let h1 = document.createElement('h1');
h1.value = 'jbjbjbj';

const chartConfigs = () => {
    const tempChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [{
                label: 'Temperature',
                //   data: res.dailyTemp,
                fill: 'start',
                backgroundColor: CHART_COLORS.blue,
                borderColor: CHART_COLORS.red,
                color: '#fff',
                tension: 0.1,
                datalabels: {
                    align: 'end',
                    // anchor: 'end'
                }    
            }]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    // display: false,
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                datalabels: {
                    padding: 10,
                },
                subtitle: {
                    display: true,
                    // text: day,
                    font: {
                        size: 24
                    },
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 24
                        }
                    },
                }
            },
        }
    }

    const moiChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [{
                label: 'Moisture',
                fill: 'start',
                backgroundColor: CHART_COLORS.purple,
                borderColor: CHART_COLORS.green,
                color: '#fff',
                tension: 0.1,
                // hidden: true
                pointHitRadius: 5,
            }, ]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    // display: false,
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    // text: day,
                    font: {
                        size: 24
                    },
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 24
                        }
                    },
                }
            },
        }
    }

    const windChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [{
                // label: {display: false},
                // data: res.dailyWind,
                // fill: 'start',
                // backgroundColor: CHART_COLORS.yellow,
                borderColor: CHART_COLORS.orange,
                color: '#fff',
                tension: 0.1,
                // hidden: true,
                pointHitRadius: 10,
                // rotation: res.dailyWindDir,
                pointStyle: [arrow],
                borderWidth: 0,
                
            },
            {   
                type: 'bar',
                label: 'Wind',
                // data: res.dailyWind,
                fill: 'start',
                backgroundColor: CHART_COLORS.blue,
                // borderColor: CHART_COLORS.orange,
                color: '#fff',
                tension: 0.1,
                // hidden: true,
                pointHitRadius: 10,
                // rotation: res.dailyWindDir,
                pointStyle: [arrow],
                datalabels: {
                    display: false,
                }
            }, ]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            showAllTooltips: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    // text: day,
                    font: {
                        size: 24
                    },
                },
                legend: {
                    display: false,
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 24
                        }
                    },
                }
            },
        }
    }

    const pressureChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: res.dailyTime,
            datasets: [{
                label: 'Pressure',
                // data: res.dailyPressure,
                fill: 'start',
                backgroundColor: CHART_COLORS.green,
                borderColor: CHART_COLORS.orange,
                color: '#fff',
                tension: 0.1,
                // hidden: true
                pointHitRadius: 5,
            }, ]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    // text: day,
                    font: {
                        size: 24
                    },
                },
                legend: {
                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 24
                        }
                    },
                }
            },
        }
    }

    const annotation1 = {
        type: 'line',
        borderColor: 'black',
        borderWidth: 0,
        label: {
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          content: 'Horizon',
          display: true
        },
        yScaleID: 'y',
        yMax: 0.1,
	    yMin:  0.1,

        xScaleID: 'x',
        xMax: 22,
	    xMin:  22,
      };

    const annotation2 = {
        type: 'line',
        borderColor: 'black',
        borderWidth: 0,
        label: {
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          content: '6:38',
          display: true
        },
        yScaleID: 'y',
        yMax: 0.1,
	    yMin:  0.1,

        xScaleID: 'x',
        xMax: 5,
	    xMin:  5,
      };

    const annotation3 = {
        type: 'line',
        borderColor: 'black',
        borderWidth: 0,
        label: {
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          content: '18:15',
          display: true
        },
        yScaleID: 'y',
        yMax: 0.1,
	    yMin:  0.1,

        xScaleID: 'x',
        xMax: 18,
	    xMin:  18,
      };

    const sunChartConfig = {
        type: 'line',
        color: '#fff',
        data: {
            // labels: sunCalk()[0],
            datasets: [
                {
                    label: 'Sunrise / Sunset',
                    // data: sunCalk()[1],
                    fill: false,
                    backgroundColor: CHART_COLORS.yellow,
                    borderColor: CHART_COLORS.orange,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true
                    pointStyle: false,
                },
                {
                    label: 'Sunrise / Sunset',
                    // data: sunCalk()[1].slice(0, 25), // 6:30 18:30
                    fill: 'origin',
                    backgroundColor: CHART_COLORS.yellow,
                    borderColor: CHART_COLORS.orange,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true
                    // pointStyle: false,
                    
                },
                {
                    label: 'Sunrise / Sunset',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
                    fill: false,
                    backgroundColor: CHART_COLORS.yellow,
                    borderColor: CHART_COLORS.grey,
                    color: '#fff',
                    tension: 0.1,
                    // hidden: true
                    pointStyle: false,
                },
                {
                    label: 'Sunrise / Sunset',
                    // data: [],
                    fill: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.0)',
                    borderColor: 'rgba(0, 0, 0, 0.0)',
                    color: '#fff',
                    tension: 0.1,
                    borderWidth: 3,
                    // hidden: true
                    pointStyle: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, sun],
                    pointHitRadius: 0
                }, 
        ]
        },
        options: {
            // responsive: false,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            hover: {mode: null},
            elements: {
                point: {
                    display: false,
                    borderWidth: 0,
                    radius: 1,
                    hitRadius: -1,
                    hoverRadius: 0,
                    howerBorderWidth: 0,
                    hover: false
                },
            },
            scales: {
                y: {
                    min: -1.5,
                    max: 1.5,
                    display: false,
                    beginAtZero: true,
                    // min: 0,
                    grid: {
                        display: false,
                    }
                },
                x: {
                    // min: 0,
                    // max: 20,
                    grid: {
                        display: false,
                    }
                }
            },
            plugins: {
                subtitle: {
                    display: true,
                    // text: day,
                    font: {
                        size: 24
                    },
                    
                },
                legend: {
                    display: false,

                    labels: {
                        // This more specific font property overrides the global property
                        font: {
                            size: 24
                        }
                    },
                },
                tooltip: {
                    enabled: false,
                },
                datalabels: {
                    display: false,
                },
                annotation: {
                    annotations: {
                        annotation1,
                        annotation2,
                        annotation3,
                    }
                }
            },
        }
    }

    return {
        tempChartConfig,
        moiChartConfig,
        windChartConfig,
        pressureChartConfig,
        sunChartConfig
    }
}

export default chartConfigs;