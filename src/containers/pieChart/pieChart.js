import React, { Component } from 'react';
import './pieChart.css'
var ECharts = require('echarts');

class DoughNut extends Component {

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
                data: this.props.legends
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
                    data: this.props.mapdata
                }
            ]
        }
        var chart = ECharts.init(document.getElementById(this.props.name));
        chart.setOption(_mapOptions);
        chart.on('click', (data) => {
            this.props.onClick({data: data.data, groupId: this.props.groupId, groupName: this.props.name})
        });
    }

    render() {        
        return (
            <div id={this.props.name} className={this.props.toBeClassName}>

            </div>
        )
    }
}

export default DoughNut;