import { combineReducers } from 'redux';
import counter from './counter';
import menu from './menu';
import competence from './competence';
import details from './details';
import resourcecompetence from './resCompetence'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    counter,
    menu,
    competence,
    details,
    resourcecompetence,
    router: routerReducer
});
