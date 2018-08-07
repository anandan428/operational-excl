import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


class Details extends Component {

    state = {
        componentName: ''
    }
    
    componentDidUpdate(prepProps){
        debugger;
        if(prepProps.state.area !== this.props.state.area){
            this.state.componentName = this.props.state.area;
        }
    }

    render() {
        return (
            <div>
                <p>
                    {/* {this.props.state.area} */}
                    {this.state.componentName}
                </p>
            </div>
        )
    }
}

const mapStateToProps = ({ router }) => ({
    state: router.location.state
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);