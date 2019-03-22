// @flow
import { isEmpty } from 'lodash';

import type { UserType } from './types/user.types';
import type { ErrorType } from './types/error.types';

/** ****************
 * LOGIN *
 ***************** */

export const singupAPI = (user: UserType): Promise<UserType | ErrorType> =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (isEmpty(user.name) || isEmpty(user.email) || isEmpty(user.password)) {
        const response: ErrorType = {
          status: 422,
          error: 'unprocessable_entity',
          message: 'Não podemos criar seu perfil. Verifique os campos e tente novamente',
        };
        reject(response);
      }
      resolve(user);
    }, 1500);
  });

export default singupAPI;
