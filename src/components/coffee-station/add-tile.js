import React from 'react';
import { Image } from 'react-native';
import { Tile } from '../common';

import addSource from '../../img/add.png';

const AddTile = props => (
	<Tile onPress={props.onPress}>
		<Image
			source={addSource}
			style={styles.iconStyle}
			resizeMode="contain"
		/>
	</Tile>
);

const styles = {
	iconStyle: {
		height: 75,
		width: 75,
	},
};

export default AddTile;
