// @flow
import type { UserType } from '../../api/types/user.type';

export type AuthStateType = {
  user: UserType | null,
  isFetching: boolean,
  error: string | null,
};
