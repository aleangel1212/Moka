import React from 'react';
import { View } from 'react-native';

import NavRow from './nav-row';

import coffeStationSource from '../../../img/coffee-station.png';
import cupsSource from '../../../img/cups.png';
import settingsSource from '../../../img/settings.png';

const NavRows = ({ navigation, closeNav }) => {
	const navigateTo = screen => {
		navigation.navigate(screen);
		closeNav();
	};

	return (
		<View style={styles.containerStyle}>
			<NavRow
				text="coffee station"
				imageSource={coffeStationSource}
				onPress={() => navigateTo('CoffeeStation')}
			/>
			<NavRow
				text="cups"
				imageSource={cupsSource}
				onPress={() => navigateTo('Cups')}
			/>
			<NavRow
				text="settings"
				imageSource={settingsSource}
				onPress={() => navigateTo('Settings')}
			/>
		</View>
	);
};

const styles = {
	containerStyle: {
		paddingTop: 30,
	},
};

export default NavRows;
