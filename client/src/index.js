import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './app/App';
import configureStore from './common/ReducerManager';
import * as serviceWorker from './serviceWorker';

const store = configureStore (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ());
render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister ();
