import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as MyRouter} from 'react-router-dom';

ReactDOM.render(<MyRouter><App /></MyRouter>, document.getElementById('root'));