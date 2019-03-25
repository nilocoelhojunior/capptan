// @flow
import FORGOT_PASSWORD from '../consts/forgotPassword.const';

import type { ForgotPasswordType } from '../../api/types/forgotPassword.types';
import type { ErrorType } from '../../api/types/error.types';

export type RequestForgotPasswordType = {
  type: FORGOT_PASSWORD.REQUEST,
  payload: ForgotPasswordType,
};

export type RequestForgotPasswordSuccessType = {
  type: FORGOT_PASSWORD.REQUEST_SUCCESS,
  payload: boolean,
};

export type RequestForgotPasswordErrorType = {
  type: FORGOT_PASSWORD.REQUEST_ERROR,
  payload: ErrorType,
};

export type ResetForgotPasswordType = {
  type: FORGOT_PASSWORD.RESET,
};

export type ForgotPasswordActionsType =
  | RequestForgotPasswordType
  | RequestForgotPasswordErrorType
  | RequestForgotPasswordSuccessType
  | ResetForgotPasswordType;
