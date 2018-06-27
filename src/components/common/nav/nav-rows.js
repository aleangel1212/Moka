import React from 'react';
import { View } from 'react-native';

import NavRow from './nav-row';

import coffeStationSource from '../../../img/coffee-station.png';
import cupsSource from '../../../img/cups.png';
import settingsSource from '../../../img/settings.png';
import powerSource from '../../../img/power.png';

const NavRows = ({ setStack, closeNav, logoutUser }) => {
	const navigateTo = router => {
		setStack(router);
		closeNav();
	};

	return (
		<View style={styles.containerStyle}>
			<NavRow
				text="coffee station"
				imageSource={coffeStationSource}
				onPress={() => navigateTo('CoffeeStack')}
			/>
			<NavRow
				text="cups"
				imageSource={cupsSource}
				onPress={() => navigateTo('CupsStack')}
			/>
			<NavRow
				text="settings"
				imageSource={settingsSource}
				onPress={() => navigateTo('SettingsStack')}
			/>
			<NavRow
				text="sign out"
				imageSource={powerSource}
				onPress={() => logoutUser()}
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
