import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Table from '../../containers/table/table';


class Details extends Component {

    state = {
        componentName: 'Nothing selected',
        area: 'Nope'
    }

    componentDidMount() {
        if (this.props.state) {
            this.setState({ componentName: this.props.state.data.area });
        } else {
            this.props.changePage();
        }
    }

    render() {
        let header = [
            {
                title: 'VCN ID',
                field: 'ResourceID'
            },
            {
                title: 'Resource Name',
                field: 'ResourceName'
            },
            {
                title: 'Resource Role',
                field: 'ResourceRole'
            },
            {
                title: 'Competence Level',
                field: 'CompetenceLevel'
            },
            {
                title: 'Activity Manager',
                field: 'ActivityManager'
            }
        ];
        let data = [
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 2',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Nandan',
                'ResourceID': 'A242230'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 3',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'SPOC',
                'ResourceName': 'Kiran',
                'ResourceID': 'A242231'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 3',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Bala',
                'ResourceID': 'A260617'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 1',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Nain',
                'ResourceID': 'A234567'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 2',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Sachin',
                'ResourceID': 'A245037'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 2',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Barun',
                'ResourceID': 'A222983'
            },
            {
                'ActivityManager': 'Jhon',
                'CompetenceLevel': 'Level 3',
                'LearningGroupId': 'IOT',
                'ResourceRole': 'TM',
                'ResourceName': 'Shakul',
                'ResourceID': 'A242239'
            }
        ];
        return (
            <div style={{ marginTop: '52px', marginLeft: '220px', padding: '10px' }}>
                <p style={{fontWeight: '600'}}>{this.state.componentName}</p>
                <Table data={data} headers={header} className = {'defaultClass'}/>
            </div>
        )
    }
}

const mapStateToProps = ({ router }) => ({
    state: router.location.state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);