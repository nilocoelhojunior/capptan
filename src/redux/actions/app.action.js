// @flow
import APP from '../consts/app.const';

import type { ChangeRouteType } from './app.action.types';

export const changeRoute = (route: string): ChangeRouteType => ({
  type: APP.CHANGE_ROUTE,
  payload: route,
});
