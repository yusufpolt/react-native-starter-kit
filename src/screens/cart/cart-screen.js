import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {setProductCountAction} from '../../appData/products/actions';
import {savedProductsSelector} from '../../appData/products/selectors';

const CartScreen = () => {
  const savedProducts = useSelector(savedProductsSelector);
  const dispatch = useDispatch();

  const setProductCount = (index, value) => {
    dispatch(setProductCountAction(index, value));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={savedProducts}
        keyExtractor={item => item.description}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <Text style={{width: '60%'}}>{item.title}</Text>

              <>
                <Text
                  style={{fontSize: 20}}
                  onPress={() => setProductCount(index, -1)}>
                  -
                </Text>
                <Text style={{marginHorizontal: 10}}>{item.count}</Text>
                <Text
                  style={{fontSize: 20}}
                  onPress={() => setProductCount(index, 1)}>
                  +
                </Text>
              </>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default CartScreen;
