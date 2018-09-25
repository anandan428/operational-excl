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

    goToHome = () => {
        this.props.changePage('/');
        this.props.updateMenu('');
    }

    render() {
        console.log(this.props.pathname);
        return (
            <div className="menu-container">
                <div style={{ position: 'sticky', top: '72px' }}>
                    <nav role="navigation">
                        <ol className="navLinks">
                            <li className="firstLi">
                                <a href="javascript:void(0)" className = { (this.props.pathname === '/' && !this.props.menuitem) ? 'navHere' : ''} onClick = {() => this.goToHome()}>Home</a>
                            </li>
                            <li>
                                <i className="fas fa-book"></i>October Volume 20
                                <ol className="insideOl">
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
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <i className="fas fa-book"></i>Archived
                                <ol className="insideOl">
                                <li>
                                        <a href="javascript:void(0)" className = { (this.props.menuitem === 'studygroup') ? 'navHere' : ''} onClick = {() => this.props.updateMenu('studygroup')}>Jul volume 19</a>
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
