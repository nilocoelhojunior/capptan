// @flow
import type { LoginStateType } from './login.reducer.types';
import type { ForgotPasswordStateType } from './forgotPassword.reducer.types';

export type ReduxStateType = {
  login: LoginStateType,
  signup: LoginStateType,
  forgotPassword: ForgotPasswordStateType,
};
