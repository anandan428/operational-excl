import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Table from '../../containers/table/table';
import { getRequestedData } from '../../modules/resCompetence'

class Details extends Component {

    componentDidMount() {
        if(this.props.state){
            this.props.getRequestedData(this.props.state.data.groupId, this.props.state.data.data.id);
        } else {
            this.props.changePage();
        }
        
    }

    renderHeaderName = () => {
        if(this.props.state){
            return(
                <p style={{fontWeight: '600'}}>{this.props.state.data.groupName + '-' + this.props.state.data.data.name}</p>
            );
        } else {
            return null;
        }
    }

    onRowClick = (data) => {
        debugger;
        console.log(data);
    }

    renderSelectedArea = (header) => {
        if(this.props.requestedData.length > 0){
            return (
                <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                    {this.renderHeaderName()}
                    <Table data={this.props.requestedData} headers={header} className = {'defaultClass'} onClick = {(data) => this.onRowClick(data)}/>
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

const mapStateToProps = ({ router, resourcecompetence }) => ({
    state: router.location.state,
    requestedData: resourcecompetence.requestedData
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getRequestedData: (learningGroupID, techID) => getRequestedData(learningGroupID, techID),
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);