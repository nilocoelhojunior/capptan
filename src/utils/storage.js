// @flow

import { AsyncStorage } from 'react-native';

const APPKEY = '@capptan:';

export const setItem = async (key: string, value: any): any => {
  try {
    await AsyncStorage.setItem(`${APPKEY}:${key}`, value);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (key: string): any => {
  try {
    const value = await AsyncStorage.getItem(`${APPKEY}:${key}`);
    return value;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getID = (): string =>
  Math.random()
    .toString(36)
    .substr(2, 9);
