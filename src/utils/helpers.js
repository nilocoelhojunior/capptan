// @flow
import { Dimensions, Platform } from 'react-native';

export const getWindowWidth = (): number => Dimensions.get('window').width;

export const getWindowHeight = (): number => Dimensions.get('window').height;

export const WINDOW_WIDTH = getWindowWidth();

export const WINDOW_HEIGHT = getWindowHeight();

export const IS_SMALL: boolean = WINDOW_WIDTH <= 320;

export const IS_MEDIUM: boolean = WINDOW_WIDTH <= 375;

export const IS_LARGE: boolean = WINDOW_WIDTH >= 425;

export const IS_IOS: boolean = Platform.OS === 'ios';

export const IS_ANDROID: boolean = Platform.OS === 'android';

export const isEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
