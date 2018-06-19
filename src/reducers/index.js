import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './auth-reducer';
import MeReducer from './me-reducer';

export default combineReducers({
	auth: AuthReducer,
	me: MeReducer,
	form: formReducer,
});
