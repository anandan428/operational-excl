import { compose, createStore, applyMiddleware } from 'redux';
import {
    routerMiddleware
} from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import rootReducer from '../modules';

export const history = createHistory();

const intialState = {}
const enhancers = []
const middleWare = [
    thunk,
    routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development'){
    const devToolsExtenion = window.__REDUX_DEVTOOLS_EXTENSION__;

    if(typeof devToolsExtenion === 'function') {
        enhancers.push(devToolsExtenion())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleWare),
    ...enhancers
);

const store = createStore(
    rootReducer,
    intialState,
    composedEnhancers
)

export default store;