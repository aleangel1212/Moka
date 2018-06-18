import React from 'react';
import { Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						hideNavBar
						key="login"
						component={() => <Text>Start</Text>}
						title="Please Login"
						initial
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
