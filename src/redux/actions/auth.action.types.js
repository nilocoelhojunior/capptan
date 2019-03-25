// @flow
import AUTH from '../consts/auth.const';

import type { LoginType } from '../../api/types/login.types';
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';

export type RequestLoginType = {
  type: AUTH.REQUEST,
  payload: LoginType,
};

export type RequestLoginSuccessType = {
  type: AUTH.REQUEST_SUCCESS,
  payload: UserType,
};

export type RequestLoginErrorType = {
  type: AUTH.REQUEST_ERROR,
  payload: ErrorType,
};

export type RequestUserLoggedType = {
  type: AUTH.USER_LOGGED_REQUEST,
  payload: null,
};

export type RequestUserLoggedSuccessType = {
  type: AUTH.USER_LOGGED_SUCCESS,
  payload: UserType,
};

export type RequestUserLoggedErrorType = {
  type: AUTH.USER_LOGGED_ERROR,
  payload: any,
};

export type RequestSignupType = {
  type: AUTH.SIGNUP_REQUEST,
  payload: UserType,
};

export type RequestSignupSuccessType = {
  type: AUTH.SIGNUP_REQUEST_SUCCESS,
  payload: UserType,
};

export type RequestSignupErrorType = {
  type: AUTH.SIGNUP_REQUEST_ERROR,
  payload: ErrorType,
};

export type RequestLogoutType = {
  type: AUTH.LOGOUT_REQUEST,
};

export type RequestLogoutErrorType = {
  type: AUTH.LOGOUT_REQUEST_ERROR,
  payload: ErrorType,
};

export type RequestLogoutSuccessType = {
  type: AUTH.LOGOUT_REQUEST_SUCCESS,
};

export type AuthActionsType =
  | RequestLoginType
  | RequestLoginErrorType
  | RequestLoginSuccessType
  | RequestUserLoggedType
  | RequestUserLoggedSuccessType
  | RequestUserLoggedErrorType
  | RequestSignupType
  | RequestSignupSuccessType
  | RequestSignupErrorType
  | RequestLogoutType
  | RequestLogoutErrorType
  | RequestLogoutSuccessType;
