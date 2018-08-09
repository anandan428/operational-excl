import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css';
import DoughNut from '../../containers/pieChart/pieChart';
import Table from '../../containers/table/table';
import {
    getAllCompetences,
    addResourcePerCompetence
} from '../../modules/competence'
import competenceService from '../../services/competence.service';
import genricMethod from '../../services/genericMethod.service';
// import CompetenceApi from '../../api/mockHome.api';


class Home extends Component {

    state = {
        graphData: []
    }

    componentDidUpdate(nextProps) {
        debugger;
        if (this.props.resourcePerCompetence.length > 0) {
            if (!genricMethod.objectdeepCompare(nextProps.resourcePerCompetence, this.props.resourcePerCompetence))
                this.setState({ graphData: Object.assign([], this.props.resourcePerCompetence) });
        }
    }


    doughClick = (data) => {
        this.props.changePage({
            pathname: 'details',
            state: {
                data: data
            }
        });
    }

    renderDashboard = () => {
        if (this.props.resourcePerCompetence.length > 0) {
            return (
                this.state.graphData.map(data =>
                    <DashCard title={data.name} onClick={(data) => this.doughClick(data)} />
                )
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                {this.renderDashboard()}
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
            <div style={{ marginBottom: '2px' }}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <DoughNut name={this.props.title} toBeClassName={'relative floatLeft mediumSize'} onClick={this.props.onClick} />
                    <Table name={this.props.title} data={data} onClick={this.props.onClick} className={'homeClass'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ details, competence }) => ({
    allCompetences: competence.competences,
    allDetails: details.details,
    resourcePerCompetence: competence.resourcePerCompetence
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllCompetences: () => getAllCompetences(),
    changePage: (config) => push(config),
    addResourcePerCompetence: (data) => addResourcePerCompetence(data)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


