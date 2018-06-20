import { FETCH_ME, UPDATE_ME, USERS_LOADING } from '../actions/types';

const INITIAL_STATE = { loading: false, me: null };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_ME:
		case FETCH_ME:
			return { ...state, loading: false, me: action.payload };

		case USERS_LOADING:
			return { ...state, loading: true };

		default:
			return state;
	}
};
