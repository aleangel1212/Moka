import React from 'react';
import { View, Image } from 'react-native';

import cupSource from '../../img/cup.png';

import colors from '../../colors';

const Cup = props => {
	const {
		containerStyle,
		imageStyle,
		creamContainerStyle,
		creamStyle,
	} = styles;

	const cupHeight = props.height || 125;
	const cupWidth = cupHeight * 0.8;

	const creamHeight = props.cream / 100 * (cupHeight * 0.52);

	return (
		<View style={containerStyle}>
			<Image
				source={cupSource}
				style={[imageStyle, { height: cupHeight, width: cupWidth }]}
				resizeMode="contain"
			/>
			<View style={creamContainerStyle}>
				<View style={[creamStyle, { height: creamHeight }]} />
			</View>
		</View>
	);
};

const styles = {
	containerStyle: {
		position: 'relative',
	},
	imageStyle: {
		height: 125,
		width: 100,
	},
	creamContainerStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	creamStyle: {
		backgroundColor: colors.white,
		width: '55%',
		marginBottom: '20%',
	},
};

export default Cup;
