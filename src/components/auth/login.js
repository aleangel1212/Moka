import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../../actions';

import { Button } from '../common';
import colors from '../../colors';

import LoginForm from './login-form';

const Login = props => {
	const onSubmit = values => {
		return props
			.loginUser(values)
			.then(res => props.navigation.navigate('CoffeeStation'));
	};

	return (
		<View style={styles.pageContainer}>
			<View style={styles.loginFormContainer}>
				<LoginForm onSubmit={onSubmit} />
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

export default connect(null, actions)(Login);
