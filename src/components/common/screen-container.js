import React from 'react';
import { View } from 'react-native';

import colors from '../../colors';

const ScreenContainer = props => (
	<View style={[styles.pageContainer, props.style]}>{props.children}</View>
);

const styles = {
	pageContainer: {
		backgroundColor: colors.primary,
		padding: 30,
		flexDirection: 'column',
		flex: 1,
	},
};

export { ScreenContainer };
