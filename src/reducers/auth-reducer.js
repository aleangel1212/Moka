import { AUTH_USER, UNAUTH_USER } from '../actions/types';

const INITIAL_STATE = {
	loggedIn: null,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, loggedIn: true };

		case UNAUTH_USER:
			return { ...state, loggedIn: false };

		default:
			return state;
	}
};
