import { CREATE_USER, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
		case CREATE_USER:
			return action.payload;

		default:
			return state;
	}
};
