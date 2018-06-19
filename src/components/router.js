import { createStackNavigator } from 'react-navigation';

import Login from './auth/login';
import CreateAccount from './auth/create-account';

import CoffeeStation from './coffee-station/coffee-station';

export const AuthStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

export const AppStack = createStackNavigator({
	CoffeeStation,
});

