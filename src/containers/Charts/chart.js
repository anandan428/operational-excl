import React, { Component } from 'react';
import './chart.css'
var ECharts = require('echarts');

class Chart extends Component {

    componentDidMount() {
        this._intializeMap();
    }

    _intializeMap() {
        let _mapOptions = this._prepareMapOptions();
        var chart = ECharts.init(document.getElementById(this.props.name));
        chart.setOption(_mapOptions);
        chart.on('click', (data) => {
            debugger;
            switch (this.props.graphClick) {
                case 'bar':
                    this.props.onClick({ data: {
                        name: data.name,
                        series: data.seriesIndex
                    }, groupName: this.props.name });
                    return;
            }
        });
    }

    _prepareMapOptions() {
        let _mapOptions = {};
        switch (this.props.type) {
            case 'doughnut':
                _mapOptions = {
                    tooltip: {
                        tigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',
                        data: this.props.mapdata.map(a => a.name)
                    },
                    series: [
                        {
                            name: this.props.name,
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: this.props.mapdata.map(dataRow => {
                                return (Object.assign({}, {
                                    name: dataRow.name,
                                    value: dataRow.employees.length,
                                    id: dataRow.id
                                }))
                            })
                        }
                    ]
                }
                break;
            case 'barchart':
                console.log(this.props.mapdata.map(a => a.name))
                _mapOptions = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['Total POC', 'POC as Project']
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: this.props.mapdata.map(a => a.name)
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: 'Total POC',
                            type: 'bar',
                            data: this.props.mapdata.map(a => a.totalPOC)
                        },
                        {
                            name: 'POC as Project',
                            type: 'bar',
                            data: this.props.mapdata.map(a => a.implementedPOC)
                        }
                    ]
                };
                break;
            default: break;
        }
        return _mapOptions;
    }

    render() {
        return (
            <div id={this.props.name} className={this.props.toBeClassName}>

            </div>
        )
    }
}

export default Chart;