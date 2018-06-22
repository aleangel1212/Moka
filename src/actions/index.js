import { AsyncStorage, ToastAndroid } from 'react-native';
import axios from 'axios';

import * as types from './types';

const API_URL = 'http://192.168.1.21:3000';

export const notify = text => {
	ToastAndroid.show(text, ToastAndroid.SHORT);

	return {
		type: types.NOTIFY,
		payload: text,
	};
};

export const openNav = () => ({ type: types.OPEN_NAV });
export const closeNav = () => ({ type: types.CLOSE_NAV });
export const setNav = isOpen => ({ type: types.SET_NAV, payload: isOpen });

export const authUser = token => {
	AsyncStorage.setItem('@Moka:x-auth', JSON.stringify({ token }));

	axios.defaults.headers['x-auth'] = token;

	return { type: types.AUTH_USER };
};

export const createUser = user => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URL}/users`, user)
				.then(res => {
					dispatch(authUser(res.data.token));
					dispatch(fetchMe());
					resolve({ token: res.data.token });
				})
				.catch(err => reject(err));
		});
	};
};

export const logoutUser = () => ({ type: types.UNAUTH_USER });

export const loginUser = user => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URL}/auth/login`, user)
				.then(res => {
					dispatch(authUser(res.data.token));
					dispatch(fetchMe());
					resolve({ token: res.data.token });
				})
				.catch(err => reject(err));
		});
	};
};

export const fetchMe = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URL}/users/me`)
				.then(res => {
					dispatch({ type: types.FETCH_ME, payload: res.data });
					resolve(res.data);
				})
				.catch(err => {
					reject(err);
				});
		});
	};
};

export const updateUser = user => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			dispatch({ type: types.USERS_LOADING });

			axios
				.patch(`${API_URL}/users/me`, user)
				.then(res => {
					dispatch({ type: types.UPDATE_ME, payload: res.data });
					resolve(res.data);
				})
				.catch(err => reject(err));
		});
	};
};

export const setDefaultCoffee = (user, index) => {
	const newUser = { ...user };

	const temp = newUser.prefs[0];

	newUser.prefs[0] = newUser.prefs[index];
	newUser.prefs[index] = temp;

	return updateUser(newUser);
};

export const addCoffee = (user, newPref) => {
	const newUser = { ...user };

	newUser.prefs = [...newUser.prefs, newPref];

	return updateUser(newUser);
};

export const deleteCoffee = (user, index) => {
	const newUser = { ...user };

	newUser.prefs = newUser.prefs.filter((pref, i) => i !== index);

	return updateUser(newUser);
};
