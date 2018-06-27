import React from 'react';
import { Text } from 'react-native';
import { Tile, Cup } from '../common';

import colors from '../../colors';

const CupTile = props => {
	const { cupContainerStyle, textStyle } = styles;
	const { size, name } = props;

	return (
		<Tile
			onPress={props.onPress}
			onLongPress={props.onLongPress}
			style={cupContainerStyle}
		>
			<Text style={textStyle}>{name}</Text>
			<Cup height={75} />
			<Text style={textStyle}>{size}oz</Text>
		</Tile>
	);
};

const styles = {
	cupContainerStyle: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		padding: 20,
	},
	textStyle: {
		fontSize: 20,
		color: colors.yellow,
	},
};

export default CupTile;
