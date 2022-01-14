import {
  GET_ALL_PRODUCTS,
  GET_DETAIL_BY_ID,
  SET_ALL_PRODUCTS,
  SET_DETAIL_BY_ID,
} from './constants';

export const getAllProductsAction = () => {
  return {
    type: GET_ALL_PRODUCTS,
  };
};

export const setAllProductsAction = products => {
  return {
    type: SET_ALL_PRODUCTS,
    products,
  };
};

export const getDetailByIdAction = (id, onSuccess, onFailure) => {
  return {
    type: GET_DETAIL_BY_ID,
    id,
    onSuccess,
    onFailure,
  };
};

export const setDetailByIdAction = product => {
  return {
    type: SET_DETAIL_BY_ID,
    product,
  };
};
