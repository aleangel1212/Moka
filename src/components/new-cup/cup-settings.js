import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer, Cup, Slider, Input } from '../common';

import colors from '../../colors';

const CupSettings = props => {
	const {
		screenContainerStyle,
		sizeContainerStyle,
		cupContainer,
		textStyle,
		sliderContainerStyle,
		sliderStyle,
	} = styles;
	const { size } = props.currentValues;

	return (
		<ScreenContainer style={screenContainerStyle}>
			<View style={sizeContainerStyle}>
				<View style={cupContainer}>
					<Text style={textStyle}>size</Text>
					<Cup />
					<Text style={textStyle}>{size} oz</Text>
				</View>
				<View style={sliderContainerStyle}>
					<Slider
						style={sliderStyle}
						step={2}
						name="size"
						maximumValue={12}
						minimumValue={6}
					/>
				</View>
			</View>
			<Input
				name="name"
				placeholder="cup name"
				style={{ width: '100%' }}
			/>
		</ScreenContainer>
	);
};

const styles = {
	screenContainerStyle: {
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	sizeContainerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	cupContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	textStyle: {
		fontSize: 18,
		color: colors.yellow,
		marginBottom: 5,
	},
	sliderContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		flex: 1,
	},
	sliderStyle: {
		width: 300,
		transform: [{ rotateZ: '-90deg' }],
	},
};

export default CupSettings;
