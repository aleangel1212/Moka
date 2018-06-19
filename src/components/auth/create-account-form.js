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

const CreateAccountForm = props => {
	const { handleSubmit, submitting } = props;

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

			<Button onPress={handleSubmit(props.onSubmit)} loading={submitting}>
				submit
			</Button>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'createAccount',
})(CreateAccountForm);
