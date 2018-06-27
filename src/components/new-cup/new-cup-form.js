import React from 'react';
import { reduxForm } from 'redux-form';
import { FormContainer, Button } from '../common';

import ScanPage from './scan-page';
import CupSettings from './cup-settings';

const NewCup = props => {
	const { handleSubmit, submitting, currentValues } = props;

	if (!currentValues.uid) return <ScanPage currentValues={currentValues} />;

	return (
		<FormContainer style={{ flex: 1 }}>
			<CupSettings currentValues={currentValues} />
			<Button onPress={handleSubmit(props.onSubmit)} loading={submitting}>
				finish
			</Button>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'newCup',
})(NewCup);
