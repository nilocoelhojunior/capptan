// @flow
import { AsyncStorage } from 'react-native';
import { isEmpty } from 'lodash';

import APIError from './utils/APIError';

import type { UserType } from './types/user.type';

/** ****************
 * LOGIN *
 ***************** */

export const loginAPI = async (body: { email: string, password: string }): Promise<UserType> => {
  const defaultUser = {
    name: 'Admin',
    email: 'admin@email.com',
  };

  return new Promise(resolve => {
    window.setTimeout(() => {
      if (body.email !== defaultUser.email || body.password !== '123456') {
        const response = {
          status: 401,
          error: 'unauthorized',
          message: 'Acesso não autorizado, verifique os dados e tente novamente',
        };
        throw new APIError(response.status, response.error, response.message || '');
      }

      if (body.email === defaultUser.email || body.password === '123456') {
        resolve(defaultUser);
      }
    }, 3000);
  });
};

export default login;
