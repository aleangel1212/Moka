import { createStackNavigator } from 'react-navigation';

import Login from './auth/login';
import CreateAccount from './auth/create-account';

import CoffeeStation from './coffee-station/coffee-station';

import colors from '../colors';

export const AuthStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

export const AppStack = createStackNavigator(
	{
		CoffeeStation,
	},
	{
		initalRouteName: 'CoffeeStation',
		navigationOptions: {
			headerStyle: {
				backgroundColor: colors.red,
				height: 100,
				position: 'relative',
			},
			headerTintColor: colors.yellow,
			headerTitleStyle: {
				fontWeight: '300',
				fontSize: 24,
				position: 'absolute',
				left: 0,
				bottom: 20,
			},
		},
	},
);
