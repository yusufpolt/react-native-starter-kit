import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './cart-screen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Cart = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={'CartScreen'} component={CartScreen} />
    </Stack.Navigator>
  );
};

export default Cart;
