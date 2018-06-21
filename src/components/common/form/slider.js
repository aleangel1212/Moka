import React from 'react';
import { Field } from 'redux-form';
import { Slider as NativeSlider } from 'react-native';

import colors from '../../../colors';

const renderSlider = ({
	input: { onChange, ...restInput },
	placeholder,
	type,
	style,
	minimumValue,
	maximumValue,
	step,
	value,
}) => {
	return (
		<NativeSlider
			minimumValue={minimumValue}
			maximumValue={maximumValue}
			thumbTintColor={colors.white}
			maximumTrackTintColor={colors.yellow}
			minimumTrackTintColor={colors.white}
			step={step}
			style={[styles.slider, style]}
			onValueChange={onChange}
		/>
	);
};

export const Slider = ({ name, style, minimumValue, maximumValue, step }) => {
	return (
		<Field
			name={name}
			component={renderSlider}
			style={style}
			minimumValue={minimumValue}
			maximumValue={maximumValue}
			step={step}
		/>
	);
};

const styles = {
	sliderStyle: {},
};
