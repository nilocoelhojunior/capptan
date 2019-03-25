// @flow
import TASK from '../consts/task.const';

import type {
  RequestTasksType,
  RequestTasksErrorType,
  RequestTasksSuccessType,
  UpdateTaskType,
  UpdateTaskErrorType,
  UpdateTaskSuccessType,
  CreateTaskType,
  CreateTaskErrorType,
  CreateTaskSuccessType,
} from './task.action.types';
import type { TaskType } from '../../api/types/task.types';
import type { ErrorType } from '../../api/types/error.types';

export const requestTasks = (status: boolean): RequestTasksType => ({
  type: TASK.TASKS_REQUEST,
  payload: status,
});

export const requestTasksSuccess = (data: Array<TaskType>): RequestTasksSuccessType => ({
  type: TASK.TASKS_REQUEST_SUCCESS,
  payload: data,
});

export const requestTasksError = (data: ErrorType): RequestTasksErrorType => ({
  type: TASK.TASKS_REQUEST_ERROR,
  payload: data,
});

export const updateTask = (id: string): UpdateTaskType => ({
  type: TASK.TASK_UPDATE_REQUEST,
  payload: id,
});

export const updateTaskSuccess = (data: TaskType): UpdateTaskSuccessType => ({
  type: TASK.TASK_UPDATE_REQUEST_SUCCESS,
  payload: data,
});

export const updateTaskError = (data: ErrorType): UpdateTaskErrorType => ({
  type: TASK.TASK_UPDATE_REQUEST_ERROR,
  payload: data,
});

export const createTask = (data: TaskType): CreateTaskType => ({
  type: TASK.TASK_CREATE_REQUEST,
  payload: data,
});

export const createTaskSuccess = (data: TaskType): CreateTaskSuccessType => ({
  type: TASK.TASK_CREATE_REQUEST_SUCCESS,
  payload: data,
});

export const createTaskError = (data: ErrorType): CreateTaskErrorType => ({
  type: TASK.TASK_CREATE_REQUEST_ERROR,
  payload: data,
});
