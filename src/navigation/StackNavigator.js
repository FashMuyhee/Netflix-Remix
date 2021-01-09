import React, {useContext} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {MovieDetail} from '../screens';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      initialRouteName="home"
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
      }}>
      <Stack.Screen name="home" component={TabNavigator} />
      <Stack.Screen name="movie" component={MovieDetail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
