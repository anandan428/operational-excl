import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css';
import DoughNut from '../../containers/pieChart/pieChart';
import Table from '../../containers/table/table';

class Home extends Component {

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
                this.props.resourcePerCompetence.map(gdata =>
                    <DashCard title={gdata.name} groupId = {gdata.id} onClick={(data) => this.doughClick(data)} gdata = {gdata.competence}/>
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

    getLegendsandData = () => {
        let legends = [];
        let mapdata = [];
        for (const dataRow of this.props.gdata) {
            mapdata.push(Object.assign({}, {
                name: dataRow.name,
                value: dataRow.employees.length,
                id: dataRow.id
            }));
            legends.push(dataRow.name);
        }
        return {
            legends: legends,
            mapdata: mapdata
        }
    }

    render() {
        let {legends, mapdata} = this.getLegendsandData();
        return (
            <div style={{ marginBottom: '2px' }}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <DoughNut name = {this.props.title} groupId = {this.props.groupId} toBeClassName={'relative floatLeft mediumSize'} onClick={this.props.onClick} legends = {legends} mapdata = {mapdata}/>
                    <Table name={this.props.title} data={mapdata} onClick={this.props.onClick} className={'homeClass'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ resourcecompetence }) => ({
    resourcePerCompetence: resourcecompetence.resourcePerCompetence
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (config) => push(config)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


