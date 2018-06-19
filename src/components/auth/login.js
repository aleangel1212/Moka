import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../../actions';

import { Button, ScreenContainer } from '../common';

import LoginForm from './login-form';

const Login = props => {
	const onSubmit = values => {
		return props
			.loginUser(values)
			.catch(res => props.notify(res.response.data.error));
	};

	return (
		<ScreenContainer>
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
		</ScreenContainer>
	);
};

const styles = {
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
