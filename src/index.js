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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('GET_REFLEC', getReflecSaga);
    yield takeEvery('ADD_REFLEC', addReflecSaga);
    // yield takeEvery('DELETE_REFLEC', deleteReflecSaga);

}

function* getReflecSaga(action) {
    try {
        const reflecResponse = yield call(axios.get, '/api/reflec');
        yield put({
            type: 'SET_REFLEC',
            payload: reflecResponse.data
        })
    } catch (error) {
        console.log('getReflecSaga error', error)
    }
}

function* addReflecSaga(action) {
    try {
        const addReflec = yield call(axios.post, '/api/reflec', action.payload);
        console.log('added reflection', addReflec);
        yield put({
            type: 'POST_REFLEC',
            payload: addReflec.data
        })
    } catch (error) {
        console.log('firstSaga ERROR', error)
    }
}

// function* deleteReflecSaga(action) {
//     try {
//         const deleteReflec = yield call(axios.delete, '/api/reflec/' + action.payload.id );
//         yield put({
//             type: 'REMOVE_REFLEC',
//             payload: deleteReflec.data
//         })
//     } catch (error) {
//         console.log('deleteReflecSaga error', error)
//     }
//     console.log('in deletereflecsaga', action.payload.id)
// }

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

// const deleteReflecOnView = (state = [], action) => {
//     switch (action.type) {
//         case 'REMOVE_REFLEC':
//             console.log('REMOVE_REFLEC', action.payload)
//             return action.payload
//         default:
//             return state
//     }
// }

const store = createStore(
    combineReducers({ currentReflecToView, addReflecToView }),
    applyMiddleware(sagaMiddleware, logger)
)
sagaMiddleware.run(rootSaga);



ReactDOM.render(<Provider store={store}><MuiThemeProvider><App /></MuiThemeProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
