import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './auth-reducer';
import UsersReducer from './users-reducer';

export default combineReducers({
	auth: AuthReducer,
	users: UsersReducer,
	form: formReducer,
});
