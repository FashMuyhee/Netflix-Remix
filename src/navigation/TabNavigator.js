import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, ComingSoon, OfflineWatch} from '../screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {withTheme,Colors} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const TabNavigator = ({theme}) => {
  const {colors} = theme;
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: Colors.red700,
        inactiveTintColor: colors.light,
        activeBackgroundColor: colors.otherBlack,
        style: {
          backgroundColor: colors.grey,
          width: '90%',
          position: 'absolute',
          bottom: '1%',
          left: '5%',
          right: '5%',
          height: '7%',
          borderRadius: 50,
          elevation: 0,
          borderTopWidth: 0,
        },
        tabStyle: {
          borderRadius: 50,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="coming_soon"
        component={ComingSoon}
        options={{
          tabBarIcon: ({color}) => <FeatherIcon name="youtube" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="offline_watch"
        component={OfflineWatch}
        options={{
          tabBarIcon: ({color}) => (
            <FeatherIcon name="download" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default withTheme(TabNavigator);
