import { SELECT_STACK } from '../actions/types';

const INITIAL_STATE = 'CupsStack';

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECT_STACK:
			return action.payload;

		default:
			return state;
	}
};
