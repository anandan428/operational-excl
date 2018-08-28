import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getAllCompetences, getAllPOC } from './modules/competence';
import { getAllDetails } from './modules/details';

store.dispatch(getAllCompetences());
store.dispatch(getAllDetails());
store.dispatch(getAllPOC());
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
