import React from 'react';
import { Vibration } from 'react-native';

import {
	Platform,
	TouchableNativeFeedback,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import colors from '../../colors';

const TouchableComponent =
	Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback;

const Tile = props => (
	<TouchableComponent
		onPress={props.onPress}
		onLongPress={() => {
			Vibration.vibrate(25);
			props.onLongPress();
		}}
	>
		<View style={styles.tileContainerStyle}>{props.children}</View>
	</TouchableComponent>
);

const styles = {
	tileContainerStyle: {
		backgroundColor: colors.red,
		borderColor: colors.primary,
		borderWidth: 0.5,
		aspectRatio: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50%',
		position: 'relative',
	},
};

export { Tile };
