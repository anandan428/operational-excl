import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync
} from '../../modules/counter';
var ECharts = require('echarts');


class Home extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this._intializeChart();
    }

    _intializeChart(){
        var chartOptions = {
            xAxis: [{
              type: 'value'
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              type: "line",
              data: [[0, 4], [1, 3], [2, 2], [3, 4], [4, 1], [5, 2]],
            }],
          };
        var chart = ECharts.init(document.getElementById("charts"));
        chart.setOption(chartOptions);
    }

    render() {
        return (
            <div style={{marginTop: '52px', marginLeft: '220px', padding: '2px'}}>
               <div id="charts" style={{width: '100px', height: '100px'}}></div> 
            </div>
        )
    }
}

export default Home;

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