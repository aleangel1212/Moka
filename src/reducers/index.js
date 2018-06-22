import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import AuthReducer from './auth-reducer';
import UsersReducer from './users-reducer';
import UIReducer from './ui-reducer';
import StackReducer from './stack-reducer';

export default combineReducers({
	auth: AuthReducer,
	users: UsersReducer,
	ui: UIReducer,
	stack: StackReducer,
	form: formReducer,
});
