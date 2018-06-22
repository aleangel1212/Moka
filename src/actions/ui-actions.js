import { ToastAndroid } from 'react-native';

import { NOTIFY, OPEN_NAV, CLOSE_NAV, SET_NAV } from './types';

export const notify = text => {
	ToastAndroid.show(text, ToastAndroid.SHORT);

	return {
		type: NOTIFY,
		payload: text,
	};
};

export const openNav = () => ({ type: OPEN_NAV });

export const closeNav = () => ({ type: CLOSE_NAV });

export const setNav = isOpen => ({ type: SET_NAV, payload: isOpen });
