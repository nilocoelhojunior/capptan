// @flow
import LOGIN from '../consts/login.const';

import type {
  RequestLoginType,
  RequestLoginErrorType,
  RequestLoginSuccessType,
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
