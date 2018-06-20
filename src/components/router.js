import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './auth/login';
import CreateAccount from './auth/create-account';

import CoffeeStation from './coffee-station/coffee-station';
import NewCoffee from './coffee-station/new-coffee';

import colors from '../colors';

const AuthStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

const AppStack = createStackNavigator(
	{
		CoffeeStation,
		NewCoffee,
	},
	{
		initalRouteName: 'CoffeeStation',
		navigationOptions: {
			headerStyle: {
				backgroundColor: colors.red,
			},
			headerTintColor: colors.yellow,
			headerTitleStyle: {
				fontWeight: '300',
				fontSize: 24,
			},
		},
	},
);

export const AppRouter = () => (
	<View style={{ flex: 1 }}>
		<StatusBar backgroundColor={colors.redDark} barStyle="light-content" />
		<AppStack />
	</View>
);

export const AuthRouter = () => (
	<View style={{ flex: 1 }}>
		<StatusBar
			backgroundColor={colors.primaryDark}
			barStyle="light-content"
		/>
		<AuthStack />
	</View>
);
