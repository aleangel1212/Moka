import React from 'react';
import { View } from 'react-native';

import { Button } from '../common';

import LoginForm from './login-form';

const Login = () => {
	return (
		<View style={styles.pageContainer}>
			<View style={styles.loginFormContainer}>
				<LoginForm />
			</View>
			<View style={styles.createAccountContainer}>
				<Button>create account</Button>
			</View>
		</View>
	);
};

const styles = {
	pageContainer: {
		backgroundColor: '#573052',
		padding: 30,
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
	},
	loginFormContainer: {
		justifyContent: 'center',
		flex: 4,
	},
	createAccountContainer: {
		flex: 1,
		justifyContent: 'flex-end',
	},
};

export default Login;
