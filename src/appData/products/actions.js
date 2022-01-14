import {
  GET_ALL_PRODUCTS,
  GET_DETAIL_BY_ID,
  SET_ALL_PRODUCTS,
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

export const getDetailByIdAction = () => {
  return {
    type: GET_DETAIL_BY_ID,
  };
};

export const setDetailByIdAction = detailId => {
  return {
    type: GET_DETAIL_BY_ID,
    detailId,
  };
};
