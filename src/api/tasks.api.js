// @flow
import { isEmpty } from 'lodash';

import { getID, getItem, setItem } from '../utils/storage';

import type { TaskType } from './types/task.types';
import type { ErrorType } from './types/error.types';

export const fetchTasks = (status: boolean): Promise<Array<TaskType> | ErrorType> =>
  new Promise(resolve => {
    window.setTimeout(() => {
      getItem('tasks').then(response => {
        let tasks = JSON.parse(response);
        tasks = isEmpty(tasks) ? [] : tasks;
        if (!isEmpty(tasks)) {
          tasks = tasks.filter((task: TaskType) => task.status === status);
          tasks = tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        resolve(tasks);
      });
    }, 1500);
  });

export const postTask = (task: TaskType): Promise<TaskType | ErrorType> =>
  new Promise(resolve => {
    window.setTimeout(() => {
      const newTask = task;
      newTask.id = getID();
      newTask.createdAt = new Date().toLocaleString();
      getItem('tasks').then(responseTasks => {
        let tasks = JSON.parse(responseTasks);
        tasks = isEmpty(tasks) ? [] : tasks;
        tasks = tasks.concat(newTask);
        setItem('tasks', JSON.stringify(tasks)).then(() => {
          resolve(newTask);
        });
      });
    }, 1500);
  });

export const putTask = (task: TaskType): Promise<TaskType | ErrorType> =>
  new Promise(resolve => {
    window.setTimeout(() => {
      getItem('tasks').then(responseTasks => {
        let tasks = JSON.parse(responseTasks);
        tasks = tasks.map(element => {
          if (element.id === task.id) {
            return task;
          }
          return element;
        });
        setItem('tasks', JSON.stringify(tasks)).then(() => {
          resolve(task);
        });
      });
    }, 1500);
  });
