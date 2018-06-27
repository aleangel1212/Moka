import axios from 'axios';

import { FETCH_ME, USERS_LOADING, UPDATE_ME } from './types';

import routes from '../config/routes';

const API_URL = routes.apiUrl;

export const fetchMe = () => {
	return dispatch => {
		return new Promise((resolve, reject) => {
			axios
				.get(`${API_URL}/users/me`)
				.then(res => {
					dispatch({ type: FETCH_ME, payload: res.data });
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
			dispatch({ type: USERS_LOADING });

			axios
				.patch(`${API_URL}/users/me`, user)
				.then(res => {
					dispatch({ type: UPDATE_ME, payload: res.data });
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

export const addCup = (user, newCup) => {
	const newUser = { ...user };

	newUser.cups = [...newUser.cups, newCup];

	return updateUser(newUser);
};

export const deleteCup = (user, index) => {
	const newUser = { ...user };

	newUser.cups = newUser.cups.filter((cup, i) => i !== index);

	return updateUser(newUser);
};
