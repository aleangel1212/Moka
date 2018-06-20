import React from 'react';
import { View } from 'react-native';

const TileContainer = props => (
	<View
		style={{
			flexWrap: 'wrap',
			alignItems: 'flex-start',
			flexDirection: 'row',
		}}
	>
		{props.children}
	</View>
);

export { TileContainer };
