// @flow
import { isEmpty } from 'lodash';

import { getItem } from '../utils/storage';
import type { UserType } from './types/user.types';
import type { ErrorType } from './types/error.types';
import type { ForgotPasswordType } from './types/forgotPassword.types';

export const forgotPasswordAPI = (data: ForgotPasswordType): Promise<boolean | ErrorType> =>
  new Promise((resolve, reject) => {
    const responseError: ErrorType = {
      status: 422,
      error: 'unprocessable_entity',
      message: 'E-mail não cadastrado, verifique os campos e tente novamente',
    };

    window.setTimeout(() => {
      getItem('users').then(response => {
        const users = JSON.parse(response);
        if (isEmpty(users)) {
          reject(responseError);
        } else {
          const user = users.find((item: UserType) => item.email === data.email);
          if (user) {
            resolve(true);
          } else {
            reject(responseError);
          }
        }
      });
    }, 1500);
  });

export default forgotPasswordAPI;
