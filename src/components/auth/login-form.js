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

const LoginForm = props => {
	const { handleSubmit } = props;

	return (
		<FormContainer>
			<HeaderImage source={Logo} />

			<FormSection>
				<Input name="email" placeholder="email" />
				<Input name="password" placeholder="password" type="password" />
				<Button onPress={handleSubmit(props.onSubmit)}>login</Button>
			</FormSection>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'login',
})(LoginForm);
