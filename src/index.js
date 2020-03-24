import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import MeiRouter from './router/index';

ReactDOM.render(<MeiRouter />,document.getElementById('root'));
serviceWorker.unregister();
