// @flow
import LOGIN from '../consts/login.const';

import type {
  RequestLoginType,
  RequestLoginErrorType,
  RequestLoginSuccessType,
  RequestUserLoggedType,
  RequestUserLoggedSuccessType,
  RequestUserLoggedErrorType,
} from './login.action.types';
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';
import type { LoginType } from '../../api/types/login.types';

export const requestLogin = (data: LoginType): RequestLoginType => ({
  type: LOGIN.REQUEST,
  payload: data,
});

export const requestLoginSuccess = (data: UserType): RequestLoginSuccessType => ({
  type: LOGIN.REQUEST_SUCCESS,
  payload: data,
});

export const requestLoginError = (data: ErrorType): RequestLoginErrorType => ({
  type: LOGIN.REQUEST_ERROR,
  payload: data,
});

export const requestUserLogged = (): RequestUserLoggedType => ({
  type: LOGIN.USER_LOGGED_REQUEST,
  payload: null,
});

export const requestUserLoggedSuccess = (data: UserType): RequestUserLoggedSuccessType => ({
  type: LOGIN.USER_LOGGED_SUCESS,
  payload: data,
});

export const requestUserLoggedError = (data: any): RequestUserLoggedErrorType => ({
  type: LOGIN.USER_LOGGED_ERROR,
  payload: data,
});
