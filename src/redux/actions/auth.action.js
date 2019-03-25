// @flow
import AUTH from '../consts/auth.const';

import type {
  RequestLoginType,
  RequestLoginErrorType,
  RequestLoginSuccessType,
  RequestUserLoggedType,
  RequestUserLoggedSuccessType,
  RequestUserLoggedErrorType,
  RequestSignupType,
  RequestSignupSuccessType,
  RequestSignupErrorType,
  RequestLogoutType,
  RequestLogoutErrorType,
  RequestLogoutSuccessType,
} from './auth.action.types';
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';
import type { LoginType } from '../../api/types/login.types';

export const requestLogin = (data: LoginType): RequestLoginType => ({
  type: AUTH.REQUEST,
  payload: data,
});

export const requestLoginSuccess = (data: UserType): RequestLoginSuccessType => ({
  type: AUTH.REQUEST_SUCCESS,
  payload: data,
});

export const requestLoginError = (data: ErrorType): RequestLoginErrorType => ({
  type: AUTH.REQUEST_ERROR,
  payload: data,
});

export const requestUserLogged = (): RequestUserLoggedType => ({
  type: AUTH.USER_LOGGED_REQUEST,
  payload: null,
});

export const requestUserLoggedSuccess = (data: UserType): RequestUserLoggedSuccessType => ({
  type: AUTH.USER_LOGGED_SUCESS,
  payload: data,
});

export const requestUserLoggedError = (data: any): RequestUserLoggedErrorType => ({
  type: AUTH.USER_LOGGED_ERROR,
  payload: data,
});

export const requestSignup = (data: UserType): RequestSignupType => ({
  type: AUTH.SIGNUP_REQUEST,
  payload: data,
});

export const requestSignupSuccess = (data: UserType): RequestSignupSuccessType => ({
  type: AUTH.SIGNUP_REQUEST_SUCCESS,
  payload: data,
});

export const requestSignUpError = (data: ErrorType): RequestSignupErrorType => ({
  type: AUTH.SIGNUP_REQUEST_ERROR,
  payload: data,
});

export const requestLogout = (): RequestLogoutType => ({
  type: AUTH.LOGOUT_REQUEST,
});

export const requestLogoutSuccess = (): RequestLogoutSuccessType => ({
  type: AUTH.LOGOUT_REQUEST_SUCCESS,
});

export const requestLogoutError = (data: ErrorType): RequestLogoutErrorType => ({
  type: AUTH.LOGOUT_REQUEST_ERROR,
  payload: data,
});
