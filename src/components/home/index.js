import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './home.css';
import Table from '../../containers/table/table';
import {
    onRouteUpdate,
    ROUTE_UPDATE_DOUGH,
    ROUTE_UPDATE_BAR
} from '../../modules/routingInfo'
import Chart from '../../containers/Charts/chart';
import genericMethod from '../../services/genericMethod.service';
import pocService from '../../services/poc.service'

class Home extends Component {
    state = {
        id: ''
    }

<<<<<<< HEAD


    renderArtContent = () => {
        if(this.state.id){
            debugger;
        return (this.props.artList.map(data => {
            if (data.Id === this.state.id) {
                return (
                    <div>
                        <article>
                            <h1>Google Chrome</h1>
                            <p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>
                        </article>
                    </div>
                )
            }
        }));}
        return null;
    }

    getArticleContent = (id) => {
        debugger;
        // this.setState({id: id});
        
=======
    barClick = (data) => {
        this.props.updateRouterData(data.data.name, 'bar', 'POC');
        this.props.changePage({
            pathname: 'details'
        });
    }

    renderStudyDashboard = () => {
        if (this.props.resourcePerCompetence.length > 0) {
            return (
                this.props.resourcePerCompetence.map(gdata =>
                    <DashCard chartType={'doughnut'} title={gdata.name} groupId={gdata.id} gdata={gdata.competence} graphClick={'dough'} onClick={(data) => this.doughClick(data)} />
                )
            )
        } else {
            return null;
        }
    }

    renderPOCDashboard = () => {
        let header = [{
            title: 'Department',
            field: 'name'
        },
        {
            title: 'Total POC',
            field: 'totalPOC'
        },
        {
            title: 'POC -> Project',
            field: 'implementedPOC'
        }];
        if (this.props.pocList.length > 0) {
            let data = pocService.prepareDataForBar(this.props.pocList);
            return (<DashCard chartType={'barchart'} title={'POC'} gdata={data} headers={header} onClick={(data) => this.barClick(data)} graphClick={'bar'} toBeClassName={'height400'} />);
        }
        return null;
    }

    renderWhat = () => {
        // if(this.props.showWhat === 'studygroup'){
        //     return(
        //         <div>
        //             {this.renderStudyDashboard()}
        //         </div>
        //     )
        // } else if(this.props.showWhat === 'poc'){
        //     return(
        //         <div>
        //             {this.renderPOCDashboard()}
        //         </div>
        //     )
        // }
        return(
            <div>
                {this.renderStudyDashboard()}
                {this.renderPOCDashboard()}
            </div>
        )
    }
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e

    }
    renderArticleListHeadings = () => {
        if (this.props.artList.length > 0)
            return (
                this.props.artList.map(data => {
                    return (
                        
                        // <div onClick={() => this.getArticleContent(data.Id)}>
                        //     {data.Heading}
                        //     <img src="{require('../src/logo.jpg')}" style={{ width: '10px', height: '10pxnpm ' }} />
                        // </div>
                    <div class="card" style={{width: '50rem',height:'8rem'}}>
                        <img class="card-img-top" src="{require('../../../public/thumbnail.png')}" alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">{data.Heading}</h5>
                          <a href="#" onClick={() => this.getArticleContent(data.Id)} class="card-link">Read more..</a>
                        </div>
                    </div>
                    )
                }));
        return null;
    }
    render() {
        return (
            <div style={{ padding: '10px', width: '100%' }}>
<<<<<<< HEAD
                {this.renderArticleListHeadings()}
                {this.renderArtContent()}
=======
                {this.renderWhat()}
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
            </div>
        )
    }
}

class DashCard extends Component {


    render() {
        return (
            <div style={{ marginBottom: '2px' }}>
                <div className={'chartContainer'}>
                    <p className={'pHeader'}>{this.props.title}</p>
                    <Chart type={this.props.chartType} name={this.props.title} groupId={this.props.groupId} toBeClassName={'relative floatLeft ' + (this.props.toBeClassName ? this.props.toBeClassName : 'mediumSize')} onClick={this.props.onClick} mapdata={this.props.gdata} graphClick={this.props.graphClick} />
                    <Table name={this.props.title} data={this.props.gdata} onClick={this.props.onClick} className={'homeClass'} appliedClassName={true} pk={'Id'} headers={this.props.headers} />
                </div>
            </div>
        )
    }
}

<<<<<<< HEAD
//store -> state this state u want in ur compomemt
//mapStatetoProps, state into component Props
const mapStateToProps = ({ resourcecompetence, competence, article }) => ({
    resourcePerCompetence: resourcecompetence.resourcePerCompetence,
    pocList: competence.poc,
    artList: article.art
=======
const mapStateToProps = ({ resourcecompetence, competence, menu }) => ({
    resourcePerCompetence: resourcecompetence.resourcePerCompetence,
    pocList: competence.poc,
    showWhat: menu.currentID
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (config) => push(config),
    updateRouterData: (data, chart, chartType) => onRouteUpdate({
        type: chart === 'dough' ? ROUTE_UPDATE_DOUGH : ROUTE_UPDATE_BAR,
        payload: {
            data: data,
            chartType: chartType
        }
    })
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


