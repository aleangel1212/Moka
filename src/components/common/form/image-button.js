import React from 'react';
import {
	View,
	Image,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback,
	ActivityIndicator,
	Platform,
} from 'react-native';

import colors from '../../../colors';

const TouchableComponent =
	Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export const ImageButton = props => {
	const renderButtonContent = loading => {
		if (props.loading)
			return <ActivityIndicator size="large" color={colors.yellow} />;

		return (
			<View style={styles.buttonContainerStyle}>
				<Image
					source={props.source}
					style={styles.imageStyle}
					resizeMode="contain"
				/>
				<Text style={styles.buttonTextStyle}>{props.text}</Text>
			</View>
		);
	};

	return (
		<TouchableComponent onPress={props.onPress}>
			{renderButtonContent(props.loading)}
		</TouchableComponent>
	);
};

const styles = {
	buttonContainerStyle: {
		padding: 20,
		backgroundColor: colors.red,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonTextStyle: {
		fontSize: 18,
		color: colors.yellow,
	},
	imageStyle: {
		height: 75,
		width: 75,
		marginBottom: 20,
	},
};
