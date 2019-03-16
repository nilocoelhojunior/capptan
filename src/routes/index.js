// @flow

import * as React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import { SideMenu, VectorIcon } from '../components';
import { Login } from '../screens';

export const ROUTES = {
  LOGIN: 'capptan.LOGIN',
  LIST: 'capptan.LIST',
  DETAILS: 'capptan.DETAILS',
};

export const Drawer = createDrawerNavigator(
  {
    [ROUTES.LOGIN]: { screen: Login },
  },
  {
    initialRouteName: ROUTES.LOGIN,
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    contentComponent: props => <SideMenu {...props} />,
  }
);

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
      [ROUTES.LOGIN]: { screen: Login },
    },
    {
      initialRouteName: ROUTES.LOGIN,
      headerMode: 'none',
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#FFDD0D',
      //   },
      //   headerTitleStyle: {
      //     fontFamily: 'Roboto',
      //     fontWeight: 'normal',
      //     fontSize: 20,
      //     textAlign: 'center',
      //     width: '80%',
      //     color: '#2C2605',
      //   },
      //   headerBackTitleStyle: {
      //     fontFamily: 'Roboto',
      //     fontWeight: 'bold',
      //   },
      //   headerLeft: <VectorIcon name="menu" style={{ padding: 15, fontSize: 20 }} />,
      // },
    }
  )
);
