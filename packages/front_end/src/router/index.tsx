import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import {Login} from '../pages/Login';
import {Chat} from '../pages/Chat';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};
const TabGroup = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Welcome'}} />
      <Tab.Screen name="Chat" component={Chat} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Content" component={TabGroup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {Router};
