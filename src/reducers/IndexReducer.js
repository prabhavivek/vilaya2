import { combineReducers } from 'redux';

import {authReducer} from './AuthReducer';

const rootReducer = combineReducers({
  authState: authReducer
});

export default rootReducer;