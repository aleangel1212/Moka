import React from 'react';
import { View, Text } from 'react-native';

import Cup from './cup';

import colors from '../../colors';

const CoffeeDetail = props => {
	const {
		mainContainer,
		headerText,
		detailContainer,
		cupContainer,
		detailContent,
		detailText,
	} = styles;

	return (
		<View style={mainContainer}>
			<Text style={headerText}>default coffee</Text>
			<View style={detailContainer}>
				<View style={cupContainer}>
					<Cup cream={20} />
				</View>
				<View style={detailContent}>
					<Text style={detailText}>flavor: hazelnut</Text>
					<Text style={detailText}>cream: 20%</Text>
					<Text style={detailText}>sugar: 1g</Text>
				</View>
			</View>
			<Text style={[detailText, { textAlign: 'center' }]}>
				select default coffee
			</Text>
		</View>
	);
};

const styles = {
	mainContainer: {
		padding: 20,
	},
	headerText: {
		fontSize: 20,
		marginBottom: 10,
		color: colors.yellow,
	},
	cupContainer: { flex: 4, alignItems: 'flex-end' },
	detailContainer: {
		paddingTop: 20,
		marginBottom: 40,
		flexDirection: 'row',
	},
	detailContent: { flex: 5, justifyContent: 'space-around', paddingLeft: 40 },
	detailText: { color: colors.yellow, fontSize: 20 },
};

export default CoffeeDetail;
