import React from 'react';
import { View, Image } from 'react-native';

import cupSource from '../../img/cup.png';
import regularSource from '../../img/regular.png';
import hazelnutSource from '../../img/hazelnut.png';

import colors from '../../colors';

const imageMap = {
	regular: regularSource,
	hazelnut: hazelnutSource,
};

const Cup = props => {
	const {
		containerStyle,
		creamContainerStyle,
		creamStyle,
		typeContainerStyle,
		typeStyle,
	} = styles;

	const cupHeight = props.height || 125;
	const cupWidth = cupHeight * 0.8;

	const creamHeight = props.cream / 100 * (cupHeight * 0.52);

	return (
		<View style={containerStyle}>
			<Image
				source={cupSource}
				style={{ height: cupHeight, width: cupWidth }}
				resizeMode="contain"
			/>
			<View style={creamContainerStyle}>
				<View style={[creamStyle, { height: creamHeight }]} />
			</View>
			<View style={typeContainerStyle}>
				<Image
					source={imageMap[props.type]}
					style={typeStyle}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
};

const styles = {
	containerStyle: {
		position: 'relative',
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
	typeContainerStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	typeStyle: {
		width: '20%',
		height: 20,
		marginTop: '35%',
	},
	creamStyle: {
		backgroundColor: colors.white,
		width: '55%',
		marginBottom: '20%',
	},
};

export { Cup };
