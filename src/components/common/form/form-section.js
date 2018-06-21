import React from 'react';
import { View } from 'react-native';

export const FormSection = props => (
	<View style={[styles.formSectionStyle, props.style]}>{props.children}</View>
);

const styles = {
	formSectionStyle: {
		marginBottom: 20,
	},
};
