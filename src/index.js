import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
        <App />
      </Router >
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


