// @flow
import type { ErrorType } from '../../api/types/error.types';

export type ForgotPasswordStateType = {
  emailSend: boolean,
  isFetching: boolean,
  error: ErrorType | null,
};
