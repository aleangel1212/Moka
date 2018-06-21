import React from 'react';
import { View } from 'react-native';

export const FormContainer = props => (
	<View style={[styles.formContainerStyle, props.style]}>
		{props.children}
	</View>
);

const styles = {
	formContainerStyle: {},
};
