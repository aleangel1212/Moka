import React from 'react';
import { Field } from 'redux-form';
import { TextInput, Text, TouchableOpacity } from 'react-native';

const renderInput = ({
	input: { onChange, ...restInput },
	placeholder,
	type,
}) => {
	return (
		<TextInput
			onChangeText={onChange}
			{...restInput}
			placeholder={placeholder}
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
		/>
	);
};

export const Button = props => (
	<TouchableOpacity onPress={props.onPress}>
		<Text>{props.children}</Text>
	</TouchableOpacity>
);
