// @flow
import { isEmpty } from 'lodash';

import { getItem, setItem } from '../utils/storage';

import type { UserType } from './types/user.types';
import type { ErrorType } from './types/error.types';

export const loginAPI = (body: {
  email: string,
  password: string,
}): Promise<UserType | ErrorType> =>
  new Promise((resolve, reject) => {
    const responseError: ErrorType = {
      status: 401,
      error: 'unauthorized',
      message: 'Acesso não autorizado, verifique os dados e tente novamente',
    };

    window.setTimeout(() => {
      getItem('users').then(response => {
        const users = JSON.parse(response);
        if (isEmpty(users)) {
          reject(responseError);
        } else {
          const user = users.find((item: UserType) => item.email === body.email);
          if (user) {
            if (user.email === body.email && user.password === body.password) {
              delete user.password;
              resolve(user);
            }
          } else {
            reject(responseError);
          }
        }
      });
    }, 1500);
  });

export const singupAPI = (user: UserType): Promise<UserType | ErrorType> =>
  new Promise((resolve, reject) => {
    const responseError: ErrorType = {
      status: 422,
      error: 'unprocessable_entity',
      message: 'Não podemos criar seu perfil. Verifique os campos e tente novamente',
    };

    window.setTimeout(() => {
      getItem('users').then(response => {
        let users = JSON.parse(response);
        users = isEmpty(users) ? [] : users;
        const existentUser = users.find((item: UserType) => item.email === user.email);
        if (existentUser) {
          responseError.message = 'Usuário já cadastrado, verifique os dados e tente novamente';
          reject(responseError);
        } else {
          users = users.concat(user);
          setItem('users', JSON.stringify(users)).then(() => {
            delete user.password;
            resolve(user);
          });
        }
      });
    }, 1500);
  });
