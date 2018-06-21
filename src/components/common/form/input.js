import React from 'react';
import { Field } from 'redux-form';
import { TextInput } from 'react-native';

import colors from '../../../colors';

const renderInput = ({
	input: { onChange, ...restInput },
	placeholder,
	type,
	style,
}) => {
	return (
		<TextInput
			style={[styles.inputStyle, style]}
			onChangeText={onChange}
			{...restInput}
			placeholder={placeholder}
			placeholderTextColor={colors.yellow}
			selectionColor={colors.yellow}
			underlineColorAndroid="transparent"
			autoCorrect={false}
			secureTextEntry={type === 'password'}
		/>
	);
};

export const Input = props => {
	return (
		<Field
			name={props.name}
			component={renderInput}
			placeholder={props.placeholder}
			type={props.type}
			style={props.style}
		/>
	);
};

const styles = {
	inputStyle: {
		backgroundColor: colors.red,
		color: colors.white,
		textAlign: 'center',
		fontSize: 18,
		padding: 15,
		marginBottom: 20,
	},
};
