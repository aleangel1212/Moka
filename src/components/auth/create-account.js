import React from 'react';
import { View } from 'react-native';

import CreateAccountForm from './create-account-form';
import colors from '../../colors';

const CreateAccount = props => {
	return (
		<View style={styles.pageContainer}>
			<CreateAccountForm />
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

export default CreateAccount;
