import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/appData';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';

const Tabs = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator screenOptions={screenOptions}>
          <Tabs.Screen name={'Home'} component={Home} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
