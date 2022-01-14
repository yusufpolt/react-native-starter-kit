import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../../components/products/Products';
import Details from '../../components/details';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Home = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={'Product'} component={Products} />
      <Stack.Screen name={'Detail'} component={Details} />
    </Stack.Navigator>
  );
};

export default Home;
