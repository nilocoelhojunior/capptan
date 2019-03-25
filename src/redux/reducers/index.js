import { combineReducers } from 'redux';

import auth from './auth.reducer';
import forgotPassword from './forgotPassword.reducer';
import task from './task.reducer';
import app from './app.reducer';

export default combineReducers({
  app,
  auth,
  forgotPassword,
  task,
});
