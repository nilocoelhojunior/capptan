// @flow
import type { TaskType } from '../../api/types/task.types';
import type { ErrorType } from '../../api/types/error.types';

export type TaskStateType = {
  tasks: Array<TaskType>,
  isFetching: boolean,
  error: ErrorType | null,
};
