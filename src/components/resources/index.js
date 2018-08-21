import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import competenceService from '../../services/competence.service'
import Table from '../../containers/table/table';


class Resources extends Component {

    state = {
        tableData: [],
        resourceName: ''
    }

    componentDidMount() {
        if (this.props.state) {
            if (this.props.allDetails.length > 0) {
                let filteredData = competenceService.getResourceDeatils(this.props.state, this.props.allDetails);
                if (filteredData.length > 0) {
                    this.setState({ tableData: filteredData });
                    this.setState({ resourceName: filteredData[0].ResourseName });
                } else {
                    alert('No data');
                    this.props.changePage();
                }
            }
            else {
                alert('No data');
                this.props.changePage();
            }
        } else {
            this.props.changePage();
        }
    }

    renderHeader = () => {
        let header = [
            {
                title: 'Learning Type',
                field: 'LearningGroupName'
            },
            {
                title: 'Technology Name',
                field: 'TechName'
            },
            {
                title: 'Role',
                field: 'Role'
            },
            {
                title: 'Competence Level',
                field: 'CompetenceLevel'
            }
        ]
        if (this.state.tableData.length > 0) {
            return (
                <div>
                    <p style={{ fontWeight: '600' }}>{this.state.resourceName + '-' + this.props.state}</p>
                    <Table data={this.state.tableData} headers={header} />
                </div>);
        }
        return null;
    }

    render() {
        return (
            <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                {this.renderHeader()}
            </div>
        );
    }
}


const mapStateToProps = ({ details, routingInfo }) => ({
    state: routingInfo.resourceData,
    allDetails: details.details
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Resources);