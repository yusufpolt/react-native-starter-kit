import {GET_ALL_PRODUCTS, SET_ALL_PRODUCTS} from './constants';

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
