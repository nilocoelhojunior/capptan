// @flow

import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { Icon } from 'native-base';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import { ForgotPassword, Login, Profile, Tasks, SignUp, Task, CreateTask } from '../screens';
import pallete from '../theme/variables/pallete';
import { backToIndex } from './utils';

export const ROUTES = {
  LOGIN: 'capptan.LOGIN',
  SIGNUP: 'capptan.SIGNUP',
  FORGOT_PASSWORD: 'capptan.FORGOT_PASSWORD',
  TABS: 'capptan.TABS',
  TASKS_OPENED: 'capptan.TASKS_OPENED',
  TASKS_CLOSED: 'capptan.TASKS_CLOSED',
  TASK: 'capptan.TASK',
  CREATE_TASK: 'capptan.CREATE_TASK',
  PROFILE: 'capptan.PROFILE',
};

const tasksOpened = createStackNavigator(
  {
    [ROUTES.TASKS_OPENED]: {
      screen: Tasks,
    },
    [ROUTES.TASK]: {
      screen: Task,
    },
    [ROUTES.CREATE_TASK]: {
      screen: CreateTask,
    },
  },
  {
    initialRouteName: ROUTES.TASKS_OPENED,
    headerMode: 'none',
  }
);

const tasksClosed = createStackNavigator(
  {
    [ROUTES.TASKS_CLOSED]: {
      screen: Tasks,
    },
    [ROUTES.TASK]: {
      screen: Task,
    },
    [ROUTES.CREATE_TASK]: {
      screen: CreateTask,
    },
  },
  {
    initialRouteName: ROUTES.TASKS_CLOSED,
    headerMode: 'none',
  }
);

const profile = createStackNavigator(
  {
    [ROUTES.PROFILE]: {
      screen: Profile,
    },
  },
  {
    initialRouteName: ROUTES.PROFILE,
    headerMode: 'none',
  }
);

const bottomTabs = createAppContainer(
  createBottomTabNavigator(
    {
      [ROUTES.TASKS_OPENED]: {
        screen: tasksOpened,
        params: { status: true },
        navigationOptions: () => ({
          title: 'Pautas abertas',
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              type="FontAwesome5"
              name="clipboard-list"
              style={{ fontSize: 18, color: tintColor }}
            />
          ),
          tabBarOnPress: params => {
            backToIndex(params);
          },
        }),
      },
      [ROUTES.TASKS_CLOSED]: {
        screen: tasksClosed,
        params: { status: false },
        navigationOptions: () => ({
          title: 'Pautas fechadas',
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              type="FontAwesome5"
              name="clipboard-check"
              style={{ fontSize: 18, color: tintColor }}
            />
          ),
          tabBarOnPress: params => {
            backToIndex(params);
          },
        }),
      },
      [ROUTES.PROFILE]: {
        screen: profile,
        navigationOptions: () => ({
          title: 'Academy',
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon type="FontAwesome5" name="user" style={{ fontSize: 18, color: tintColor }} />
          ),
          tabBarOnPress: params => {
            backToIndex(params);
          },
        }),
      },
    },
    {
      initialRouteName: ROUTES.TASKS_OPENED,
      tabBarOptions: {
        activeTintColor: pallete.yellow,
        inactiveTintColor: pallete.black,
        style: {
          paddingVertical: 5,
        },
      },
    }
  )
);

export const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      [ROUTES.LOGIN]: { screen: Login },
      [ROUTES.FORGOT_PASSWORD]: { screen: ForgotPassword },
      [ROUTES.SIGNUP]: { screen: SignUp },
      [ROUTES.TABS]: bottomTabs,
    },
    {
      initialRouteName: ROUTES.LOGIN,
      headerMode: 'none',
      mode: 'modal',
      transparentCard: true,
      transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;

          const height = layout.initHeight;
          const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
          });

          const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
          });

          return { opacity, transform: [{ translateY }] };
        },
      }),
    }
  )
);
