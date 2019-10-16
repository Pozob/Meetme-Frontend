import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
