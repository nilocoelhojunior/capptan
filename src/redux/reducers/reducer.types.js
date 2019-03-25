// @flow
import type { AuthStateType } from './auth.reducer.types';
import type { ForgotPasswordStateType } from './forgotPassword.reducer.types';
import type { TaskStateType } from './task.reducer.types';
import type { AppStateType } from './app.reducer.types';

export type ReduxStateType = {
  auth: AuthStateType,
  forgotPassword: ForgotPasswordStateType,
  task: TaskStateType,
  app: AppStateType,
};
