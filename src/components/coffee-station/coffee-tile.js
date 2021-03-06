import React from 'react';
import { View, Text, Image } from 'react-native';
import { Tile, Cup } from '../common';

import regularSource from '../../img/regular.png';
import hazelnutSource from '../../img/hazelnut.png';

import colors from '../../colors';

const imageMap = {
	regular: regularSource,
	hazelnut: hazelnutSource,
};

const CoffeeTile = props => {
	const {
		detailContainerStyle,
		cupContainerStyle,
		textStyle,
		iconStyle,
	} = styles;

	const { cream, sugar, type } = props.pref;

	return (
		<Tile onPress={props.onPress} onLongPress={props.onLongPress}>
			<View style={cupContainerStyle}>
				<Cup height={100} cream={cream * 15} type={type} />
			</View>
			<View style={detailContainerStyle}>
				<Image
					source={imageMap[type]}
					style={iconStyle}
					resizeMode="contain"
				/>
				<Text style={textStyle}>{sugar}g</Text>
			</View>
		</Tile>
	);
};

const styles = {
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
