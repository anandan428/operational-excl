import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css';
import DoughNut from '../../containers/pieChart/pieChart';
import Table from '../../containers/table/table';
import {
    getAllCompetences
} from '../../modules/competence'
import CompetenceApi from '../../api/mockHome.api';


class Home extends Component {

    componentDidMount(){
        CompetenceApi
    }

    doughClick = (data) => {
        this.props.changePage({
            pathname: 'details',
            state: {
                data: data
            }
        });
    }

    render() {
        return (
            <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                <DashCard title="Competence" onClick={(data) => this.doughClick(data)}/>
                <DashCard title="POC" onClick={(data) => this.doughClick(data)}/>
            </div>
        )
    }
}

class DashCard extends Component {


    render() {
        let data = [
            {
                name: 'Total',
                value: 100
            },
            {
                name: 'IOT',
                value: 13
            },
            {
                name: 'Machine learning',
                value: 13
            },
            {
                name: 'Azure',
                value: 13
            },
            {
                name: 'RPA',
                value: 13
            },
            {
                name: 'UI/ UX',
                value: 13
            }
        ]
        return (
            <div style={{marginBottom: '2px'}}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <DoughNut name={this.props.title} toBeClassName={'relative floatLeft mediumSize'} onClick={this.props.onClick}/>
                    <Table name = {this.props.title} data = {data} onClick = {this.props.onClick} className = {'homeClass'}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllCompetences: () => getAllCompetences(),
    changePage: (config) => push(config)
}, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Home);







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