// @flow
import prettyFormat from 'pretty-format';

import STATUS from '../consts/status';
import APIError from './APIError';

import type { ApiArgumentsType } from '../api';

const withTimeout = (fn: Function) => (args: ApiArgumentsType): Promise<*> =>
  new Promise((resolve, reject) => {
    // if API doesn't answered in one minute, reject the promise
    setTimeout(() => {
      reject(new APIError(STATUS.REQUEST_TIMEOUT, 'Request Timeout', `Request Timeout: ${prettyFormat(args)}`));
    }, 60000);

    fn(args).then(resolve, reject);
  });

export default withTimeout;
