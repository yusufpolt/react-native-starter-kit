export const GET_ALL_PRODUCTS = '@PRODUCT_GET_ALL_PRODUCTS';
export const SET_ALL_PRODUCTS = '@PRODUCT_SET_ALL_PRODUCTS';
export const SET_ACTIVE_PRODUCT = '@PRODUCT_SET_ACTIVE_PRODUCT';
export const SAVE_PRODUCT = '@PRODUCT_SAVE_PRODUCT';
export const SET_PRODUCT_COUNT = '@PRODUCT_SET_PRODUCT_COUNT';

export const GET_DETAIL_BY_ID = '@DETAIL_GET_DETAIL_BY_ID';
export const SET_DETAIL_BY_ID = '@DETAIL_SET_DETAIL_BY_ID';

export const initialState = {
  products: [],
  activeProduct: {},
  savedProducts: [],
};
