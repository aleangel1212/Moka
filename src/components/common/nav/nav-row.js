import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import colors from '../../../colors';

const NavRow = props => {
	const { containerStyle, imageStyle, textStyle } = styles;

	return (
		<TouchableOpacity onPress={props.onPress}>
			<View style={containerStyle}>
				<Image
					source={props.imageSource}
					style={imageStyle}
					resizeMode="contain"
				/>
				<Text style={textStyle}>{props.text}</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = {
	containerStyle: {
		padding: 10,
		borderBottomColor: colors.primary,
		borderBottomWidth: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
	},
	imageStyle: {
		height: 30,
		width: 30,
	},
	textStyle: {
		color: colors.primary,
		marginLeft: 10,
		fontSize: 20,
	},
};

export default NavRow;
