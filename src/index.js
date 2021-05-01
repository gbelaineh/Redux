import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './Reducers';
import App from './Components/App';

// // Store -> A globalized state -> holds all the data for our application
const store = createStore(allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('main'),
);
