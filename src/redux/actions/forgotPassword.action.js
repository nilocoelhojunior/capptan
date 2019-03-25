// @flow
import FORGOT_PASSWORD from '../consts/forgotPassword.const';

import type {
  RequestForgotPasswordType,
  RequestForgotPasswordErrorType,
  RequestForgotPasswordSuccessType,
  ResetForgotPasswordType,
} from './forgotPassword.action.types';
import type { ForgotPasswordType } from '../../api/types/forgotPassword.types';
import type { ErrorType } from '../../api/types/error.types';

export const resetForgotPassword = (): ResetForgotPasswordType => ({
  type: FORGOT_PASSWORD.RESET,
});

export const requestForgotPassword = (data: ForgotPasswordType): RequestForgotPasswordType => ({
  type: FORGOT_PASSWORD.REQUEST,
  payload: data,
});

export const requestForgotPasswordSuccess = (data: boolean): RequestForgotPasswordSuccessType => ({
  type: FORGOT_PASSWORD.REQUEST_SUCCESS,
  payload: data,
});

export const requestForgotPasswordError = (data: ErrorType): RequestForgotPasswordErrorType => ({
  type: FORGOT_PASSWORD.REQUEST_ERROR,
  payload: data,
});
