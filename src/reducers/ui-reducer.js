import { OPEN_NAV, CLOSE_NAV, SET_NAV } from '../actions/types';

const INITIAL_STATE = {
	navMenu: {
		isOpen: false,
	},
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OPEN_NAV:
			return { ...state, navMenu: { ...state.navMenu, isOpen: true } };

		case CLOSE_NAV:
			return { ...state, navMenu: { ...state.navMenu, isOpen: false } };

		case SET_NAV:
			return {
				...state,
				navMenu: { ...state.navMenu, isOpen: action.payload },
			};

		default:
			return state;
	}
};
