import React from 'react';
import { View, Text } from 'react-native';
import { ScreenContainer, Cup, Radio } from '../common';

import colors from '../../colors';

const TypePage = props => (
	<ScreenContainer style={styles.screenContainerStyle}>
		<View style={styles.cupContainer}>
			<Text style={styles.textStyle}>flavor</Text>
			<Cup
				type={props.currentValues.type}
				cream={props.currentValues.cream}
			/>
		</View>
		<Radio name="type" data={['regular', 'hazelnut']} />
	</ScreenContainer>
);

const styles = {
	screenContainerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	cupContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		fontSize: 18,
		color: colors.yellow,
		marginBottom: 5,
	},
};

export default TypePage;
