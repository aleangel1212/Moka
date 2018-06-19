import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login';
import CreateAccount from './components/auth/create-account';

import CoffeeStation from './components/coffee-station/coffee-station';

const AuthStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

const AppStack = createStackNavigator({
	CoffeeStation,
});

const RootStack = createStackNavigator(
	{
		AuthStack,
		AppStack,
	},
	{ headerMode: 'none', initialRouteName: 'AuthStack' },
);

export default RootStack;
