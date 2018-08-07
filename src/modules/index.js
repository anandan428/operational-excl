import { combineReducers } from 'redux';
import counter from './counter';
import menu from './menu';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    counter,
    menu,
    router: routerReducer
});
