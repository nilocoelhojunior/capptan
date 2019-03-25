// @flow
import TASK from '../consts/task.const';

import type { TaskType } from '../../api/types/task.types';
import type { ErrorType } from '../../api/types/error.types';

export type RequestTasksType = {
  type: TASK.TASKS_REQUEST,
  payload: boolean,
};

export type RequestTasksSuccessType = {
  type: TASK.TASKS_REQUEST_SUCCESS,
  payload: Array<TaskType>,
};

export type RequestTasksErrorType = {
  type: TASK.TASKS_REQUEST_ERROR,
  payload: ErrorType,
};

export type UpdateTaskType = {
  type: TASK.TASK_UPDATE_REQUEST,
  payload: string,
};

export type UpdateTaskSuccessType = {
  type: TASK.TASK_UPDATE_REQUEST_SUCCESS,
  payload: TaskType,
};

export type UpdateTaskErrorType = {
  type: TASK.TASK_UPDATE_REQUEST_ERROR,
  payload: ErrorType,
};

export type CreateTaskType = {
  type: TASK.TASK_CREATE_REQUEST,
  payload: TaskType,
};

export type CreateTaskSuccessType = {
  type: TASK.TASK_CREATE_REQUEST_SUCCESS,
  payload: TaskType,
};

export type CreateTaskErrorType = {
  type: TASK.TASK_CREATE_REQUEST_ERROR,
  payload: ErrorType,
};

export type TaskActionsType =
  | RequestTasksType
  | RequestTasksErrorType
  | RequestTasksSuccessType
  | UpdateTaskType
  | UpdateTaskErrorType
  | UpdateTaskSuccessType
  | CreateTaskType
  | CreateTaskErrorType
  | CreateTaskSuccessType;
