import React from 'react';
import { View } from 'react-native';

import { Button } from '../common';
import colors from '../../colors';

import LoginForm from './login-form';

const Login = props => {
	return (
		<View style={styles.pageContainer}>
			<View style={styles.loginFormContainer}>
				<LoginForm />
			</View>
			<View style={styles.createAccountContainer}>
				<Button
					onPress={() => props.navigation.navigate('CreateAccount')}
				>
					create account
				</Button>
			</View>
		</View>
	);
};

const styles = {
	pageContainer: {
		backgroundColor: colors.primary,
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
