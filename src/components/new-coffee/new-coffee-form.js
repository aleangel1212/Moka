import React from 'react';
import { reduxForm } from 'redux-form';
import { Pages } from 'react-native-pages';
import { FormContainer, Button } from '../common';

import FormPage from './form-page';

const NewCoffee = props => {
	const { handleSubmit, submitting } = props;

	return (
		<FormContainer style={{ flex: 1 }}>
			<Pages>
				<FormPage />
			</Pages>
			<Button onPress={handleSubmit(props.onSubmit)}>submit</Button>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'newCoffee',
})(NewCoffee);
