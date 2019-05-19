import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as NoFmRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<NoFmRouter><App /></NoFmRouter>, document.getElementById('root'));

serviceWorker.register();