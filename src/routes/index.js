// @flow

import * as React from 'react';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { SideMenu } from '../components';
import { Login, SignUp } from '../screens';

export const ROUTES = {
  LOGIN: 'capptan.LOGIN',
  SIGNUP: 'capptan.SIGNUP',
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
      [ROUTES.SIGNUP]: { screen: SignUp },
    },
    {
      initialRouteName: ROUTES.LOGIN,
      headerMode: 'none',
    }
  )
);
