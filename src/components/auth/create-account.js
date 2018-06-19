import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

import * as actions from '../../actions';

import CreateAccountForm from './create-account-form';
import colors from '../../colors';

const CreateAccount = props => {
	return (
		<View style={styles.pageContainer}>
			<CreateAccountForm createUser={props.createUser} />
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
