import React from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { View, Text, Image } from 'react-native';

import Cup from './cup';

import regularSource from '../../img/regular.png';
import hazelnutSource from '../../img/hazelnut.png';

import colors from '../../colors';

const selectImage = type => {
	switch (type) {
		case 'hazelnut':
			return hazelnutSource;

		default:
			return regularSource;
	}
};

const CoffeeTile = props => {
	const {
		tileContainerStyle,
		detailContainerStyle,
		cupContainerStyle,
		textStyle,
		iconStyle,
	} = styles;

	const { cream, sugar, type } = props.pref;

	return (
		<TouchableNativeFeedback onPress={() => console.log(props.pref)}>
			<View style={tileContainerStyle}>
				<View style={cupContainerStyle}>
					<Cup height={100} cream={cream} />
				</View>
				<View style={detailContainerStyle}>
					<Image
						source={selectImage(type)}
						style={iconStyle}
						resizeMode="contain"
					/>
					<Text style={textStyle}>{cream}%</Text>
					<Text style={textStyle}>{sugar}g</Text>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

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
	},
	cupContainerStyle: {
		flex: 1,
		alignItems: 'flex-end',
	},
	detailContainerStyle: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textStyle: {
		fontSize: 20,
		color: colors.yellow,
	},
	iconStyle: {
		height: 30,
		width: 30,
		marginBottom: 5,
	},
};

export default CoffeeTile;
