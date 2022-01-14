import {createSelector} from 'reselect';

export const productSelector = createSelector(
  state => state.products.products,
  state => state,
);

export const activeProductSelector = createSelector(
  state => state.products.activeProduct,
  activeProduct => activeProduct,
);
