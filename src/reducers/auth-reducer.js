import { CREATE_USER, LOGIN_USER } from '../actions/types';

const INITIAL_STATE = {
	loggedIn: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOGIN_USER:
		case CREATE_USER:
			return { ...state, token: action.payload };

		default:
			return state;
	}
};
