import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';


class About extends Component {

    test = () => {
        debugger;
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>About Us</h1>
                <p>Hello World</p>
                <button onClick = {() => this.test()}>Test </button>
            </div>
        )
    }
}

const mapStateToProps = ({ router }) => ({
    router: router,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About)
