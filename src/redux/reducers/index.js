import { combineReducers } from 'redux';

import login from './login.reducer';
import signup from './signup.reducer';
import forgotPassword from './forgotPassword.reducer';
import task from './task.reducer';
import app from './app.reducer';

export default combineReducers({
  app,
  login,
  signup,
  forgotPassword,
  task,
});
