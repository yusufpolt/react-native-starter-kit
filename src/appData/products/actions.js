import {
  GET_ALL_PRODUCTS,
  GET_DETAIL_BY_ID,
  SAVE_PRODUCT,
  SET_ACTIVE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_DETAIL_BY_ID,
  SET_PRODUCT_COUNT,
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

export const setActiveProductAction = product => {
  return {
    type: SET_ACTIVE_PRODUCT,
    product,
  };
};

export const saveProductAction = product => {
  return {
    type: SAVE_PRODUCT,
    product,
  };
};

export const setProductCountAction = (index, value) => {
  return {
    type: SET_PRODUCT_COUNT,
    index,
    value,
  };
};

export const setDetailByIdAction = product => {
  return {
    type: SET_DETAIL_BY_ID,
    product,
  };
};
