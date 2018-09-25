import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import './menu.css';
import { changeID } from '../../modules/menu';


class Menu extends React.Component {


    onNavLink = (event, id) => {
        this.props.changeID(id);
        event.preventDefault();
    }

    renderAnnouncementList = () => {
        if (this.props.competence.length > 0) {
            if (this.props.competence[0].TechList.length > 0) {
                return (
                    this.props.competence[0].TechList.map(data =>
                        <li>
                            <a href="javascript:void(0)">{data.Name}</a>
                        </li>
                    )
                )
            }
        }
        return null;
    }

    goToHome = (updateItem) => {
        if (this.props.pathname !== '/')
            this.props.changePage('/');
        this.props.updateMenu(updateItem);
    }

    goToEvents = () => {
        this.props.changePage('hackathon');
        this.props.updateMenu('hackathon');
    }

    render() {
        return (
            <div className="menu-container">
                <div style={{ position: 'sticky', top: '72px' }}>
                    <nav role="navigation">
                        <ol className="navLinks">
                            <li className="firstLi">
                                <a href="javascript:void(0)" className={(this.props.pathname === '/' && !this.props.menuitem) ? 'navHere' : ''} onClick={() => this.goToHome('')} style={{}}>Home</a>
                            </li>
                            <li>
                                <i className="fas fa-book"></i>October Volume 20
                                <ol className="insideOl">
<<<<<<< HEAD
                                    <li >
                                    <a href="javascript:void(0)" className = { (this.props.menuitem === 'studygroup') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('studygroup')}>Technical Articals</a>
                                    </li>
                                    <li >
                                       <a href="javascript:void(0)" className = { (this.props.menuitem === 'poc') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('poc')}>General Articals</a>
                                    </li>
                                    <li >
                                    <a href="javascript:void(0)" className = { (this.props.menuitem === 'poc') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('poc')}>Spot Awards</a>
                                    </li>
                                    <li >
                                    <a href="javascript:void(0)" className = { (this.props.menuitem === 'poc') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('poc')}>Did you Know</a>
                                    </li>
                                    <li >
                                        <a href="javascript:void(0)" className = { (this.props.menuitem === 'poc') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('poc')}>Annoncements</a>
=======
                                    <li>
                                        <a href="javascript:void(0)" className={(this.props.menuitem === 'studygroup') ? 'navHere' : ''} onClick={() => this.goToHome('studygroup')}>Study Group</a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)" className={(this.props.menuitem === 'poc') ? 'navHere' : ''} onClick={() => this.goToHome('poc')}>POC</a>
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
                                    </li>
                                </ol>
                            </li>
                            <li>
<<<<<<< HEAD
                                <i className="fas fa-book"></i>Archived
                                <ol className="insideOl">
                                <li>
                                        <a href="javascript:void(0)" className = { (this.props.menuitem === 'studygroup') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('studygroup')}>Jul volume 19</a>
=======
                                <i className="fab fa-elementor"></i>Events
                                <ol className="insideOl">
                                    <li>
                                        <a href="javascript:void(0)" className={(this.props.menuitem === 'hackathon') ? 'navHere' : ''} onClick={() => { this.goToEvents('hackathon'); }}>Hackathon</a>
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ competence, location, menu }) => ({
    competence: competence.competences,
    pathname: location ? location.pathname : '/',
    menuitem: menu.currentID
});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (pageName) => push(pageName),
    updateMenu: (id) => changeID(id)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
