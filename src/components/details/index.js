import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Table from '../../containers/table/table';
import { getRequestedData } from '../../modules/resCompetence';
import {
    onRouteUpdate,
    ROUTE_UPDATE_RESOURCE
} from '../../modules/routingInfo'
import pocService from '../../services/poc.service';
import './detail.css'

class Details extends Component {

    componentDidMount() {
        if (this.props.doughData.hasOwnProperty('groupId')) {
            this.props.getRequestedData(this.props.state.groupId, this.props.state.data.id);
        } else if (this.props.barData) {

        } else {
            this.props.changePage({
                pathname: '/'
            });
        }
    }

    renderHeaderName = () => {
        if (this.props.state) {
            return (
                <p style={{ fontWeight: '600' }}>{this.props.doughData.groupName + '-' + this.props.doughData.data.name}</p>
            );
        } else if (this.props.barData.data) {
            return (
                <p style={{ fontWeight: '600' }}>{this.props.barData.data}</p>
            )
        }
        return null;
    }

    onRowClick = (data) => {
        this.props.updateRouterData(data.ResourseID);
        this.props.changePage({
            pathname: 'resource'
        })
    }

    renderResourceDetails = (header) => {
        if (this.props.requestedData.length > 0) {
            return (
                <div>
                    {this.renderHeaderName()}
                    <Table data={this.props.requestedData} headers={header} className={'defaultClass'} appliedClassName={false} onClick={(data) => this.onRowClick(data)} />
                </div>
            )
        }
        return null;
    }

    renderPOCDetails = (header) => {
        debugger;
        if (this.props.barData.hasOwnProperty('data')) {
            if (this.props.barData.data) {
                let intData = pocService.getDataForName(this.props.barData.data, (this.props.barData.chartType === 'POC' ? this.props.pocList : this.props.eventList));
                if (intData.length > 0) {
                    let impData = pocService.implementedPOCList(intData[0].pocList)
                    if (intData[0].pocList.length > 0) {
                        return (
                            <div>
                                {this.renderHeaderName()}
                                <Table data={intData[0].pocList} headers={header} className={'defaultClass'} appliedClassName={false} />
                                <p className={'pocClass'}>POC -> Project</p>
                                <Table data={impData} headers={header} className={'defaultClass'} appliedClassName={false} />
                            </div>
                        )

                    }
                }
            }
        }
        return null;
    }

    render() {
        let resHeader = [
            {
                title: 'VCN ID',
                field: 'ResourseID'
            },
            {
                title: 'Resource Name',
                field: 'ResourseName'
            },
            {
                title: 'Resource Role',
                field: 'Role'
            },
            {
                title: 'Competence Level',
                field: 'CompetenceLevel'
            },
            {
                title: 'Activity Manager',
                field: 'ActivityManagerName'
            }
        ];
        let pocHeader = [
            {
                title: 'Name',
                field: 'name'
            },
            {
                title: 'Description',
                field: 'description'
            },
            {
                title: 'Technology',
                field: 'technology'
            }
        ];
        return (
            <div style={{ padding: '10px', width: '100%' }}>
                {this.renderResourceDetails(resHeader)}
                {this.renderPOCDetails(pocHeader)}
            </div>
        )
    }
}

const mapStateToProps = ({ resourcecompetence, routingInfo, competence }) => ({
    doughData: routingInfo.doughData,
    barData: routingInfo.barData,
    requestedData: resourcecompetence.requestedData,
    pocList: competence.poc,
    eventList: competence.event
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getRequestedData: (learningGroupID, techID) => getRequestedData(learningGroupID, techID),
    changePage: (config) => push(config),
    updateRouterData: (data) => onRouteUpdate({
        type: ROUTE_UPDATE_RESOURCE,
        payload: data
    })
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);