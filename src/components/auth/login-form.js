import React from 'react';
import { KeyboardAvoidingView, Image } from 'react-native';
import { reduxForm } from 'redux-form';

import { Input, Button } from '../common';

import Logo from '../../img/logo.png';

const submit = values => {
	console.log('submitting form', values);
};

const LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<KeyboardAvoidingView behavior="padding" style={styles.loginForm}>
			<Image source={Logo} style={styles.image} resizeMode="contain" />
			<Input name="email" placeholder="email" />
			<Input name="password" placeholder="password" type="password" />
			<Button onPress={handleSubmit(submit)}>login</Button>
		</KeyboardAvoidingView>
	);
};

const styles = {
	loginForm: {
		height: 375,
		justifyContent: 'space-between',
	},
	image: {
		height: 100,
		marginBottom: 20,
		width: undefined,
	},
};

export default reduxForm({
	form: 'login',
})(LoginForm);
