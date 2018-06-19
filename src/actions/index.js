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
				.then(res => resolve(dispatch(authUser(res.data.token))))
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
				.then(res => resolve(dispatch(authUser(res.data.token))))
				.catch(err => reject(err));
		});
	};
};

export const fetchMe = user => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URL}/users/me`, user)
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
