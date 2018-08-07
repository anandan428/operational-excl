import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css';
import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync
} from '../../modules/counter';
import DoughNut from '../../containers/pieChart/pieChart';
import Table from '../../containers/table/table';
var ECharts = require('echarts');


class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                <DashCard title="Competence"/>
                <DashCard title="POC" />
            </div>
        )
    }
}

class DashCard extends Component {


    render() {
        let data = [
            {
                name: 'Total',
                count: 100
            },
            {
                name: 'IOT',
                count: 13
            },
            {
                name: 'Machine learning',
                count: 13
            },
            {
                name: 'Azure',
                count: 13
            },
            {
                name: 'RPA',
                count: 13
            },
            {
                name: 'UI/ UX',
                count: 13
            }
        ]
        return (
            <div style={{marginBottom: '2px'}}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <DoughNut name={this.props.title} toBeClassName={'relative floatLeft mediumSize'} />
                    <Table data={data}/>
                </div>
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