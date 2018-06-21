import React from 'react';
import { Field } from 'redux-form';

import RadioGroup from './radio-group';

import colors from '../../../colors';

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
