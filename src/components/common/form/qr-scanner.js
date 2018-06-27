import React from 'react';
import { Field } from 'redux-form';
import NativeQRScanner from 'react-native-qrcode-scanner';

const renderScanner = ({
	input: { onChange, ...restInput },
	placeholder,
	type,
	style,
}) => {
	return <NativeQRScanner onRead={e => onChange(e.data)} {...restInput} />;
};

export const QRCodeScanner = props => {
	return <Field name={props.name} component={renderScanner} />;
};
