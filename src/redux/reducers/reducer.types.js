// @flow
import type { LoginStateType } from './login.reducer.types';
import type { ForgotPasswordStateType } from './forgotPassword.reducer.types';
import type { TaskStateType } from './task.reducer.types';
import type { AppStateType } from './app.reducer.types';

export type ReduxStateType = {
  login: LoginStateType,
  signup: LoginStateType,
  forgotPassword: ForgotPasswordStateType,
  task: TaskStateType,
  app: AppStateType,
};
