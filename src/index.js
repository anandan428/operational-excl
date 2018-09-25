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
import { getAllArticles } from './modules/article';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(getAllCompetences());
store.dispatch(getAllDetails());
store.dispatch(getAllPOC());
store.dispatch(getAllArticles());
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div >
                <App />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
