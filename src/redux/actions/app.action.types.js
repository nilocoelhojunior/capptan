// @flow
import APP from '../consts/app.const';

export type ChangeRouteType = {
  type: APP.CHANGE_ROUTE,
  payload: string,
};

export type AppActionsType = ChangeRouteType;
