import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {productSelector} from '../../appData/products/selectors';
import {
  getAllProductsAction,
  setActiveProductAction,
} from '../../appData/products/actions';
import ProductsCard from './ProductsCard';

const Products = ({navigation}) => {
  const products = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [dispatch]);

  const handleProductDetailSelect = item => {
    dispatch(setActiveProductAction(item));
    navigation.navigate('Detail');
  };

  const renderProduct = ({item}) => {
    return (
      <ProductsCard
        product={item}
        onSelect={() => handleProductDetailSelect(item)}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList data={products} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
