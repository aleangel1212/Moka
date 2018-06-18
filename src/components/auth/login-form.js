import React from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form';

import { Input, Button } from '../common';

const submit = values => {
	console.log('submitting form', values);
};

const LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<View>
			<Input name="email" placeholder="email" />
			<Input name="password" placeholder="password" type="password" />
			<Button onPress={handleSubmit(submit)}>Submit</Button>
		</View>
	);
};

export default reduxForm({
	form: 'login',
})(LoginForm);
