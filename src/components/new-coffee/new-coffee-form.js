import React from 'react';
import { reduxForm } from 'redux-form';
import { Pages } from 'react-native-pages';
import { FormContainer, Button } from '../common';

import TypePage from './type-page';

const NewCoffee = props => {
	const { handleSubmit, submitting, currentValues } = props;

	return (
		<FormContainer style={{ flex: 1 }}>
			<Pages>
				<TypePage type={currentValues.type} />
			</Pages>
			<Button onPress={handleSubmit(props.onSubmit)}>submit</Button>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'newCoffee',
})(NewCoffee);
