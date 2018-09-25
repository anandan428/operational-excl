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
                {this.renderArticleListHeadings()}
                {this.renderArtContent()}
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

//store -> state this state u want in ur compomemt
//mapStatetoProps, state into component Props
const mapStateToProps = ({ resourcecompetence, competence, article }) => ({
    resourcePerCompetence: resourcecompetence.resourcePerCompetence,
    pocList: competence.poc,
    artList: article.art
})

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (config) => push(config),
    updateRouterData: (data, chart) => onRouteUpdate({
        type: chart === 'dough' ? ROUTE_UPDATE_DOUGH : ROUTE_UPDATE_BAR,
        payload: data
    })
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


