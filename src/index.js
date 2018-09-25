import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getAllCompetences, getAllPOC, getAllEvents } from './modules/competence';
import { getAllDetails } from './modules/details';
import { getAllArticles } from './modules/article';
import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(getAllCompetences());
store.dispatch(getAllDetails());
store.dispatch(getAllPOC());
<<<<<<< HEAD
store.dispatch(getAllArticles());
=======
store.dispatch(getAllEvents());
>>>>>>> dd8e19c9dff67ae6c41352ef108502e3b3e3b53e
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div >
                <App />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
