import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ScreenContainer } from '../common';

import colors from '../../colors';

const LoadingScreen = () => (
	<ScreenContainer style={{ justifyContent: 'center' }}>
		<ActivityIndicator size="large" color={colors.yellow} />
	</ScreenContainer>
);

export { LoadingScreen };
