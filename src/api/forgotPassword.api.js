// @flow
import { isEmpty } from 'lodash';

import type { ErrorType } from './types/error.types';
import type { ForgotPasswordType } from './types/forgotPassword.types';

export const forgotPasswordAPI = (data: ForgotPasswordType): Promise<boolean | ErrorType> =>
  new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (isEmpty(data.email)) {
        const response: ErrorType = {
          status: 422,
          error: 'unprocessable_entity',
          message: 'Verifique os campos e tente novamente',
        };
        reject(response);
      }
      resolve(true);
    }, 1500);
  });

export default forgotPasswordAPI;
