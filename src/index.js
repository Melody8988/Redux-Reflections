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
    yield takeEvery('GET_REFLEC', firstSaga);
    yield takeEvery('ADD_REFLEC', secondSaga);
}

function* firstSaga(action) {
    try {
        const reflecResponse = yield call(axios.get, '/api/reflec');
        console.log('GET reflections', reflecResponse);
        yield put({
            type: 'SET_REFLEC',
            payload: reflecResponse.data
        })
    } catch (error) {
        console.log('firstSaga ERROR', error)
    }
}

function* secondSaga(action) {
    try {
        const addReflec = yield call(axios.post, '/api/reflec', action.payload );
        console.log('added reflection', addReflec);
        yield put({
            type: 'POST_REFLEC',
            payload: addReflec.data
        })
    } catch (error) {
        console.log('firstSaga ERROR', error)
    }
}

//REDUCERS
const currentReflecToView = (state = [], action) => {
        switch (action.type) {
            case 'SET_REFLEC':
                console.log('SET_REFLEC', action.payload)
                return action.payload
            default:
                return state
        }
}

const addReflecToView = (state = [], action) => {
    switch (action.type) {
        case 'POST_REFLEC':
            console.log('POST_REFLEC', action.payload)
            return action.payload
        default:
            return state
    }
}


const store = createStore(
    combineReducers({currentReflecToView, addReflecToView}),
    applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
