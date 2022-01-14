import {createSelector} from 'reselect';

export const productSelector = createSelector(
  state => state.products.products,
  state => state,
);
