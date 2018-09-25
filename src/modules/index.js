import { combineReducers } from 'redux';
import counter from './counter';
import menu from './menu';
import competence from './competence';
import details from './details';
import article from './article';
import resourcecompetence from './resCompetence'
import { routerReducer } from 'react-router-redux';
import routingInfo from './routingInfo';

//index.js will hold all the reducers
export default combineReducers({
    counter,
    menu,
    competence,
    details,
    resourcecompetence,
    routingInfo,
    article,
    router: routerReducer
});
