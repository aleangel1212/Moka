import React from 'react';
import { connect } from 'react-redux';
import { ScreenContainer } from '../common';

import * as actions from '../../actions';

import CreateAccountForm from './create-account-form';

const CreateAccount = props => {
	const onSubmit = values => {
		return props
			.createUser(values)
			.then(res => props.navigation.navigate('CoffeeStation'));
	};

	return (
		<ScreenContainer>
			<CreateAccountForm onSubmit={onSubmit} />
		</ScreenContainer>
	);
};

export default connect(null, actions)(CreateAccount);
