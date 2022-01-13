import {getAllProduct} from '../../api/products';
import {put, takeLeading} from '@redux-saga/core/effects';
import {setAllProductsAction} from './actions';
import {GET_ALL_PRODUCTS} from './constants';

function* getAllProductsSaga() {
  try {
    const {data: responseData} = yield getAllProduct();
    yield put(setAllProductsAction(responseData));
  } catch (e) {
    yield put(setAllProductsAction([]));
  }
}

function* watchGetAllProductsSaga() {
  yield takeLeading(GET_ALL_PRODUCTS, getAllProductsSaga);
}

export const productsSaga = [watchGetAllProductsSaga()];
