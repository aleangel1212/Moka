import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import colors from '../../../colors';

export const Button = props => {
	if (props.loading)
		return <ActivityIndicator size="large" color={colors.yellow} />;

	return (
		<TouchableOpacity onPress={props.onPress}>
			<Text style={[styles.buttonStyle, props.style]}>
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		padding: 15,
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: colors.yellow,
	},
};
