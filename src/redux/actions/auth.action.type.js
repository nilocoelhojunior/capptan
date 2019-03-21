// @flow
import { LOGIN } from '../consts/auth.const';

import type { LoginType } from '../../api/types/auth.type';
import type { UserType } from '../../api/types/user.type';
import type { ErrorType } from '../../api/types/error.type';

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

export type AuthActionsType = RequestLoginType | RequestLoginErrorType | RequestLoginSuccessType;
