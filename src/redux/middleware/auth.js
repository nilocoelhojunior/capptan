import { isEmpty } from 'lodash';

import { ROUTES } from '../../routes';
import navigationService from '../../routes/navigationService';
import AUTH from '../consts/auth.const';

const auth = store => next => action => {
  const result = next(action);
  if (action.type === AUTH.LOGOUT_REQUEST_SUCCESS) {
    const state = store.getState();
    if (isEmpty(state.auth.user)) {
      navigationService.navigate(ROUTES.LOGIN);
    }
  }
  return result;
};

export default auth;
