import React from 'react';
import { Field } from 'redux-form';
import { TextInput, Text, TouchableOpacity } from 'react-native';

import colors from '../../colors';

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

export const Button = props => (
	<TouchableOpacity onPress={props.onPress}>
		<Text style={[styles.buttonStyle, props.style]}>{props.children}</Text>
	</TouchableOpacity>
);

const styles = {
	inputStyle: {
		backgroundColor: colors.red,
		color: colors.white,
		textAlign: 'center',
		fontSize: 18,
		padding: 15,
	},
	buttonStyle: {
		padding: 20,
		fontSize: 18,
		textAlign: 'center',
		color: colors.yellow,
	},
};
