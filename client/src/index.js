import React from 'react';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
import ReactDom from 'react-dom';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker.js'
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
ReactDom.render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
