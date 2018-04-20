import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

// AddReflecToView = (state, action) => {
//     console.log('reducer AddReflecToView')
// }

// const store = createStore(
//     combineReducers({AddReflecToView})

// )



ReactDOM.render(<Provider ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
