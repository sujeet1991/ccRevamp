import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/new_global_header.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Router basename="/creditcard" ><App /></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
