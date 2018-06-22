import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { AUTH_USER, UNAUTH_USER } from './types';

import { fetchMe } from './user-actions';

import routes from '../config/routes';

const API_URL = routes.apiUrl;

export const authUser = token => {
	AsyncStorage.setItem('@Moka:x-auth', JSON.stringify({ token }));

	axios.defaults.headers['x-auth'] = token;

	return { type: AUTH_USER };
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

export const logoutUser = () => ({ type: UNAUTH_USER });

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
