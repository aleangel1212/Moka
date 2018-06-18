import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login';
import CreateAccount from './components/auth/create-account';

const RootStack = createStackNavigator(
	{
		Login,
		CreateAccount,
	},
	{ headerMode: 'none' },
);

export default RootStack;
