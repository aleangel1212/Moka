import { createStackNavigator } from 'react-navigation';

import Login from './components/auth/login';

const RootStack = createStackNavigator(
	{
		Login: {
			screen: Login,
		},
	},
	{ headerMode: 'none' },
);

export default RootStack;
