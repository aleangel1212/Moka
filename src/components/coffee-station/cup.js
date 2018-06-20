import React, { Component } from 'react';
import { View, Image } from 'react-native';

import cupSource from '../../img/cup.png';

import colors from '../../colors';

class Cup extends Component {
	render() {
		const { containerStyle, imageStyle, creamStyle } = styles;

		return (
			<View style={containerStyle}>
				<Image
					source={cupSource}
					style={imageStyle}
					resizeMode="contain"
				/>
				<View
					style={[
						creamStyle,
						{ height: this.props.cream / 100 * 65 },
					]}
				/>
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		position: 'relative',
	},
	imageStyle: {
		height: 125,
		width: 100,
	},
	creamStyle: {
		position: 'absolute',
		backgroundColor: colors.white,
		width: 56,
		bottom: 21,
		left: 22,
	},
};

export default Cup;
