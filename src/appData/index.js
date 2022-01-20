import {applyMiddleware, combineReducers, createStore} from 'redux';
import productReducer from './products/reducer';
import {all} from 'redux-saga/effects';
import {productsSaga} from './products/sagas';
import createSagaMiddleware from 'redux-saga';

function* allSaga() {
  yield all([...productsSaga]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducers = combineReducers({
  products: productReducer,
});

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(allSaga);
