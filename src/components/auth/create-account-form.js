import React from 'react';
import { reduxForm } from 'redux-form';

import {
	FormContainer,
	FormSection,
	Input,
	Button,
	HeaderImage,
} from '../common';

import Logo from '../../img/logo.png';

const submit = values => {
	console.log('submitting form', values);
};

const LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<FormContainer>
			<HeaderImage source={Logo} />

			<FormSection>
				<Input name="name" placeholder="name" />
				<Input name="email" placeholder="email" />
			</FormSection>

			<FormSection>
				<Input name="password" placeholder="password" type="password" />
				<Input
					name="confirmPassword"
					placeholder="confirm password"
					type="password"
				/>
			</FormSection>

			<Button onPress={handleSubmit(submit)}>submit</Button>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'login',
})(LoginForm);
