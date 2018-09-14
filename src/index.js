import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './assets/styles/common.less';
import Router from './router/index.js';
import registerServiceWorker from './utils/registerServiceWorker';
import configureStore from './redux/store';

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();

