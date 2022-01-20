import {
  initialState,
  SAVE_PRODUCT,
  SET_ACTIVE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_DETAIL_BY_ID,
  SET_PRODUCT_COUNT,
} from './constants';

import update from 'immutability-helper';

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS:
      state.products = action.products;
      return {...state};
    case SET_DETAIL_BY_ID:
      state.activeProduct = action.product;
      return {...state};
    case SET_ACTIVE_PRODUCT: {
      state.activeProduct = action.product;
      return {...state};
    }
    case SAVE_PRODUCT: {
      const foundIndex = state.savedProducts.findIndex(
        product => product.id === action.product.id,
      );

      if (foundIndex !== -1) {
        state.savedProducts.splice(foundIndex, 1);
        return {...state};
      }

      action.product.count = 1;
      state.savedProducts.push(action.product);
      return {...state};
    }
    case SET_PRODUCT_COUNT: {
      const product = state.savedProducts[action.index];

      return update(state, {
        savedProducts: {
          [action.index]: {
            count: {$set: product.count + 1},
          },
        },
      });
    }
    default:
      return state;
  }
};

export default productReducer;
