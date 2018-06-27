import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { NavMenu } from './common';

import Login from './auth/login';
import CreateAccount from './auth/create-account';

import CoffeeStation from './coffee-station/coffee-station';
import NewCoffee from './new-coffee/new-coffee';

import Cups from './cups/cups';
import NewCup from './new-cup/new-cup';

import colors from '../colors';

const AuthStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

const CoffeeStack = createStackNavigator(
	{
		CoffeeStation,
		NewCoffee,
	},
	{
		initialRouteName: 'CoffeeStation',
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

const CupsStack = createStackNavigator(
	{
		Cups,
		NewCup,
	},
	{
		initialRouteName: 'Cups',
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

export const AppRouter = ({ stack }) => {
	const stackMap = {
		CoffeeStack,
		CupsStack,
	};

	const SelectedStack = stackMap[stack] || CoffeeStack;

	return (
		<View style={{ flex: 1 }}>
			<StatusBar
				backgroundColor={colors.redDark}
				barStyle="light-content"
			/>
			<NavMenu>
				<SelectedStack />
			</NavMenu>
		</View>
	);
};

export const AuthRouter = () => (
	<View style={{ flex: 1 }}>
		<StatusBar
			backgroundColor={colors.primaryDark}
			barStyle="light-content"
		/>
		<AuthStack />
	</View>
);
