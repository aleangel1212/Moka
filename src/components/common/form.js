import React from 'react';
import { Field } from 'redux-form';
import {
	TextInput,
	Text,
	TouchableOpacity,
	View,
	Image,
	ActivityIndicator,
} from 'react-native';

import RadioGroup from './radio-group';

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

const renderRadioForm = ({
	input: { onChange, ...restInput },
	style,
	data,
}) => {
	return (
		<RadioGroup
			data={data}
			onChange={onChange}
			buttonColor={colors.yellow}
			labelColor={colors.yellow}
			labelSize={20}
		/>
	);
};

export const Radio = props => {
	return (
		<Field
			name={props.name}
			component={renderRadioForm}
			data={props.data}
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

export const HeaderImage = props => (
	<Image
		source={props.source}
		style={[styles.headerImageStyle, props.style]}
		resizeMode="contain"
	/>
);

export const FormContainer = props => (
	<View style={[styles.formContainerStyle, props.style]}>
		{props.children}
	</View>
);

export const FormSection = props => (
	<View style={[styles.formSectionStyle, props.style]}>{props.children}</View>
);

const styles = {
	formContainerStyle: {},
	formSectionStyle: {
		marginBottom: 20,
	},
	headerImageStyle: {
		height: 100,
		marginBottom: 40,
		width: undefined,
	},
	inputStyle: {
		backgroundColor: colors.red,
		color: colors.white,
		textAlign: 'center',
		fontSize: 18,
		padding: 15,
		marginBottom: 20,
	},
	buttonStyle: {
		padding: 15,
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: colors.yellow,
	},
};
