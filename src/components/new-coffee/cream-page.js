import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer, Cup, Slider } from '../common';

import colors from '../../colors';

const CreamPage = props => {
	const {
		screenContainerStyle,
		cupContainer,
		textStyle,
		sliderContainerStyle,
		sliderStyle,
	} = styles;
	const { type, cream } = props.currentValues;

	return (
		<ScreenContainer style={screenContainerStyle}>
			<View style={cupContainer}>
				<Text style={textStyle}>cream</Text>
				<Cup type={type} cream={cream * 15} />
				<Text style={[textStyle, { marginRight: -10 }]}>{cream} shots</Text>
			</View>
			<View style={sliderContainerStyle}>
				<Slider
					style={sliderStyle}
					step={1}
					name="cream"
					maximumValue={4}
					minimumValue={0}
				/>
			</View>
		</ScreenContainer>
	);
};

const styles = {
	screenContainerStyle: {
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

export default CreamPage;
