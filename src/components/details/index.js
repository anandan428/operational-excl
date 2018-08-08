import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


class Details extends Component {

    state = {
        componentName: 'Nothing selected'
    }
    
    componentDidMount(){
        if(this.props.state){
            this.setState({componentName: this.props.state.data.area})
        } else {
            this.props.changePage();
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
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);