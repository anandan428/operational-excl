import React, { Component } from 'react';
import './pieChart.css'
var ECharts = require('echarts');

class DoughNut extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this._intializeMap();
    }

    _intializeMap() {
        let _mapOptions = {
            tooltip: {
                tigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['IOT', 'Machine Learning', 'Azure', 'RPA', 'UI/ UX']
            },
            series: [
                {
                    name: 'Competence',
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
                    data: [
                        { value: 335, name: 'IOT' },
                        { value: 310, name: 'Machine Learning' },
                        { value: 234, name: 'Azure' },
                        { value: 135, name: 'RPA' },
                        { value: 1548, name: 'UI/ UX' }
                    ]
                }
            ]
        }
        var chart = ECharts.init(document.getElementById(this.props.name));
        chart.setOption(_mapOptions);
    }

    render() {
        
        return (
            <div id={this.props.name} className={this.props.toBeClassName}>

            </div>
        )
    }
}

export default DoughNut;