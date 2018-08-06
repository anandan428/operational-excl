import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Chart from 'chart.js';
var Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class Home extends Component {
    render() {
        return (
            <div style={{ marginTop: '52px' }}>
                <div style={{ float: 'left', width: '47%' }}>
                    <Charts></Charts>
                </div>
                <div style={{ float: 'left', width: '47%' }}>
                    <StudyGroup></StudyGroup>
                </div>
                <div>
                    <DataTable></DataTable>
                </div>
            </div>
        )
    }
}

export default Home;

class Charts extends Component {
    componentDidMount() {
        this._intiainitializeChart();
    }
    _intiainitializeChart() {
        Highcharts.getOptions({
            global: {
                useUTC: false
            }
        });
        Highcharts.chart('graph', {
            chart: {
                type: 'pie',
                animation: Highcharts.svg,
                marginRight: 10
            },
            title: {
                text: 'Daily Cuts'
            },
            xAxis: {
                title: {
                    text: 'Days'
                },
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'No of Cuts'
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.createdDate}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.y}</span>Cuts<br/>'
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            "series": [
                {
                    "colorByPoint": true,
                    "data": [10, 20, 30, 30, 21]
                }
            ]
        });
    }
    render() {
        return (
            <div className="halfDiv" style={{ padding: '15px', maxHeight: '50%', overflow: 'hidden' }}>
                {/* <p className="card-header" style={{color: 'grey'}}>Cutting Machine Events</p> */}
                <div style={{ marginTop: '10px', backgroundColor: '#ededee' }} id="graph">
                </div>
            </div>
        )
    }
}

class StudyGroup extends Component {
    componentDidMount() {
        this._intiainitializeChart();
    }
    _intiainitializeChart() {
        Highcharts.getOptions({
            global: {
                useUTC: false
            }
        });
        Highcharts.chart('graph1', {
            chart: {
                type: 'pie',
                animation: Highcharts.svg,
                marginRight: 10
            },
            title: {
                text: 'Daily Cuts'
            },
            xAxis: {
                title: {
                    text: 'Days'
                },
                type: 'category'
            },
            yAxis: {
                title: {
                    text: 'No of Cuts'
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: '#808080'
                }]
            },
            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.createdDate}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.y}</span>Cuts<br/>'
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            "series": [
                {
                    "colorByPoint": true,
                    "data": [10, 20, 30, 30, 21]
                }
            ]
        });
    }
    render() {
        return (
            <div className="halfDiv" style={{ padding: '15px', maxHeight: '50%', overflow: 'hidden' }}>
                {/* <p className="card-header" style={{color: 'grey'}}>Cutting Machine Events</p> */}
                <div style={{ marginTop: '10px', backgroundColor: '#ededee' }} id="graph1">
                </div>
            </div>
        )
    }
}

class DataTable extends Component {
    render() {
        return (
            <div>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>
                                Machine
                            </th>
                            <th>
                                No of Cuts
                            </th>
                            <th>
                                UserID
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center">
                                <i className="fa fa-arrow-circle-up fa-2x" style={{ fontSize: '20px', color: 'green' }}></i>
                            </td>
                            <td>
                                Machine 1
                    {/* <a href="http://localhost:3001/">Machine 1</a> */}
                            </td>
                            <td>
                                15
                            </td>
                            <td>
                                A242231
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}



// import {
//     decrement,
//     decrementAsync,
//     increment,
//     incrementAsync
// } from '../../modules/counter'


// const Home = props => (
//     <div>
//         <h1>Home</h1>
//         <p>Count: {props.count}</p>

//         <p>
//             <button onClick={props.increment}>Increment</button>
//             <button onClick={props.incrementAsync} disabled={props.isIncrementing} >Increment Async</button>
//         </p>

//         <p>
//             <button onClick={props.decrement}>Decrementing</button>
//             <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
//         </p>

//         <button onClick={() => props.changePage()}>Go to about page via redux</button>
//     </div>
// )

// const mapStateToProps = ({ counter }) => ({
//     count: counter.count,
//     isIncrementing: counter.isIncrementing,
//     isDecrementing: counter.isDecrementing
// })

// const mapDispatchToProps = dispatch => bindActionCreators({
//     increment,
//     incrementAsync,
//     decrement,
//     decrementAsync,
//     changePage: () => push('/about-us')
// }, dispatch);

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Home)