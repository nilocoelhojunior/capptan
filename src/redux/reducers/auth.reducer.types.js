// @flow
import type { UserType } from '../../api/types/user.types';
import type { ErrorType } from '../../api/types/error.types';

export type AuthStateType = {
  user: UserType | null,
  isFetching: boolean,
  error: ErrorType | null,
};
