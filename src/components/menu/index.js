import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeID } from '../../modules/menu';
import './menu.css';


class Menu extends React.Component {

    constructor(props){
        super(props);
    }

    onNavLink = (event, id) => {
        this.props.changeID(id);
        event.preventDefault();
        console.log(event);
    }

    render() {
        return (
            <div className="menu-container">
                <div style={{ position: 'sticky', top: '72px' }}>
                    <nav role="navigation">
                        <ol className="navLinks">
                            <li>
                                <a href="/" onClick={(event) => this.onNavLink(event, 0)} className={ this.props.currentId === 0 ? 'navHere': ''}>Home</a>
                            </li>
                            <li>
                                <a href="/" onClick={(event) => this.onNavLink(event, 1)} className={ this.props.currentId === 1 ? 'navHere': ''}>Some Page</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ menu }) => ({
    currentId: menu.currentID
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changeID: (id) => changeID(id)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
