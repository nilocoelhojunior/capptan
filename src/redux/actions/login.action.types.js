// @flow
import LOGIN from '../consts/login.const';

import type { LoginType } from '../../api/types/login.types';
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';

export type RequestLoginType = {
  type: LOGIN.REQUEST,
  payload: LoginType,
};

export type RequestLoginSuccessType = {
  type: LOGIN.REQUEST_SUCCESS,
  payload: UserType,
};

export type RequestLoginErrorType = {
  type: LOGIN.REQUEST_ERROR,
  payload: ErrorType,
};

export type LoginActionsType = RequestLoginType | RequestLoginErrorType | RequestLoginSuccessType;
