/************************* GET POPULAR MOVIES *************************/
import {put, takeLeading, select} from '@redux-saga/core/effects';
import {setAllProductsAction, setDetailByIdAction} from './actions';
import {getAllProducts, getDetailById} from '../../api/products';
import {GET_ALL_PRODUCTS, GET_DETAIL_BY_ID} from './constants';

/**************** GET ALL PRODUCT ****************/
function* getAllProductsSaga(action) {
  try {
    const state = yield select();
    const {data: responseData} = yield getAllProducts();

    yield put(setAllProductsAction(responseData));
  } catch (err) {
    yield put(setAllProductsAction([]));
  }
}

function* watchGetAllProductsSaga() {
  yield takeLeading(GET_ALL_PRODUCTS, getAllProductsSaga);
}

/*************** GET DETAIL BY ID **************/

function* getDetailByIdSaga(action) {
  try {
    const {data: responseData} = yield getDetailById(action.id);
    yield put(setDetailByIdAction(responseData));

    action.onSuccess && action.onSuccess();
  } catch (err) {
    yield put(setDetailByIdAction([]));
    action.onFailure && action.onFailure();
  }
}

function* watchGetDetailByIdSaga() {
  yield takeLeading(GET_DETAIL_BY_ID, getDetailByIdSaga);
}

export const productsSaga = [
  watchGetAllProductsSaga(),
  watchGetDetailByIdSaga(),
];
