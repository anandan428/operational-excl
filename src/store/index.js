import { compose, createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
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
    connectRouter(history)(rootReducer),
    intialState,
    composedEnhancers
)

export default store;