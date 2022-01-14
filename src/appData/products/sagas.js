/************************* GET POPULAR MOVIES *************************/
import {put, takeLeading} from '@redux-saga/core/effects';
import {setAllProductsAction, setDetailByIdAction} from './actions';
import {getAllProducts, getDetailById} from '../../api/products';
import {GET_ALL_PRODUCTS, GET_DETAIL_BY_ID} from './constants';

/**************** GET ALL PRODUCT ****************/
function* getAllProductsSaga(action) {
  try {
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

function* getDetailByIdSaga(detailId) {
  try {
    const {data: responseData} = yield getDetailById;
    yield put(setDetailByIdAction(responseData, detailId));
  } catch (err) {
    yield put(setDetailByIdAction([]));
  }
}

function* watchGetDetailByIdSaga() {
  yield takeLeading(GET_DETAIL_BY_ID, getDetailByIdSaga);
}

export const productsSaga = [
  watchGetAllProductsSaga(),
  watchGetDetailByIdSaga(),
];
