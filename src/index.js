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

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    console.log('rootSaga loaded');
    yield takeEvery('GET_REFLEC', fetchSaga);
}


const addReflecToView = (state = [], action) => {
    if(action.type === 'GET_REFLEC'){
        console.log('first reducer!', action)
        axios.get('/api/reflec').then((response)=>{
            console.log('get reflection info', response.data)
            return state = response.data;
        }).catch(error =>{
            console.log('error getting reflections', error)
        })
    
    }
    return state;
}


const store = createStore(
    combineReducers({addReflecToView}),
    applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
