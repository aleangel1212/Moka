import axios from 'axios';

import * as types from './types';

const API_URL = 'http://192.168.1.21:3000';

export const createUser = user => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.post(`${API_URL}/users`, user)
				.then(res => {
					dispatch({ type: types.CREATE_USER, payload: res.data });
					resolve(res.data);
				})
				.catch(err => {
					reject(err);
				});
		});
	};
};

