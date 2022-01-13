import {initialState, SET_ALL_PRODUCTS} from './constants';

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      state.products = action.products;
      return {...state};
    default:
      return {...state};
  }
};

export default productsReducer;
