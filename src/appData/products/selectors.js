import {createSelector} from 'reselect';

export const productsSelector = createSelector(
  state => state.products.products,
  state => state,
);
