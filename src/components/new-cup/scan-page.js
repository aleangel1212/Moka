import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer, QRCodeScanner } from '../common';

import colors from '../../colors';

const ScanPage = props => {
	return (
		<ScreenContainer style={styles.containerStyle}>
			<Text style={styles.textStyle}>scan qr code on cup sticker</Text>
			<QRCodeScanner name="uid" />
		</ScreenContainer>
	);
};

const styles = {
	textStyle: {
		fontSize: 20,
		color: colors.yellow,
	},
	containerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
	},
};

export default ScanPage;
