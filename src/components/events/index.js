import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './event.css';
import Table from '../../containers/table/table';
import {
    onRouteUpdate,
    ROUTE_UPDATE_DOUGH,
    ROUTE_UPDATE_BAR
} from '../../modules/routingInfo'
import Chart from '../../containers/Charts/chart';
import genericMethod from '../../services/genericMethod.service';
import pocService from '../../services/poc.service'

class EventPage extends Component {

    barClick = (data) => {
        this.props.updateRouterData(data.data.name, 'bar', 'EVENT');
        this.props.changePage({
            pathname: 'details'
        });
    }

    renderPOCDashboard = () => {
        let header = [{
            title: 'Event Namae',
            field: 'name'
        },
        {
            title: 'Total Ideas',
            field: 'totalPOC'
        },
        {
            title: 'Solution accepted by business',
            field: 'implementedPOC'
        }];
        if (this.props.eventList.length > 0) {
            let data = pocService.prepareDataForBar(this.props.eventList);
            return (<DashCard chartType={'barchart'} title={'EVENT'} gdata={data} headers={header} onClick={(data) => this.barClick(data)} graphClick={'bar'} toBeClassName={'height400'} />);
        }
        return null;
    }


    render() {
        return (
            <div style={{ padding: '10px', width: '100%' }}>
                {this.renderPOCDashboard()}
            </div>
        )
    }
}

class DashCard extends Component {


    render() {
        return (
            <div style={{ marginBottom: '2px' }}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <Chart type={this.props.chartType} name={this.props.title} groupId={this.props.groupId} toBeClassName={'relative floatLeft ' + (this.props.toBeClassName ? this.props.toBeClassName : 'mediumSize')} onClick={this.props.onClick} mapdata={this.props.gdata} graphClick={this.props.graphClick} />
                    <Table name={this.props.title} data={this.props.gdata} onClick={this.props.onClick} className={'homeClass'} appliedClassName={true} pk={'Id'} headers={this.props.headers} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ competence }) => ({
    eventList: competence.event
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (config) => push(config),
    updateRouterData: (data, chart, chartType) => onRouteUpdate({
        type: chart === 'dough' ? ROUTE_UPDATE_DOUGH : ROUTE_UPDATE_BAR,
        payload: {
            data: data,
            chartType: chartType
        }
    })
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventPage);


