import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer, Cup, Slider } from '../common';

import colors from '../../colors';

const SugarPage = props => {
	const {
		screenContainerStyle,
		cupContainer,
		textStyle,
		sliderContainerStyle,
		sliderStyle,
	} = styles;
	const { type, cream, sugar } = props.currentValues;

	return (
		<ScreenContainer style={screenContainerStyle}>
			<View style={cupContainer}>
				<Text style={textStyle}>sugar</Text>
				<Cup type={type} cream={cream * 15} />
				<Text style={[textStyle, { marginRight: -10 }]}>{sugar}g</Text>
			</View>
			<View style={sliderContainerStyle}>
				<Slider
					style={sliderStyle}
					step={4}
					name="sugar"
					maximumValue={20}
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

export default SugarPage;
