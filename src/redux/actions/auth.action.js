// @flow
import { LOGIN } from '../consts/auth.const';

import type {
  RequestLoginType,
  RequestLoginErrorType,
  RequestLoginSuccessType,
} from './auth.action.type';
import type { UserType } from '../../api/types/user.type';
import type { ErrorType } from '../../api/types/error.type';
import type { LoginType } from '../../api/types/auth.type';

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
