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

class Details extends Component {

    componentDidMount() {
        if (this.props.state.hasOwnProperty('groupId')) {
            this.props.getRequestedData(this.props.state.groupId, this.props.state.data.id);
        } else {
            this.props.changePage({
                pathname: '/'
            });
        }

    }

    renderHeaderName = () => {
        if (this.props.state) {
            return (
                <p style={{ fontWeight: '600' }}>{this.props.state.groupName + '-' + this.props.state.data.name}</p>
            );
        } else {
            return null;
        }
    }

    onRowClick = (data) => {
        this.props.updateRouterData(data.ResourseID);
        this.props.changePage({
            pathname: 'resource'
        })
    }

    renderSelectedArea = (header) => {
        if (this.props.requestedData.length > 0) {
            return (
                <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                    {this.renderHeaderName()}
                    <Table data={this.props.requestedData} headers={header} className={'defaultClass'} onClick={(data) => this.onRowClick(data)} />
                </div>
            )
        }
        return null;
    }

    render() {
        let header = [
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
        return (
            <div>
                {this.renderSelectedArea(header)}
            </div>
        )
    }
}

const mapStateToProps = ({ resourcecompetence, routingInfo }) => ({
    state: routingInfo.doughData,
    requestedData: resourcecompetence.requestedData
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