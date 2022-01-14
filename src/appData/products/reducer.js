import {initialState, SET_ALL_PRODUCTS, SET_DETAIL_BY_ID} from './constants';

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      state.products = action.products;
      return {...state};
    case SET_DETAIL_BY_ID:
      state.products.find(item => item.detailId === action.detailId);
      return {...state};
    default:
      return state;
  }
};

export default productReducer;
