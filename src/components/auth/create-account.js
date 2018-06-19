import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../../actions';

import CreateAccountForm from './create-account-form';
import colors from '../../colors';

const CreateAccount = props => {
	const onSubmit = values => {
		return props
			.createUser(values)
			.then(res => props.navigation.navigate('CoffeeStation'));
	};

	return (
		<View style={styles.pageContainer}>
			<CreateAccountForm onSubmit={onSubmit} />
		</View>
	);
};

const styles = {
	pageContainer: {
		backgroundColor: colors.primary,
		padding: 30,
		justifyContent: 'center',
		flex: 1,
	},
};

export default connect(null, actions)(CreateAccount);
