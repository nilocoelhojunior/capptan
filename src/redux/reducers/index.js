import { combineReducers } from 'redux';

import login from './login.reducer';
import signup from './signup.reducer';
import forgotPassword from './forgotPassword.reducer';

export default combineReducers({
  login,
  signup,
  forgotPassword,
});
