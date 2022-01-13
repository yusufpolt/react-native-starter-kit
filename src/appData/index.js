import {applyMiddleware, combineReducers, createStore} from 'redux';
import productsReducer from './products/reducer';
import {all} from 'redux-saga/effects';
import {productsSaga} from './products/sagas';
import createSagaMiddleware from 'redux-saga';

function* allSagas() {
  yield all([...productsSaga]);
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const reducers = combineReducers({
  products: productsReducer,
});

export const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(allSagas);
