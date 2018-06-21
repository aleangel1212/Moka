import React from 'react';
import { reduxForm } from 'redux-form';
import { Pages } from 'react-native-pages';
import { FormContainer } from '../common';

import TypePage from './type-page';
import CreamPage from './cream-page';
import SugarPage from './sugar-page';
import FinishPge from './finish-page';

const NewCoffee = props => {
	const { handleSubmit, submitting, currentValues } = props;

	return (
		<FormContainer style={{ flex: 1 }}>
			<Pages>
				<TypePage currentValues={currentValues} />
				<CreamPage currentValues={currentValues} />
				<SugarPage currentValues={currentValues} />
				<FinishPge
					currentValues={currentValues}
					onSubmit={handleSubmit(props.onSubmit)}
					loading={submitting}
				/>
			</Pages>
		</FormContainer>
	);
};

export default reduxForm({
	form: 'newCoffee',
})(NewCoffee);
