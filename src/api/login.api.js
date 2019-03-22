// @flow

import type { UserType } from './types/user.types';
import type { ErrorType } from './types/error.types';
/** ****************
 * LOGIN *
 ***************** */

export const loginAPI = (body: {
  email: string,
  password: string,
}): Promise<UserType | ErrorType> => {
  const defaultUser = {
    email: 'nilocoelhojunior@gmail.com',
  };
  console.log('loginAPI', body);
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (body.email !== defaultUser.email || body.password !== '123456') {
        const response: ErrorType = {
          status: 401,
          error: 'unauthorized',
          message: 'Acesso não autorizado, verifique os dados e tente novamente',
        };
        reject(response);
      }

      if (body.email === defaultUser.email || body.password === '123456') {
        resolve(defaultUser);
      }
    }, 1500);
  });
};

export default loginAPI;
