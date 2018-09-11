import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.less';
import Router from './router/index.js';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();

