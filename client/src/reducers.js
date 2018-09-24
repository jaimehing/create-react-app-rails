import {combineReducers} from 'redux';

import AppReducer from './screens/reducers';

export default combineReducers({
  app: AppReducer
});
